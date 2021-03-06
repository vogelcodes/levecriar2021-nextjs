import {useRouter} from 'next/router';
import React, { useState, FormEvent } from 'react';
import axios from 'axios'



export default function CardCadastro (){
    const router = useRouter();
    const api = axios.create({
        baseURL: 'https://dev.vogelcodes.com',
      });
    
    const [email, setEmail] = useState('');
    
      async function handleSubmit(
        event: FormEvent<HTMLFormElement>,
      ): Promise<void> {
        event.preventDefault();
        console.log('submit form');
        try {
          await api.post('cadastros', { email });
          router.push('/thanks');
    
        } catch (error) {
        }
      }
    return(
        <div className="mt-6">
            <div>

<h1 className="w-80 text-4xl text-texto font-serif">Dicas, reviews, gerenciador de enxoval, tudo para seu bebê</h1>
<h1 className="w-80 text-2xl pt-2 text-verde font-serif">Cadastre-se, é grátis!</h1>
</div>
<form onSubmit={handleSubmit} className="mt-6 h-36 flex flex-col justify-around md:flex-row">
    <input type="email" className="pl-3 text-base font-serif placeholder-verde h-8 rounded-lg" placeholder="E-mail" 
            onChange={e => setEmail(e.target.value)}
            id="email"/>
    <button type="submit" className="text-sm md:text-lg text-bege mx-1 font-serif button h-8 rounded-lg bg-verde px-2 ">Cadastre-se</button>

</form>


        </div>

        
        

    )
}
