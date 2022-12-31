import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Nav from '../component/nav/Nav'
import LeftSidebar from '../page/leftSidebar.js/LeftSidebar'
import RightSidebar from '../page/rightSidebar/RightSidebar'
import 'react-toastify/dist/ReactToastify.css'

function Laout() {
  return (
    <>
      <Nav />
      <ToastContainer />

      <main>
        <div className="container min-h-screen">
          <LeftSidebar />
          <Outlet />
          <RightSidebar />
        </div>
      </main>
    </>
  )
}

export default Laout
