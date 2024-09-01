import React, { useState, useEffect } from 'react';
import './Timer.css';

// Defining functional React component PomodoroTimer:
const PomodoroTimer = () => {
    const [minutes, setMinutes] = useState(25); // State variable minutes with an initial value of 25. Function setMinutes is used to update this state.
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false); // State variable isActive determine if the timer is currently running. Initialized to false.
    const [isPaused, setIsPaused] = useState(true);
    
    // Defining a useEffect hook to run the effect (timer logic) whenever isActive, isPaused, minutes, or seconds changes.
    useEffect(() => {
        let interval = null;
        // Checking if the timer is active and not paused. If true, it starts a new interval.
        if (isActive && !isPaused) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(interval);
                        setIsActive(false);
                        setMinutes(25);
                        setSeconds(0);
                        alert('Pomodoro work session ended!');
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, isPaused, minutes, seconds]);

    const startTimer = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const pauseTimer = () => {
        setIsPaused(true);
    };

    const resetTimer = () => {
        setIsActive(false);
        setIsPaused(true);
        setMinutes(25);
        setSeconds(0);
    };

    return (
        <div className="timer">
            <h1>Pomodoro Timer</h1>
            <div className="timer-display">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>
            <div className="timer-controls">
                {!isActive && isPaused ? (
                    <button onClick={startTimer}>Start</button>
                ) : (
                    <button onClick={pauseTimer}>Pause</button>
                )}
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};

export default PomodoroTimer;