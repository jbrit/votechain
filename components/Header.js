import React from 'react'
import SearchBar from './SearchBar'
import UserPopover from './UserPopover'

function Header() {
    return (
        <div className=" bg-white flex h-24 shadow-sm justify-end items-center">
            <div className="flex justify-evenly w-52 pl-20 pr-0 items-center">
                <SearchBar/>
                <UserPopover/>
            </div>
        </div>
    )
}

export default Header
