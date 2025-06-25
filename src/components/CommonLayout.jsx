import React from 'react'
import Footer from './commonComponents/Footer'
import Navbar from './commonComponents/Navbar'

const CommonLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default CommonLayout
