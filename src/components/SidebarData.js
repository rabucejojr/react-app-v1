import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { RiDashboardLine } from 'react-icons/ri'
import { IoIosPaper } from 'react-icons/io'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiOutlineHome />,
    cName: 'nav-text',
  },
  {
    title: 'Products',
    path: '/products',
    icon: <RiDashboardLine />,
    cName: 'nav-text',
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIosPaper />,
    cName: 'nav-text',
  },
]

export default SidebarData
