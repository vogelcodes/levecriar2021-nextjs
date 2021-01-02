import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React from 'react'
import CardCadastro from '../components/CardCadastro'


export default function Home() {
  return (
    <div className="bg-gradient-to-b from-roxo to-verde min-h-screen">
      <Head>
        <title>LeveCriar.com.br</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Glass+Antiqua&family=Roboto+Slab:wght@300;400;700&display=swap"
              rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Header />

        <main className="container h-48 border-verde border-4 bg-bege flex-col md:flex-row flex  md:justify-around items-center mx-auto lg:w-5/6">
        <h1>Obrigado por se cadastrar!</h1>    
    
</main>
<Footer/>
    </div>
  )
}