import React, { FunctionComponent, useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import ToggleMode from "./ToggleMode";

enum ItemsNameEnum {
  ABOUT = "About",
  PROJECTS = "Projects",
  RESUME = "Resume",
}

type ItemsName = ItemsNameEnum;

const NavItems: FunctionComponent<{
  activeItem: ItemsName;
  setActiveItem: Function;
  name: ItemsName;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return (
    <div>
      <Link href={route}>
        {activeItem === name ? (
          <a>
            <span
              className="text-xl font-bold border-b-4 border-green text-green"
              onClick={() => {
                setActiveItem(name);
              }}
            >
              {name}
            </span>
          </a>
        ) : (
          <a>
            <span
              className="hover:text-green "
              onClick={() => {
                setActiveItem(name);
              }}
            >
              {name}
            </span>
          </a>
        )}
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<ItemsName>(ItemsNameEnum.ABOUT);

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/projects") setActiveItem(ItemsNameEnum.PROJECTS);
    if (pathname === "/resume") setActiveItem(ItemsNameEnum.RESUME);
    if (pathname === "/") setActiveItem(ItemsNameEnum.ABOUT);

    return () => {};
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3 ">
      <div className="flex space-x-5 text-lg ">
        <>
          <NavItems
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            name={ItemsNameEnum.ABOUT}
            route="/"
          />
          <NavItems
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            name={ItemsNameEnum.RESUME}
            route="/resume"
          />
          <NavItems
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            name={ItemsNameEnum.PROJECTS}
            route="/projects"
          />
        </>
      </div>
      <ToggleMode />
    </div>
  );
};

export default Navbar;
