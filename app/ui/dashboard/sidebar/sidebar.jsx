import React from 'react'
import styles from './sidebar.module.css'
import {MdDashboard,MdSupervisedUserCircle,MdShoppingBag,MdAttachMoney,MdWork,MdAnalytics,MdPeople,MdOutlineSettings,MdHelpCenter,MdLogout, MdSettings} from 'react-icons/md'

import MenuLink from './menuLink/menuLink'
import Image from 'next/image'

const Sidebar = () => {
  const menuItems=[
    {
    title:"Pages",
    list:[
      {
        title:"Dashoard",
        path:"/dashboard",
        icon:<MdDashboard/>,
      },{
        title:"Users",
        path:"/dashboard/users",
        icon:<MdSupervisedUserCircle/>,
      },
      {
        title:"Products",
        path:"/dashboard/products",
        icon:<MdShoppingBag/>,
      },
      {
        title:"Transactions",
        path:"/dashboard/transactions",
        icon:<MdAttachMoney/>,
      }
    ]
    },
    {
      title:"Analytics",
      list:[
        {
          title:"Revenue",
          path:"/dashboard/revenue",
          icon:<MdWork/>,
        },{
          title:"Reports",
          path:"/dashboard/reports",
          icon:<MdAnalytics/>,
        },
        {
          title:"Teams",
          path:"/dashboard/teams",
          icon:<MdPeople/>,
        },
      ]
      },
      {
        title:"User",
        list:[
          {
            title:"settings",
            path:"/dashboard/settings",
            icon:<MdSettings/>,
          },{
            title:"Help",
            path:"/dashboard/help",
            icon:<MdHelpCenter/>,
          },
        ]
     }
  ]

  return (
    <div className={styles.container}>
      {/* user */}
      <div className={styles.user}>
        <Image src="/noavatar.png" height="50" width="50" className={styles.Userimage}/>
        <div className={styles.userDetails}>
          <span className={styles.username}>Jon DOE</span>
          <span className={styles.userTitle}>Jon DOE</span>
        </div>
      </div>
      {/* list */}
      <ul className={styles.listtypes}>
        {menuItems.map((cat)=>(
          <li key={cat.title}> 
          <span key={styles.cat} className={styles.cat}>{cat.title}</span>
            {cat.list.map((item)=>(
           <MenuLink item={item} key={item.title}/>
          ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}> 
      <MdLogout/>
      Logout</button>
    </div>
  )
}

export default Sidebar