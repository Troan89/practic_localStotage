import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    let [value, setValue] = useState<number>(0)

    useEffect(() => {
        let valueToString = localStorage.getItem("counterValue1")
        if (valueToString) {
            let newValue = JSON.parse(valueToString)
            setValue(newValue)
        }
    }, [])


    useEffect(() => {
        localStorage.setItem("counterValue1", JSON.stringify(value))
    }, [value])


    const incHandler = () => {
        setValue(value + 1)
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
        </div>
    );
}

export default App;
