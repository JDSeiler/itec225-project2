import React from 'react';
import styled from 'styled-components';
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';
import PomodoroBlocks from './PomodoroBlocks';

const TimerWrapper = styled.div`
    flex: 2;
    background: darkgray;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const TimerFlexContinaer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    width: 85%;
    height: 75%;
    background: white;

    border-radius: 35px;

    box-shadow: 10px 10px 30px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 30px -10px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 30px -10px rgba(0,0,0,0.75);
`;


export enum IntervalType {
    // eslint-disable-next-line no-unused-vars
    WorkPeriod,
    // eslint-disable-next-line no-unused-vars
    ShortBreak,
    // eslint-disable-next-line no-unused-vars
    LongBreak
}

interface TimerState {
    timerValue: number,
    intervalType: IntervalType,
    completedPomodoroCount: number,
}

class Timer extends React.Component<{}, TimerState> {
    readonly WORK_DURATION = 25 * 60;
    readonly SHORT_BREAK_DURATION = 5 * 60;
    readonly LONG_BREAK_DURATION = 15 * 60;
    ticker: any;
    
    constructor(props: any) {
        super(props);
        this.advanceTimer = this.advanceTimer.bind(this);
        this.requestNotifications = this.requestNotifications.bind(this);

        this.startTimer = this.startTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);

        this.state = {
            timerValue: this.WORK_DURATION,
            intervalType: IntervalType.WorkPeriod,
            completedPomodoroCount: 1
        };
    }
    
    componentDidMount() {
        this.requestNotifications();
    }
    
    /* 
    Notifications ONLY work on secure origins now! So when this is run locally
    it MUST be accessed via localhost, and not the LAN ip yarn start provides.
    
    If you aren't on a secure host, notifications are entirely disabled
    */
    requestNotifications() {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission().then((res) => {
                if (res !== 'granted') {
                    console.log('Notifications denied');
                }
            });
        }
    }
    
    /**
     * Handles the "ticking" of the timer. Every second this
     * method will either advance the timer 1 second (by subtracting
     * a second from the remaining duration) or will stop the timer
     * and call #handleTimerCompletion()
     */
    advanceTimer() {
        if(this.state.timerValue === 0) {
            clearInterval(this.ticker);
            this.ticker = null;

            this.handleTimerCompletion();
        } else {
            this.setState((prevState) => {
                return { timerValue: prevState.timerValue-1 };
            });
        }
    }

    /**
     * When the timer finishes (reaches 0 seconds) this
     * function handles what happens after that according
     * to the rules of Pomodoro.
     */
    handleTimerCompletion() {
        if (this.state.intervalType === IntervalType.WorkPeriod) {
            if (this.state.completedPomodoroCount < 4) {
                this.setUpShortBreak();
            } else {
                this.setUpLongBreak();
            }
        } else if (this.state.intervalType === IntervalType.ShortBreak) {
            this.setState((prevState) => {
                return {...prevState, completedPomodoroCount: prevState.completedPomodoroCount + 1};
            });
            this.setUpWorkPeriod();
        } else if (this.state.intervalType === IntervalType.LongBreak) {
            this.resetTimer();
        }
    }
    
    setUpWorkPeriod() {
        if (Notification.permission === 'granted') {
            new Notification('Break time is over! Start your next Pomodoro!');
        }
        this.setState((prevState) => {
            return {...prevState, timerValue: this.WORK_DURATION, intervalType: IntervalType.WorkPeriod};
        });
    }
        
    setUpShortBreak() {
        if (Notification.permission === 'granted') {
            new Notification('Your work period has finished! You\'re now on break!');
        }
        this.setState((prevState) => {
            return {...prevState, timerValue: this.SHORT_BREAK_DURATION, intervalType: IntervalType.ShortBreak};
        });
        if(!this.ticker) this.ticker = setInterval(this.advanceTimer, 1000);
    }

    setUpLongBreak() {
        if (Notification.permission === 'granted') {
            new Notification('Enjoy this long break, you earned it!');
        }
        this.setState((prevState) => {
            return {...prevState, timerValue: this.LONG_BREAK_DURATION, intervalType: IntervalType.LongBreak};
        });
        if(!this.ticker) this.ticker = setInterval(this.advanceTimer, 1000);
    }
    
    startTimer() {
        // If this.ticker is truthy, the timer is already running
        // so clicking Start should do nothing.
        if(!this.ticker) { 
            this.advanceTimer();
            this.ticker = setInterval(this.advanceTimer, 1000);
        }
    }

    resetTimer() {
        clearInterval(this.ticker);
        this.ticker = null;
        this.setState(() => {
            return { timerValue: this.WORK_DURATION, intervalType: IntervalType.WorkPeriod, completedPomodoroCount: 1 };
        });
    }

    stopTimer() {
        // Only allow the timer to be paused during work periods
        // Otherwise a break could be extended forever.
        if(this.state.intervalType === IntervalType.WorkPeriod) {
            clearInterval(this.ticker);
            this.ticker = null;
        }
    }

    render() {
        return(
            <TimerWrapper>
                <TimerFlexContinaer>
                    <TimerDisplay seconds={this.state.timerValue}/>
                    <TimerControls startCallback={this.startTimer} resetCallback={this.resetTimer} stopCallback={this.stopTimer}/>
                    <PomodoroBlocks pomodoroCount={this.state.completedPomodoroCount} intervalType={this.state.intervalType}/>
                </TimerFlexContinaer>
            </TimerWrapper>
        );
    }
}

export default Timer;