import React from 'react'
import ClientCard from '../components/ClientCard'

export default function Dashboard() {
  return (
    <div className='max-w-[1011px] w-full mx-auto'>
      <div className="greeting">
        <p className='font-normal text-sm leading-[20px] tracking-[-2%]'>Hello, Asanov Asan!</p>
       
      </div>

       <h1 className='mt-8 font-bold text-xl'>
          Today’s clients
        </h1>

        <div className="allClients mt-8 flex items-center gap-6">
          <ClientCard/>

           <ClientCard/>

            <ClientCard/>
        </div>
    </div>
  )
}
