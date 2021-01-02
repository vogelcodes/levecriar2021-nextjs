import Image from 'next/image'
import Link from 'next/link'


export default function Header() {
    return(
        <header className="m-auto z-0 lg:w-5/6 p-2 md:p-4 sm:flex items-center justify-between h-18 lg:h-24">
<div className="pb-1 flex justify-around sm:justify-between sm:px-3 md:px-4 sm:flex-auto">
      <a href="/">
    <div className="cursor-pointer flex items-center">
      <div className="h-10">
      <Image src="/logo.svg" height="48" width="48"/>
      </div>

   <h1 className="text-2xl tracking-wider align-center font-sans pl-2 text-bege md:text-5xl">
    LeveCriar
    
   </h1>
    </div>
      </a>

   <ul className=" cursor-pointer text-bege items-center font-serif md:text-xl lg:text-2xl flex">
     <a href="https://go.hotmart.com/J45224330U">
     <li className="px-2 ">E-Book</li>
     </a>

     <li className="px-2">Enxoval</li>
     <li className="px-2">Loja</li>
     <li className="px-2 hidden sm:block">Blog</li>
   </ul>
    </div>
   <div className="flex -mx-1 justify-center">
    <button className="text-sm md:text-lg text-bege mx-1 font-serif button h-6 md:h-12 rounded-lg border-bege border-2 px-3">Entrar</button>
         
       <Link href='/cadastro'>
    <button className="text-sm md:text-lg text-bege mx-1 font-serif button h-6 md:h-12 rounded-lg bg-verde px-2">Cadastre-se</button>
       </Link>
   </div>
  </header>


)
}
