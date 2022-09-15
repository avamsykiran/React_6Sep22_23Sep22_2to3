import { useState, useEffect } from 'react';

const CounterFC = (props) => {
    let [steps, setSteps] = useState(0);
    let [laps, setLaps] = useState(0);

    useEffect(() => { setSteps(1) }, [])

    useEffect(() => {
        if (steps < 0) {
            setSteps(0);
        } else if (steps === 10) {
            setSteps(0)
            setLaps(laps + 1);
        }
    }, [steps])

    const stepUp = event => setSteps(steps + 1);
    const stepDown = event => setSteps(steps - 1);

    return (
        <div className="col mx-auto text-center">
            <button onClick={stepUp} className='btn btn-sm btn-primary'><strong>++</strong></button>
            <strong> {steps} / {laps} </strong>
            <button onClick={stepDown} className='btn btn-sm btn-secondary'><strong>--</strong></button>
        </div>
    );
}

export default CounterFC;