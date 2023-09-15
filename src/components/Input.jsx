import React from 'react'
import { FcSearch } from 'react-icons/fc'
import { AiOutlinePlusSquare } from 'react-icons/ai'


function Input({onOpen,filterContacts}) {
  return (
   <>
    <div className='flex'>
          <div className='text-white flex-grow flex relative items-center'>
            <input
              onChange={filterContacts}
              type='text'
              className=' flex-grow bg-transparent
          h-10 rounded-md border border-white
          text-white pl-9
          '
            />
            <FcSearch className='text-3xl ml-1 absolute' />
          </div>
          <div>
            <AiOutlinePlusSquare onClick={onOpen} className='text-white text-5xl cursor-pointer'/>
          </div>
        </div>

   </>
  )
}

export default Input
