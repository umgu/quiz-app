import React, { useEffect, useState } from 'react';
import "./toast.css"

function BasicExample({text}) {
    const [show, setShow] = useState(true);

    useEffect(()=> {
        setTimeout(()=> {
            setShow(false);
        }, 3000);
    }, [])

    return show && <div className="toast-container">
        {text}
    </div>
}

export default BasicExample;