import { useState, useEffect } from 'react';
import ButtonCont from "./ButtonCont";

export default function Clock() {
    const dur = 3000; // 50min
    const [h, m] = [Math.floor(dur / 60), dur % 60];

    const [remaining, setRemaining] = useState(dur);

    useEffect(() => {
        
    }, [dur])

    return (
        <div className="clock">
            <div className="clock__options">
                <ButtonCont></ButtonCont>
            </div>
            <div className="clock__watch">
                <div className="clock__timer">{h}:{m}</div>
                <button className="clock__actionbtn">start / stop</button>
            </div>
        </div>
    );
}
