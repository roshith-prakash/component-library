import { useEffect } from "react";
import { CodeBlock } from "../../components";

const axiosCode = `import axios from "axios";

export const devURL = "http://localhost:4000";
export const prodURL = "https://produrl.com";

// Creating an instance of axios to make API calls to server
export const axiosInstance = axios.create({
  baseURL: prodURL,
});
`;

const usingCode = `import {useEffect} from "react"
import { axiosInstance } from "./axiosInstance"

const App = () =>{

  useEffect(()=>{
    axios.get("/test" , (res) => { console.log(res) });
  },[])

  return(
    <div>Axios Test</div>
  )
}`;

const AxiosInstance = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Axios | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">
        Custom Axios Instance
      </h1>
      <h2 className="py-5 text-center">
        Creates a custom axios instance to add a baseURL. Can add other required
        props/attributes here.
      </h2>

      <h3 className="py-10 pl-1 italic">axiosInstance.ts</h3>
      <CodeBlock code={axiosCode} language="typescript" />

      <h3 className="py-10 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default AxiosInstance;
