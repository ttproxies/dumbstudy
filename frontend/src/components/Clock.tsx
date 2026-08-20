import { useState, useEffect } from "react";
import ButtonCont from "./ButtonCont";
import cyclesConfig from "../configs/cycles";

export default function Clock() {
    const [curCycle, setCurCycle] = useState(1); // The current cycle iteration
    const [curMode, setCurMode] = useState<keyof typeof cyclesConfig.durations>("Work")

    if (curMode === "Work") {
        setCurMode(curCycle % cyclesConfig.longBreakInterval === 0 ? "Long Break" : "Short Break");
    } else {
        setCurMode("Work");
        setCurCycle(curCycle + 1);
    }

    const durSec: number = cyclesConfig.durations[curMode];

    let [remaining, setRemaining] = useState(durSec);
    let [counting, setCounting] = useState(false);

    useEffect(() => {
        // Run on load to set timer
        if (counting) {
            const countdown = setInterval(() => {
                setRemaining((prev) => {
                    if (prev <= 1) {
                        clearInterval(countdown);
                        setCounting(false);
                        return 0;
                    }

                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(countdown); // Never keep interval running post-render
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
