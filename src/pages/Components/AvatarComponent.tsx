import { useEffect } from "react";
import { Avatar, CodeBlock } from "../../components";

const ModalCode = `import { useEffect, useState } from "react";

const Avatar = ({
  imageSrc = "",
  fallBackText,
  className,
  border = false,
  borderClassName,
}: {
  imageSrc?: string;
  fallBackText?: string;
  className?: string;
  border?: boolean;
  borderClassName?: string;
}) => {
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);

  const checkImage = (imageUrl: string) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsValid(true);
    img.onerror = () => setIsValid(false);
  };

  // Run the check when the component mounts or the URL changes
  useEffect(() => {
    checkImage(imageSrc);
  }, [imageSrc]);

  // Extract first letters of fallBack text
  const extractFirstLetters = (str: string) => {
    const words = str.split(" ");
    return words.length === 1
      ? words[0][0]
      : words[0][0] + words[words.length - 1][0];
  };

  return (
    <div
      className={\`\${border && \`to-cta from-darkmodeCTA flex items-center justify-center rounded-full bg-gradient-to-br \${borderClassName} \`} w-fit p-1\`}
    >
      {isValid ? (
        <img
          src={imageSrc}
          className={\`\${border && \`dark:border-secondarydarkbg border-2 border-white \${borderClassName} \`} h-12 w-12 rounded-full \${className}\`}
        />
      ) : fallBackText ? (
        <p
          className={\`\${border && \`dark:border-secondarydarkbg border-2 border-white \${borderClassName} \`} from-cta to-hovercta flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br text-xl font-semibold text-white \${className}\`}
        >
          {extractFirstLetters(fallBackText)}
        </p>
      ) : (
        <img
          src={
            "https://res.cloudinary.com/do8rpl9l4/image/upload/v1738212915/image_1_jy29je.jpg"
          }
          className={\`\${border && \`dark:border-secondarydarkbg border-2 border-white \${borderClassName} \`} h-12 w-12 rounded-full \${className}\`}
        />
      )}
    </div>
  );
};

export default Avatar;
`;

const usingCode = `import Avatar from './Avatar';

const App = () => {

    return (
      <>
        <div className="flex flex-wrap justify-center gap-8 py-8">
          <Avatar
            imageSrc="https://avatars.githubusercontent.com/u/86643111?v=4"
            fallBackText="Roshith Prakash"
            border
          />

          <Avatar
            imageSrc="https://avatars.githubusercontent.com/u/86643111?v=4"
            fallBackText="Roshith Prakash"
          />

          <Avatar imageSrc="" fallBackText="Roshith Prakash" border />

          <Avatar imageSrc="" fallBackText="Roshith Prakash" />

          <Avatar imageSrc="" fallBackText="" />
        </div>
      </>
  )
}

`;

const AvatarComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Avatar | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Avatar</h1>
      <h2 className="py-5">
        Avatar component to display user's profile image.
      </h2>
      <div className="mx-auto my-20 flex flex-wrap items-center justify-center gap-8 rounded-xl px-5 py-10 shadow-lg md:w-fit md:px-20 dark:shadow dark:shadow-white">
        <Avatar
          imageSrc="https://avatars.githubusercontent.com/u/86643111?v=4"
          fallBackText="Roshith Prakash"
          border
        />

        <Avatar
          imageSrc="https://avatars.githubusercontent.com/u/86643111?v=4"
          fallBackText="Roshith Prakash"
        />

        <Avatar imageSrc="" fallBackText="Roshith Prakash" border />

        <Avatar imageSrc="" fallBackText="Roshith Prakash" />

        <Avatar imageSrc="" fallBackText="" />
      </div>

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
            <b>imageSrc (string , optional):</b> URL for the image to be
            displayed.{" "}
          </li>
          <li>
            {" "}
            <b> fallBackText (function, optional):</b> Fallback text (name) from
            which initials will be displayed.
          </li>
          <li>
            {" "}
            <b>className (string, optional):</b> To override styles for the
            image component.{" "}
          </li>
          <li>
            {" "}
            <b>border (boolean, optional):</b> To add a border to the Avatar.
          </li>
          <li>
            {" "}
            <b>borderClassName (string, optional):</b> To override the styles
            for the border.
          </li>
        </ul>
      </div>

      <h3>Avatar.tsx</h3>
      <CodeBlock code={ModalCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default AvatarComponent;
