import { useEffect } from "react";
import { Checkbox, CodeBlock } from "../../components";

const CheckboxCode = `
import { ChangeEventHandler, useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";

const Checkbox = ({
  value,
  name,
  id,
  onChange,
  checked: controlledChecked = false,
  className = "",
}: {
  value?: string;
  name?: string;
  id?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  className?: string;
}) => {
  const [checked, setChecked] = useState<boolean>(controlledChecked);

  // Sync with controlled checked prop
  useEffect(() => {
    setChecked(controlledChecked);
  }, [controlledChecked]);

  const handleChange = () => {
    const newCheckedState = !checked;
    setChecked(newCheckedState);
    // Trigger the onChange function and pass the checkbox value and new checked state
    onChange({
      target: { value, checked: newCheckedState },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="inline-block">
      <input
        id={id}
        type="checkbox"
        className="hidden"
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <button
        role="checkbox"
        onClick={handleChange}
        className={\`border-darkbg dark:border-darkmodetext mx-2 h-5 w-5 cursor-pointer rounded border-2 \${checked ? "bg-cta text-white" : "bg-transparent"} \${className}\`}
      >
        {checked && <TiTick />}
      </button>
    </div>
  );
};

export default Checkbox;
`;

const usingCode = `import Checkbox from './Checkbox';

const App = () => {

    return (
      <>
        <div className="flex items-center justify-center">
            <Checkbox
                onChange={(e) => {
                  console.log(e.target.checked);
                }}
                checked
            />
            <label>Check this</label>
        </div>
      </>
  )
}

`;

const CheckboxComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Checkbox | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Checkbox</h1>
      <h2 className="mt-8 py-5 text-center">
        A customizable, styled Checkbox component with Tailwind CSS.
      </h2>

      <div className="flex flex-wrap items-center justify-center py-8">
        <Checkbox
          onChange={(e) => {
            console.log(e.target.checked);
          }}
          checked
        />
        <label>Check this!</label>
      </div>

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
            <b>value (string , optional):</b> Value for the checkbox.{" "}
          </li>
          <li>
            {" "}
            <b> name (string, optional):</b> Name for the checkbox.
          </li>
          <li>
            {" "}
            <b>id (string, optional):</b> Id for the checkbox.{" "}
          </li>
          <li>
            {" "}
            <b>onChange (function, required):</b> Function to be executed when
            the checkbox is clicked.
          </li>
          <li>
            {" "}
            <b>checked (boolean, optional):</b> To specify if the checkbox is
            already checked.
          </li>
          <li>
            {" "}
            <b>classname (string, optional):</b> To override the styles for the
            checkbox.
          </li>
        </ul>
      </div>

      <h3>Checkbox.tsx</h3>
      <CodeBlock code={CheckboxCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default CheckboxComponent;
