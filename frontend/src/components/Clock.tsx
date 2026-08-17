import { useState, useEffect } from 'react';
import ButtonCont from "./ButtonCont";

export default function Clock() {
    const dur = 3000; // 50min

    let [remaining, setRemaining] = useState(dur);

    useEffect(() => {
        const countdown = setInterval(() => {
            setRemaining(prev => { // Errors with type assignment number | void: means sometimes void = nothing is returned
                if (prev <= 1) {
                    clearInterval(countdown);
                    return 0
                }

                return prev - 1
            })
        }, 1000);

        return () => clearInterval(countdown) // The interval persists page rerender, therefore cleaning the interval up if the effect is cut short is a good idea
    }, []);

    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;

    const time = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    return (
        <div className="clock">
            <div className="clock__options">
                <ButtonCont></ButtonCont>
            </div>
            <div className="clock__watch">
                <div className="clock__timer">{time}</div>
                <button className="clock__actionbtn">start / stop</button>
            </div>
        </div>
    );
}
