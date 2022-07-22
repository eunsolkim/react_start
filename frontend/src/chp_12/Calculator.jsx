import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

// 섭씨 온도 값을 props로 받아서 100도씨 이상이면 끓는다는 문자열을, 그 외에는 물이 끓지 않는다는 문자열을 출력하는 함수
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

// 화씨 -> 섭씨 온도로 변환하는 함수
function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

// 섭씨 -> 화씨 온도로 변환하는 함수
function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// 온도값과 변환하는 함수를 파라미터로 받아서 값을 변환시켜 리턴해주는 함수
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

// TemperatureInput 컴포넌트를 사용하여 섭씨/화씨 입력 양식을 제공
// 또한, 모든 온도를 섭씨로 변환하여 BoilingVerdict에 전달해줌으로써 물이 끓는지 아닌지를 출력함
function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius = 
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = 
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    
    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;