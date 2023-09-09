import { imgs } from '@/assets/imgs'
import { isModalSetter } from '@/utils/actions';
import { useGlobalContext } from '@/utils/context'
import Image from 'next/image'
import React from 'react'

export default function Modal({children, heading}) {
  const { appDispatch } = useGlobalContext();
  function closeHandler() {
    appDispatch(isModalSetter(false));
  }
  function modalHandler(e) {
    e.target.closest(".box") || closeHandler();
  } 

  return (
    <div onClick={modalHandler} className='modal cursor-pointer px-4 py-8 flex justify-center items-center bg-black/40 fixed top-0 left-0 w-full min-h-full z-50'>
      <div className='box cursor-default max-w-lg w-full bg-slate-100 p-5 rounded-md'>
        <header className=' flex justify-between items-center mb-5 capitalize'>
          <h3 className='mb-0'>{heading}</h3>
          <button onClick={closeHandler} className='btn-img w-10 h-10 hover:bg-slate-200'>
            <Image alt='close' src={imgs.x} />
          </button>
        </header>
        <main className='content animate-slideDown'>
          {children}
        </main>
        <div>
        </div>
      </div>
    </div>
  )
}
