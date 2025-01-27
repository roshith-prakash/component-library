import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";

const UseDebounceCode = `import { useEffect, useState } from "react";

// Hook to debounce user input
const useDebounce = (value: string, delay: number = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  // Runs each time value is changed - clearing timeout if user is still typing & changing value only when user stops typing & one second has passed.
  useEffect(() => {
    // Set timeout to change debounce value
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear timeout to cancel changing the value
    return () => clearTimeout(timeout);
  }, [value]);

  // Return the debounced value
  return debouncedValue;
};

export default useDebounce;
`;

const usingCode = ``;

const UseDebounceHook = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "useDebounce | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">useDebounce</h1>
      <h2 className="py-5 text-center">
        Debounces input with the delay provided.
      </h2>

      <h3 className="py-10 pl-1 italic">useDebounce.tsx</h3>
      <CopyBlock
        text={UseDebounceCode}
        language="tsx"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />

      <h3 className="mt-8 pl-1 italic">App.tsx</h3>
      <CopyBlock
        text={usingCode}
        language="tsx"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />
    </div>
  );
};

export default UseDebounceHook;
