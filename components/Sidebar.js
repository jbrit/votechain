/*eslint-disable*/
import React from "react";
import Link from "next/link";
import logo from "../public/logo.png";
import Image from "next/image";
import { TemplateIcon } from '@heroicons/react/outline'
// import { ClockIcon, CogIcon, MoonIcon, PencilAltIcon, TemplateIcon } from '@heroicons/react/outline'
import { Settings, Moon, Clock, Edit, Menu, ToggleLeft, ToggleRight, LogOut } from 'react-feather'
import SidebarItem from "./SidebarItem";

const routes = [
  {
    name:"Dashboard",
    path:"/dashboard",
    icon: <TemplateIcon width={20} height={20} strokeWidth={1} />,
    toggle:null
  },
  {
    name:"Create a Poll",
    path:"/create-poll",
    icon:<Edit strokeWidth={1} />,
    toggle:null
  },
  {
    name:"Fill a Poll",
    path:"/fill-poll",
    icon:<Edit strokeWidth={1} />,
    toggle:null
  },
  {
    name:"Poll History",
    path:"/poll-history",
    icon:<Clock strokeWidth={1} />,
    toggle:null
  },
  {
    name:"End a Poll",
    path:"/end-poll",
    icon:<Edit  strokeWidth={1} />,
    toggle:null
  },
  {
    name:"Settings",
    path:"/settings",
    icon:<Settings strokeWidth={1} />,
    toggle:null
  },
  {
    name:"Dark Mode",
    path:"#",
    icon:<Moon strokeWidth={1} />,
    toggle: {left:<ToggleLeft strokeWidth={1}/>, right:<ToggleRight strokeWidth={1}/>}
  }
]

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState(false);
  return (
    <>
      <nav className={(collapseShow && 'active ')+" transition-all sidebar justify-between flex flex-col left-0 fixed top-0 bottom-0 overflow-hidden shadow-xl bg-white w-74 z-10 py-4 px-6 pr-16"}>
        <div>
          {/* Toggler */}
          <button
            className="cursor-pointer text-black border rounded px-2 py-1 ml-1 fixed left-64 left md:hidden"
            type="button"
            onClick={() => setCollapseShow(!collapseShow)}>
            <Menu/>
          </button>
          {/* Toggler */}

          {/* Brand */}
          <Link href="/">
            <a className="text-primary flex items-center font-bold">
              <Image src={logo} width={100} height={100}/>
              Votechain
            </a>
          </Link>
          {/* Brand */}
          
          {/* Collapse */}
            <ul className="md:min-w-full list-none">
              {routes.map((route,i) => (
                <SidebarItem route={route} key={route.name}/>
              ))}
            </ul>
          {/* Collapse */}

        </div>
          {/* Collapse */}
            <ul className="md:min-w-full list-none">
                <SidebarItem route={{name:"Log out", path:"/logout", icon:<LogOut color="red" strokeWidth={1}/>}}/>
            </ul>
          {/* Collapse */}

      </nav>
    </>
  );
}
