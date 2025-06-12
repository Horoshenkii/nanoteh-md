import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default Layout
