import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Rodape from '../Rodape'

export default function LayoutPadrao() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Rodape/>
    </>
  )
}
