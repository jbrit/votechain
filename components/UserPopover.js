import React, { Fragment, useContext, useEffect, useState } from "react";
import Image from 'next/image'
import avatar from '../public/avatar.png'
import { Popover, Transition } from "@headlessui/react";
import { User } from "react-feather";
import { appDetailsContext } from "../context/AppDetails";

function UserPopover() {
    const [{address: user}] = useContext(appDetailsContext);
    return (
        <div>
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className="focus:outline-none">
                            <User className={`cursor-pointer ${open && "text-primary"}`}/>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 w-screen max-w-xs px-4 mt-3 -left-96 ml-28 sm:px-0">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid bg-white grid-cols-1 text-xs">
                                            <span className="px-7 border-b py-3 hover:bg-purple-hover">
                                                <span className="block">
                                                    Hello User!
                                                </span>
                                                <span className="text-gray-400 break-words">
                                                {user && `ID: ${user}`}
                                                </span>
                                            </span>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    );
}

export default UserPopover;
