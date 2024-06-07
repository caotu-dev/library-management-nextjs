"use client";

import ChevDownIcon from "@/shared/components/icons/ChevDownIcon";
import AuthUtils from "@/shared/utils/auth.util";
import { SidebarMenu } from "@core/constants/sidebar";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [appMenu, setAppMenu] = useState(SidebarMenu);
  const toggleMenu = (key: number) => {
    const currentMenu = [...appMenu];
    currentMenu[key].isExpand = !currentMenu[key].isExpand;
    setAppMenu([...currentMenu]);
  };

  const [auth, setAuth] = useState(null);

  useEffect(() => {
    setAuth(AuthUtils.getAuth());
  }, []);

  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <div className="flex justify-start items-center gap-4">
          <Image src={"/images/logo.png"} width={50} height={50} alt="logo" />
          <span>Books Heaven</span>
        </div>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <ul className="space-y-2 font-medium">
          {appMenu.map((menu: any, key: number) => {
            if (menu?.authentication && !auth) return ""; // Required login

            if (menu?.children) {
              return (
                <li key={key}>
                  <button
                    type="button"
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls={`dropdow-key-${key}`}
                    data-collapse-toggle={`dropdow-key-${key}`}
                    onClick={() => toggleMenu(key)}
                  >
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      {menu.title}
                    </span>
                    <div
                      className={`transition-transform ${
                        menu?.isExpand ? "rotate-180" : ""
                      }`}
                    >
                      <ChevDownIcon />
                    </div>
                  </button>
                  <ul
                    id={`dropdow-key-${key}`}
                    className={`${
                      !menu?.isExpand ? "hidden" : ""
                    } py-2 space-y-2`}
                  >
                    {menu?.children.map((subMenu: any, subKey: number) => {
                      return (
                        <li key={subKey}>
                          <a
                            href={subMenu.url}
                            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            {subMenu.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }
            return (
              <li key={key}>
                <a
                  href={menu.url}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="ms-3">{menu.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
