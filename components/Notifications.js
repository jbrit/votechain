import React from "react";
import { Bell, Check, MoreHorizontal, Trash } from "react-feather";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

function Notifications() {
    const notifications = [
        {
            name: "Insights",
            description:
                "You created a poll on “Which is the best tool for UI/UX Design...",
            href: "##",
            time: "5 minutes ago",
        },
        {
            name: "Insights",
            description:
                "You created a poll on “Which is the best tool for UI/UX Design...",
            href: "##",
            time: "5 minutes ago",
        },
        {
            name: "Insights",
            description:
                "You created a poll on “Which is the best tool for UI/UX Design...",
            href: "##",
            time: "5 minutes ago",
        },
    ];

    return (
        <div>
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className="focus:outline-none">
                            <Bell
                                className={`cursor-pointer mt-1 ${
                                    open && "text-primary"
                                }`}
                            />
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
                            <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 -left-96 ml-14 sm:px-0">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid bg-white pt-4 grid-cols-1">
                                        <span className="flex justify-between px-7 items-center">
                                            <span className="text-lg font-normal">
                                                Notifications
                                            </span>
                                            <span>
                                                <Options />
                                            </span>
                                        </span>
                                        {notifications.map((item) => (
                                            <span className="px-7 border-t py-4 hover:bg-purple-hover" key={item.href}>
                                                <span className="block">
                                                    {item.description}
                                                </span>
                                                <span className="text-primary text-xs">
                                                    {item.time}
                                                </span>
                                            </span>
                                        ))}
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

export default Notifications;

function Options() {
    return (
        <Popover className="relative">
            {({open}) => (
                <>
                <Popover.Button className={`focus:outline-none ${open && "text-primary"}`}>
                    <MoreHorizontal />
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
                    <Popover.Panel className="absolute z-10 w-48 px-4 -left-52 ml-12 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid bg-white px-6 py-4 grid-cols-1 text-xs">
                                <span className="flex items-center mb-2">
                                    <Check width={18} className="mr-2 -mt-1" /> Mark
                                    all as read
                                </span>
                                <span className="flex items-center">
                                    <Trash width={18} className="mr-2 -mt-1" />{" "}
                                    Delete all notification
                                </span>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
                </>
            )}
        </Popover>
    );
}
