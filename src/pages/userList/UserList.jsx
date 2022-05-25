import React from 'react'
import './userList.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import UserDatatable from '../../components/userDatatable/UserDatatable'

const userList = () => {
  return (
    <div className='userList'>
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <UserDatatable />
        </div>
    </div>
  )
}

export default userList