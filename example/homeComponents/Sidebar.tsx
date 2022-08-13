/* eslint-disable react/jsx-key */
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  VideosIcon,
} from "./icons";

const menuItems = [
  { id: 1, label: "داشبورد", icon: HomeIcon, link: "/admin/dashboard/" },
  { id: 2, label: " پروفایل من", icon: ArticleIcon, link: "/admin/dashboard/profile/" },
  { id: 3, label: " لیست پخش ها", icon: UsersIcon, link: "/admin/dashboard/playlists" },
  { id: 4, label: "لیست کانال ها", icon: VideosIcon, link: "/admin/dashboard/channels" },
  { id: 5, label: "  مدریت کاربران ", icon: VideosIcon, link: "/admin/dashboard/usermanagement" },
  { id: 6, label: "   مدریت نقش ها ", icon: VideosIcon, link: "/admin/dashboard/rolemanagement" },
  { id: 7, label: "   مدریت دانشگاه ها  ", icon: VideosIcon, link: "/admin/dashboard/universitymanagement" },
  { id: 8, label: "   مدریت نظرات ", icon: VideosIcon, link: "/admin/dashboard/commentmanagement" },
  { id: 9, label: "  خروج", icon: VideosIcon, link: "/" },

];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

 
  const wrapperClasses = classNames(
    "h-screen px-10 pt-4 pb-4 fixed z-20 bg-blue-700 text-white flex justify-between relitive right-0s flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-24"]: toggleCollapse,
    }
  );
  
  const activeMenu:any = useMemo(() => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const getNavItemClasses = (menu:any) => {
    return classNames(
      "flex items-center cursor-pointer text-white  rounded-lg w-full overflow-hidden whitespace-nowrap",
      {
        // ["bg-light-lighter"]: activeMenu.id === menu.id,
      }
    );
  };
  const collapseIconClasses = classNames(
    "p-1 rounded  bg-white text-white absolute  mr-6",
    {
      "rotate-180": toggleCollapse,
    }
  );



  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 400ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex text-white items-center justify-between relative">
          <div className="flex text-white items-center pl-1 gap-6">
            <LogoIcon />
            <span
              className={classNames("mt-2 text-white text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              Logo
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex text-white flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes}>
                <Link href={menu.link}>
                  <a className="flex  text-white py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md  font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
