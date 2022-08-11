import { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { Switch } from "@headlessui/react";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkmode, setDarkmode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkmode(checked);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <Switch
        checked={darkmode}
        onChange={toggleDarkMode}
        className={`${darkmode ? "bg-gray-900" : "bg-gray-300"}
        absolute top-6 right-6 inline-flex h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
      >
        <span className="sr-only">Use setting</span>
        <span
          className={classNames(
            darkmode ? "translate-x-5" : "translate-x-0",
            "pointer-events-none relative inline-block h-5 w-5 rounded-full shadow transform ring-0 transition ease-in-out duration-200"
          )}
        >
          <span
            className={classNames(
              darkmode
                ? "opacity-0 ease-out duration-100"
                : "opacity-100 ease-in duration-200",
              "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity text-gray-800"
            )}
            aria-hidden="true"
          >
            <HiSun />
          </span>
          <span
            className={classNames(
              darkmode
                ? "opacity-100 ease-in duration-200 text-gray-100"
                : "opacity-0 ease-out duration-100",
              "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
            )}
            aria-hidden="true"
          >
            <HiMoon />
          </span>
        </span>
      </Switch>
    </>
  );
}
