"use client"
import { Code, LayoutDashboard, Search } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function SideBarNav() {

    const menuList = [
        {
            id:1,
            name: 'Browse',
            icon: Search,
            path: '/browse'
        },
        {
            id:1,
            name: 'dashboard',
            icon: LayoutDashboard,
            path: '/browse'
        },
        {
            id:1,
            name: 'Community',
            icon: Code,
            path: '/browse'
        }

    ]

    const[activeIndex,setactiveIndex] = useState(0);
  return (
    <div className='h-full bg-white border-r flex flex-col overflow-y-auto shadow-md'>
        <div className='p-5 border-b z-50'>
        <Image src = '/logo.svg'
        alt = 'logo'
        width = {30}
        height = {30} />
        </div>
        <div className='flex flex-col gap-4'>
            {menuList.map((item,index)=>(
                <div className={`flex gap-4 items-center p-4 px-6 text-gray-500 hover:bg-gray-200 cursor-pointer 
                    ${activeIndex == index ? 'bg-gray-200 text-black':null}`}
                onClick={()=> setactiveIndex(index)}>
                    <item.icon />
                    <h2>{item.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideBarNav