import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, ButtonLink, TimerButton, ClockOptionButton } from "./Button"
import cyclesConfig from "../configs/cycles";

type ModeType = keyof typeof cyclesConfig.durations;

export default function Clock() {
    const [curCycle, setCurCycle] = useState(1); // The currently worked cycle. One cycle represents a work and a break block.
    const [curMode, setCurMode] = useState<ModeType>("Work");

    const [remaining, setRemaining] = useState(cyclesConfig.durations[curMode]);
    const [counting, setCounting] = useState(false);

    // Countdown
    useEffect(() => {
        if (counting) {
            const countdown = setInterval(() => {
                setRemaining((prevRem) => {
                    if (prevRem === 1) {
                        clearInterval(countdown);
                        setCounting(false); // Forcefully update counting to avoid not regenerating countdown interval
                    }

                    return prevRem - 1;
                });
            }, 1000);

            return () => clearInterval(countdown); // Never keep interval running post-render
        }
    }, [counting]);

    // Handle mode change
    useEffect(() => {
        if (remaining === 0) {
            setCounting(cyclesConfig.autoStartNext);
    
            // Decide next timer mode
            const nextTimerMode = getNextTimerMode(curMode, curCycle);
            setCurMode(nextTimerMode);

            if (curMode !== "Work") {
                setCurCycle((prevCycle) => prevCycle + 1);
            } // Increment cycle if finishing a break timer

            setRemaining(cyclesConfig.durations[nextTimerMode]);
        }
    }, [remaining]);

    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;

    const time = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    return (
        <ClockContainer>
            <div className="clock__options">
                <ButtonCont>
                    <ClockOptionButton onClick={() => console.log('hello')}>
                        work
                    </ClockOptionButton>
                    <ClockOptionButton onClick={() => console.log('hello')}>
                        short break
                    </ClockOptionButton>
                    <ClockOptionButton onClick={() => console.log('hello')}>
                        long break
                    </ClockOptionButton>
                </ButtonCont>
            </div>
            <div className="clock__watch">
                <div className="clock__status">
                    <TimerMode>{curMode}</TimerMode>
                    <TimerRemaining>{time}</TimerRemaining>
                </div>
                <TimerButton
                    styleClass={TimerButton}
                    onClick={() => {
                        setCounting(!counting);
                    }}
                >
                    {counting ? "pause" : "start"} / #{curCycle}
                </TimerButton>
            </div>
        </ClockContainer>
    );
}

const getNextTimerMode = function (prevMode: ModeType, currentCycle: number) {
    if (prevMode === "Work") {
        return currentCycle % cyclesConfig.longBreakInterval == 0
            ? "Long Break"
            : "Short Break";
    }

    return "Work";
};

// css

const TimerRemaining = styled.div`
    font-size: 10rem;
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

const ButtonCont = styled.ul`
    display: flex;
    gap: 1rem;
`