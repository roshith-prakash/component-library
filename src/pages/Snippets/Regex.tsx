import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";

const isValidEmailRegex = `// Check if input is a valid email
export const isValidEmail = (email:string) => {
  return /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/.test(email);
};`;

const isValidPasswordRegex = `// Check if password has :
//  - At least 8 characters
//  - An uppercase character
//  - A lowercase character
//  - A number
//  - An special character
export const isValidPassword = (password:string) => {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
    password
  );
};`;

const isValidUsernameRegex = `// Ensures a username contains only lowercase letters (a-z), digits (0-9), underscores (_), or dots (.)
export const isValidUsername = (username:string) => {
  return /^[a-z0-9_\\.]+$/.test(username);
};
`;

const usingCode = ``;

const Regex = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Regex Functions | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Regex Functions</h1>

      <h2 className="pt-10 pl-1 italic">isValidEmail.ts</h2>
      <h3 className="py-5">
        Check if the string entered is in a valid email format.
      </h3>
      <CopyBlock
        text={isValidEmailRegex}
        language="typescript"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />

      <h2 className="pt-10 pl-1 italic">isValidPassword.ts</h2>
      <h3 className="py-5">
        Check if the string entered is in a valid password format. Password must
        contain atleast 8 character, and must contain an uppercase, lowercase,
        special character and a number.
      </h3>
      <CopyBlock
        text={isValidPasswordRegex}
        language="typescript"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />

      <h2 className="pt-10 pl-1 italic">isValidUsername.ts</h2>
      <h3 className="py-5">
        Check if the string entered is in a valid username format. String can
        only contain lowercase characters, numbers, and underscores (_) and
        periods (.).
      </h3>
      <CopyBlock
        text={isValidUsernameRegex}
        language="typescript"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />

      <h3 className="py-10 pl-1 italic">App.tsx</h3>
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

export default Regex;
