import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Search } from "react-feather";
import Input from './Input';

function SearchBar() {
    return (
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className="focus:outline-none pt-1">
                            <Search className={`cursor-pointerz-50 ${open && "text-primary"}`}/>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-x-1"
                            enterTo="opacity-100 translate-x-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-x-0"
                            leaveTo="opacity-0 translate-x-1"
                        >
                            {/* <Popover.Panel className="absolute z-10 lg:-left-72 -ml-2 -top-3">
                                <Input placeholder="Search for past and present polls" width="lg:w-80" />
                            </Popover.Panel> */}
                            <span></span>
                        </Transition>
                    </>
                )}
            </Popover>
    );
}

export default SearchBar;
