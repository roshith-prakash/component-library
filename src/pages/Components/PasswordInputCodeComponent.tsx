import { useEffect, useState } from "react";
import { CodeBlock, PasswordInput } from "../../components";

const PasswordInputCode = `import { ChangeEventHandler, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

// Styled Password input field.
const PasswordInput = ({
  value,
  placeholder,
  onChange,
}: {
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  // State to convert field to text or password field
  const [display, setDisplay] = useState(false);
  return (
    // Relative div
    <div className="relative w-full">
      {/* Input field - can be text or password field depending on state */}
      <input
        type={display ? "text" : "password"}
        className="dark:placeholder:text-grey border-darkbg/70 mt-3 min-h-8 w-full rounded-b-xs border-b-2 bg-transparent py-2 focus:outline-none dark:border-white/70 "
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {/* Absolutely positioned icon - acts as buttons to change field type */}
      {display ? (
        <FaEye
          className="absolute top-6 right-2 cursor-pointer"
          onClick={() => setDisplay((prev) => !prev)}
        />
      ) : (
        <FaEyeSlash
          className="absolute top-6 right-2 cursor-pointer"
          onClick={() => setDisplay((prev) => !prev)}
        />
      )}
    </div>
  );
};

export default PasswordInput;`;

const usingCode = `import  PasswordInput  from "./PasswordInput";
import { useState } from "react"

const App = () => {
const [password,setPassword] = useState<string>("")

  return (
  <>
    <PasswordInput value={password} placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
  </> );
}`;

const PasswordInputCodeComponent = () => {
  const [inputValue, setInputValue] = useState<string>("");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Password Input | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Password Input</h1>
      <h2 className="py-5">A styled Password Input component.</h2>
      <div className="mx-auto my-20 flex flex-col items-center gap-8 rounded-xl px-5 py-10 shadow-lg md:w-fit md:min-w-lg md:px-20 dark:shadow dark:shadow-white">
        <div className="w-72">
          <PasswordInput
            value={inputValue}
            placeholder="Enter your password"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
            <b>value (string, required):</b> The value in the input element.
          </li>
          <li>
            {" "}
            <b>onChange (function, required):</b> The function to be executed
            when the value in the input is changed.
          </li>
          <li>
            {" "}
            <b>placeholder (function, optional):</b> The placeholder value shown
            when no value is present.
          </li>
        </ul>
      </div>

      <h3 className="py-2 pl-1 italic">PasswordInput.tsx</h3>
      <CodeBlock code={PasswordInputCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default PasswordInputCodeComponent;
