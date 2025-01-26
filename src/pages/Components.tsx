import { ReactNode, useState } from "react";
import {
  ErrorAccordion,
  PrimaryButton,
  SecondaryButton,
  Input,
  PasswordInput,
  Loader,
  Timeline,
  Card,
  // Select,
  // Option,
} from "../components";
import { ContextValue, useDarkMode } from "../context/DarkModeContext";
import { Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/Table";

const ComponentCard = ({
  path,
  title,
  children,
}: {
  path: string;
  title: string;
  children?: ReactNode;
}) => {
  return (
    <div className="dark:bg-secondarydarkbg flex w-80 flex-col gap-y-8 rounded-xl border-[1px] border-white bg-white p-8 shadow-2xl transition-all duration-200 hover:scale-110 dark:shadow-white/32">
      <p className="text-center text-xl font-semibold">{title}</p>

      <div className="flex flex-1 flex-col justify-center gap-y-5">
        {children}
      </div>
      <Link to={path} className="pt-2">
        <SecondaryButton
          text="View Code"
          className="w-full rounded-lg hover:font-medium"
        />
      </Link>
    </div>
  );
};

const Components = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode() as ContextValue;
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <Toaster />
      <div
        className={`min-h-screen ${isDarkMode ? "bg-[url('/src/assets/animatedWaveDark.svg')]" : "bg-[url('/src/assets/animatedWave.svg')]"} bg-cover dark:text-white`}
      >
        {/* Title */}
        <h1 className="font-title py-10 text-center text-3xl font-light italic">
          Roshith's Styled Components
        </h1>

        {/* Toggle Dark Mode button */}
        <div className="flex justify-center">
          <button
            onClick={toggleDarkMode}
            className="dark:text-darkbg cursor-pointer rounded-lg bg-white p-2 px-4 transition-all hover:scale-105"
          >
            Toggle {isDarkMode ? "Light" : "Dark"} Mode
          </button>
        </div>

        {/* Components */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 p-10">
          {/* Primary Button */}
          <ComponentCard
            path="/components/primary-button"
            title=" Primary Button"
          >
            <div className="flex justify-center">
              <PrimaryButton
                onClick={() => {
                  toast("You clicked a Primary Button!");
                }}
                text="Primary Button"
              />
            </div>
            <div className="flex justify-center">
              <PrimaryButton disabled text="Disabled Primary Button" />
            </div>
          </ComponentCard>

          {/* Secondary Button */}
          <ComponentCard
            path="/components/secondary-button"
            title="Secondary Button"
          >
            <div className="flex justify-center">
              <SecondaryButton
                onClick={() => {
                  toast("You clicked a Secondary Button!");
                }}
                text="Secondary Button"
              />
            </div>
            <div className="flex justify-center">
              <SecondaryButton disabled text="Disabled Secondary Button" />
            </div>
          </ComponentCard>

          {/* Error Accordion */}
          <ComponentCard path="/components/error-accordion" title="Error">
            <button
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
              className="w-full cursor-pointer rounded border-2 p-2 dark:text-white"
            >
              {isOpen ? "Hide" : "Show"} Error
            </button>
            <ErrorAccordion text="This is an error message." isOpen={isOpen} />
          </ComponentCard>

          {/* Input */}
          <ComponentCard path="/components/input" title="Text Input">
            <Input
              value={inputValue}
              placeholder="Enter your text"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </ComponentCard>

          {/* Password Input */}
          <ComponentCard
            path="/components/password-input"
            title="Password Input"
          >
            <PasswordInput
              value={password}
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </ComponentCard>

          {/* Loading Placeholder */}
          <ComponentCard path="/components/loader" title="Loading Placeholder">
            <Loader />
            <Loader />
            <Loader />
          </ComponentCard>

          {/* Timeline */}
          <ComponentCard path="/components/timeline" title="Timeline">
            <div>
              {["Event A", "Event B", "Event C"].map((item, index) => {
                return (
                  <Timeline
                    isFilled={index != 2}
                    isLast={index == 2}
                    key={item}
                  >
                    <p>{item}</p>
                  </Timeline>
                );
              })}
            </div>
          </ComponentCard>

          {/* Security Headers */}
          <ComponentCard
            path="/components/security-headers"
            title="Security Headers"
          >
            <p className="text-center">
              Common Security Headers added using React Helmet.
            </p>
          </ComponentCard>

          {/* Article Card */}
          <Card
            primaryButtonText="View Code"
            secondaryButtonText="View Code"
            imageSrc="https://res.cloudinary.com/do8rpl9l4/image/upload/v1737443227/vuvep3cx4pgk0k5kgvql.jpg"
            imageAlt="Lewis Hamilton"
            title="Card Component"
            subtitle="(Yes this card is a component.)"
            primaryButtonClickHandler={() => navigate("/components/card")}
            secondaryButtonClickHandler={() => navigate("/components/card")}
          />

          {/* Navbar */}
          <ComponentCard path="/components/navbar" title="Navbar">
            <p className="text-center">Navigation Bar with Drawer Menu.</p>
          </ComponentCard>

          {/* Footer */}
          <ComponentCard path="/components/footer" title="Footer">
            <p className="text-center">Footer Component with Floating Div.</p>
          </ComponentCard>

          {/* Table */}
          <ComponentCard path="/components/table" title="Table">
            <Table className="max-w-lg">
              <TableHead>
                <TableHeader>Sr No</TableHeader>
                <TableHeader>Name</TableHeader>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Alonso</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Vettel</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>Hamilton</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ComponentCard>
        </div>
      </div>
    </>
  );
};

export default Components;
