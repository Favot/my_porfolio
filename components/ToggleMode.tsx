import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";

const ToggleMode = () => {
  const [enabled, setEnabled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme(enabled === true ? "dark" : "light");
    return () => {};
  }, [enabled]);

  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`bg-transparent deco  rounded-full shadow p-2 h-6 w-16 flex border-gray-400 dark:border-green border-solid border-2 `}
      >
        {/* <span className="sr-only">Change Color Theme</span> */}
        <span
          aria-hidden="true"
          className={`block h-full w-1/2 rounded transition duration-300 ease-in-out transform ${
            !enabled ? "bg-gray-400 translate-x-full" : "bg-green"
          }`}
        />
      </Switch>
    </div>
  );
};

export default ToggleMode;
