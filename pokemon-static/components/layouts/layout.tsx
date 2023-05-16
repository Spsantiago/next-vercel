import React from "react"

import Head from "next/head"
import { Navbar } from "../ui"

interface Props{
   children?: React.ReactNode
    title?: string 
}

export const Layout = ({children, title}:Props) => {
  return (
    <>
    <Head>
        <title>{title||'Pokemon App'}</title>
        <meta name='author' content="Santiago Paredes"/>
        <meta name="description" content="Información sobre el pokémon "/>
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
    </Head>
    <Navbar/>
    <main style={{
      padding:'20px 20px '
    }}>
        {children}
    </main>
    </>
  )
}
