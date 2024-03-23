import React from 'react'
const mongoose = require('mongoose');
import Link from 'next/link'

const connectionString = 'mongodb+srv://root:root@medicure.znsbupj.mongodb.net/?retryWrites=true&w=majority&appName=MediCure';
const isConnected = false;
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error(err));
const page = () => {
  return (
    <div className='h-screen flex flex-col gap-1 justify-center items-center bg-slate-100 '>
    <img src="favicon.ico" height="36px" width="36px"/>
     <div className='text-sky-500 text-4xl font-bold flex  gap-2'>
      Medicure
      </div>
      <div className='font-bold text-slate-500'>
        care at your  doorstep
      </div>
      <div>
       <div>
       <Link href="/home"> <button className='w-full bg-sky-500 text-white font-bold p-3 rounded-full hover:bg-sky-600 transition-colors duration-300"'> proceed </button> </Link>
       </div>
      </div>
    </div>
  )
}

export default page