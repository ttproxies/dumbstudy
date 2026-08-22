import { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonCont from "./ButtonCont";
import cyclesConfig from "../configs/cycles";

export default function Clock() {
    const [curCycle, setCurCycle] = useState(1); // The currently worked cycle. One cycle represents a work and a break block.
    const [curMode, setCurMode] =
        useState<keyof typeof cyclesConfig.durations>("Work");

    const [remaining, setRemaining] = useState(cyclesConfig.durations[curMode]);
    const [counting, setCounting] = useState(false);

    useEffect(() => {
        // Run on load to set timer
        if (counting) {
            const countdown = setInterval(() => {
                setRemaining((prevRem) => {
                    if (prevRem <= 1) {
                        clearInterval(countdown);
                        setCounting(false);

                        // Decide next timer mode
                        const nextTimerMode = getNextTimerMode(curMode, curCycle)
                        setCurMode(nextTimerMode);

                        if (curCycle % cyclesConfig.longBreakInterval !== 0) {setCurCycle(prevCycle => prevCycle + 1);}

                        return cyclesConfig.durations[nextTimerMode]; // Important to note that state variables change on render, not assignment.
                    }

                    return prevRem - 1;
                });
            }, 1000);

            return () => clearInterval(countdown); // Never keep interval running post-render
        }
    }, [counting]);

    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;

    const time = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    return (
        <ClockContainer>
            <div className="clock__options">
                <ButtonCont></ButtonCont>
            </div>
            <div className="clock__watch">
                <div className="clock__status">
                    <TimerMode>{curMode}</TimerMode>
                    <TimerRemaining>{time}</TimerRemaining>
                </div>
                <button
                    className="clock__toggle"
                    onClick={() => {
                        setCounting(!counting);
                    }}
                >
                    {counting ? "pause" : "start"}
                </button>
            </div>
        </ClockContainer>
    );
}

const getNextTimerMode = function (prevMode, currentCycle) {
    if (prevMode === "Work") {
        return currentCycle % cyclesConfig.longBreakInterval == 0
            ? "Long Break"
            : "Short Break";
    }

    return "Work";
};

// css

const TimerRemaining = styled.div`
    font-size: 6rem;
    font-weight: 800;
`;

const TimerMode = styled.div`
    text-align: center;
`;

const ClockContainer = styled.div`
    text-align: center;
    max-width: 500px;
    margin: auto;
`;
