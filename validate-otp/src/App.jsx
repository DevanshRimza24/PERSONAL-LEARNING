import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
  const OTP_digit_count = 5;

  const [inputArr, setInputArr] = useState(new Array(OTP_digit_count).fill());

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const refArr = useRef([]);

  const handleChange = (value, index) => {
    console.log(value);
    if (isNaN(value)) return;

    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = value.slice(-1);
    setInputArr(newArr);
    newValue && refArr.current[index + 1]?.focus();
  };

  const handleOnKeyDown = (e, index) => {
    console.log(e);
    if (!e.target.value && e.key === "Backspace") {
      console.log("Hello");
      refArr.current[index - 1]?.focus();
    }
  };

  return (
    <div className="App">
      <h1>Validate OTP</h1>

      {inputArr.map((input, index) => {
        return (
          <input
            className="otp"
            type="text"
            key={index}
            value={inputArr[index]}
            onChange={(e) => handleChange(e.target.value, index)}
            ref={(input) => (refArr.current[index] = input)}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
}
