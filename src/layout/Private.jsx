import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'

const Private = ({ page }) => {
  return (
    <>
        <Header />
        <main style={{minHeight: 'calc(100vh - 164px)'}}>{ page }</main>
    </>
  )
}

export default Private