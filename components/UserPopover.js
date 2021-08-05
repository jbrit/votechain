import React, { Fragment } from "react";
import Image from 'next/image'
import avatar from '../public/avatar.png'
import { Popover, Transition } from "@headlessui/react";

function UserPopover() {
    return (
        <div>
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className="focus:outline-none">
                            <Image src={avatar} className={`cursor-pointer ${open && "border border-primary rounded p-1"}`}/>
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
                                                <span className="text-gray-400">
                                                ID: 45279012
                                                </span>
                                            </span>
                                            <span className="px-7 border-b py-2 hover:bg-purple-hover">
                                                <span className="block">
                                                    Account Settings
                                                </span>
                                                <span>
                                                Support
                                                </span>
                                            </span>
                                            <span className="px-7 border-b py-2 hover:bg-purple-hover text-danger">
                                                    Disable Account
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