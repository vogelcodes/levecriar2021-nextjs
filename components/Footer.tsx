import {FaInstagram, FaPinterest} from 'react-icons/fa'

export default function Footer (){
    return(
        <footer className="flex justify-center h-16">
        <div className="flex-col p-2 text-lg text-bege">
          
        <h3>LeveCriar - {new Date().getFullYear()}</h3>
             <div className="flex justify-center">
           <a href="https://instagram.com/levecriar">
               <FaInstagram className="mx-2"/>
             </a>
           <a href="https://pinterest.com/levecriar">
               <FaPinterest className="mx-2"/>
             </a>
              </div>
        </div>
      </footer>

    )
}
