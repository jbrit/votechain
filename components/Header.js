import React from 'react'
import Notifications from './Notifications'
import SearchBar from './Searchbar'
import UserPopover from './UserPopover'

function Header() {
    return (
        <div className=" bg-white flex h-24 shadow-sm justify-end items-center">
            <div className="flex justify-evenly w-52 px-4 items-center">
                <SearchBar/>
                <Notifications/>
                <UserPopover/>
            </div>
        </div>
    )
}

export default Header
