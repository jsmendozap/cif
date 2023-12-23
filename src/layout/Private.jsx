import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'

const Private = ({children}) => {
  return (
    <>
        <Header />
        <main style={{minHeight: 'calc(100vh - 164px)'}}>{children}</main>
    </>
  )
}

export default Private