import React, { useEffect, useState } from "react";
import "./counter.css";
import { TIME_PER_QUESTION } from '../../constants/constant';

function Counter({ onTimeout }) {
    console.log("---Counter---")
    const [count, setCount] = useState(TIME_PER_QUESTION);

    const progressStyle = {
        background: `conic-gradient(#d9d9d9 ${(TIME_PER_QUESTION - count) * 36
            }deg, #ff8fa2 ${(TIME_PER_QUESTION - count) * 36}deg)`
    }
   
    useEffect(() => {
        if (count === 0)
            onTimeout()
        else
            setTimeout(() => {
                setCount(count - 1);
            }, 1000);
    }, [count]);

    return (
        <div className="progress-container" style={progressStyle}>
            <div className="value-container">
                {count ? count : <small style={{ fontSize: '11px' }}>Time up!</small>}
            </div>
        </div>
    );
}

export default Counter;
