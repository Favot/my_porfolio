import React, { FunctionComponent, useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

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
  return activeItem !== name ? (
    <div>
      <Link href={route}>
        <a>
          <span
            className="hover:text-green"
            onClick={() => {
              setActiveItem(name);
            }}
          >
            {name}
          </span>
        </a>
      </Link>
    </div>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<ItemsName | null>(null);

  const { pathname } = useRouter();

  useEffect(() => {
    console.log(pathname);

    if (pathname === "/projects") setActiveItem(ItemsNameEnum.PROJECTS);
    if (pathname === "/resume") setActiveItem(ItemsNameEnum.RESUME);
    if (pathname === "/") setActiveItem(ItemsNameEnum.ABOUT);

    return () => {};
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3 ">
      <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl ">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg ">
        {activeItem !== null ? (
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
              name={ItemsNameEnum.PROJECTS}
              route="/projects"
            />
            <NavItems
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              name={ItemsNameEnum.RESUME}
              route="/resume"
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
