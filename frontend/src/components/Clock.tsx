import { useState, useEffect } from "react";
import ButtonCont from "./ButtonCont";
import cycles from "../configs/cycles.js";

export default function Clock() {
    let [cyclesCompleted, setCyclesCompleted] = useState(0);
    let [curCycle, setCurCycle] = useState(0);

    const durSec = cycles.durations[cycles.pattern[cyclesCompleted % cycles.pattern.length]];

    let [remaining, setRemaining] = useState(durSec);
    let [counting, setCounting] = useState(false);

    useEffect(() => {
        // Run on load to set timer
        if (counting) {
            const countdown = setInterval(() => {
                setRemaining((prev) => {
                    // Errors with type assignment number | void: means sometimes void = nothing is returned
                    if (prev <= 1) {
                        clearInterval(countdown);
                        setCyclesCompleted(cyclesCompleted + 1);
                        setCounting(false);
                        return 0;
                    }

                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(countdown); // The interval persists page rerender, therefore cleaning the interval up if the effect is cut short is a good idea
        }
    }, [counting]);

    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;

    const time = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    return (
        <div className="clock">
            <div className="clock__options">
                <ButtonCont></ButtonCont>
            </div>
            <div className="clock__watch">
                <div className="clock__timer">{time}</div>
                <button
                    className="clock__toggle"
                    onClick={() => {
                        console.log("clicked");    
                        setCounting(!counting);
                    }}
                >
                    {counting ? 'stop' : 'start'}
                </button>
            </div>
        </div>
    );
}
