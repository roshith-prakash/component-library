import { useEffect } from "react";
import { CodeBlock } from "../../components";

const formatNumberCode = `export const numberFormat = (num: number) => {
  return Intl.NumberFormat("en-us", { notation: "compact" }).format(num);
};`;

const usingCode = `import { formatNumber } from "./formatNumber

const App = () => {
  return <p>{formatNumber(1000000)} minute read.</p>
}
`;

const FormatNumber = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Format Number | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Format Number</h1>
      <h2 className="py-5">
        Uses the Internationalization API to format numbers into Human Readable
        format.
      </h2>

      <h3 className="py-10 pl-1 italic">formatNumber.ts</h3>
      <CodeBlock code={formatNumberCode} language="typescript" />

      <h3 className="mt-8 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default FormatNumber;
