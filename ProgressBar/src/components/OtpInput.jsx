import React, { useEffect, useRef, useState } from "react";
const OTP_DIGIT_SIZE = 5;

const OtpInput = () => {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_SIZE).fill(""));

  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (e, index) => {
    const value = e.target.value;

    // Allow only numbers
    if (isNaN(value)) return;

    // Create a new copy of the input array
    const newValue = value.trim();

    const newArr = [...inputArr];
    newArr[index] = newValue;

    setInputArr(newArr);

    newValue && refArr.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    // console.log(e);

    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-center">Otp Input Box</h1>

      <div className="flex items-center justify-center mt-10 gap-1">
        {inputArr.map((input, index) => (
          <input
            key={index}
            value={inputArr[index]}
            onChange={(e) => handleOnChange(e, index)}
            className="border-2 outline-none text-center w-24 h-12"
            type="text"
            maxLength={1}
            ref={(input) => (refArr.current[index] = input)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default OtpInput;
