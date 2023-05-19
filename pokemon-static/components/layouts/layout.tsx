
import Head from "next/head"
import { Navbar } from "../ui"


interface Props{
   children?: React.ReactNode
    title?: string 
}


const origin =(typeof window=== 'undefined')?'': window.location.origin

export const Layout = ({children, title}:Props) => {

  return (
    <>
    <Head>
        <title>{title||'Pokemon App'}</title>
        <meta name='author' content="Santiago Paredes"/>
        <meta name="description" content="Información sobre el pokémon "/>
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        
        <meta property="og:title" content={`informacion sobre ${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
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
