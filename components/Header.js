import Image from 'next/image'
import React from 'react'
import { Bell, Search } from 'react-feather'
import avatar from '../public/avatar.png'

function Header() {
    return (
        <div className=" bg-white flex h-24 shadow-sm justify-end items-center">
            <div className="flex justify-evenly w-52 px-4">
                <Search className="cursor-pointer mt-1"/>
                <Bell className="cursor-pointer mt-1"/>
                <Image src={avatar} className="cursor-pointer"/>
            </div>
        </div>
    )
}

export default Header
