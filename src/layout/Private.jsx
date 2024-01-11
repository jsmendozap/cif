import React from 'react'
import Header from '../components/Header'

const Private = ({ page }) => {
  return (
    <>
        <Header />
        <main >{ page }</main>
    </>
  )
}

export default Private