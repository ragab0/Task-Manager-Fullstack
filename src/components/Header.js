"use client";
import { useGlobalContext } from '@/utils/context';
import Folders from './Folders';
import Views from './Views';
import AddFolderBtn from './AddFolderBtn';
import Image from 'next/image';
import { appIsSettingsSetter, filterActions } from '@/utils/actions';
import { useEffect, useRef } from 'react';
import { imgs } from '@/assets/imgs';
const { menu, x: close } = imgs;


export default function Header() {
  const progressRef = useRef(null);
  const { 
    appDispatch, 
    appState: {
      isSettings,
      filtering: {currentSearch},
      tasks: {currentTasksList}, 
      user: {userFormData: {name}}
    }
  } = useGlobalContext();

  function searchHandler(e) {
    appDispatch(filterActions.currentSearchSetter(e.target.value));
  }

  function menuHandler(value) {
    appDispatch(appIsSettingsSetter(!isSettings));
  }

  useEffect(function() {
    function closeingHandler(e) {
      if (!e.target.closest("aside")) {
        appDispatch(appIsSettingsSetter(false))
        document.removeEventListener("click", closeingHandler);
      }
    }

    function cleaner() {
      return function() {
        document.removeEventListener("click", closeingHandler);
      }
    }

    if (isSettings) {
      document.addEventListener("click", closeingHandler)
    };


    return cleaner;
  }, [isSettings])

  const [
    progress, 
    length
  ] = [currentTasksList.reduce((p, c) => c.isCompleted ?  p+1 : p, 0), currentTasksList.length];
  

  return (
    <header>
      <section className='flex items-center gap-2'>
        <input value={currentSearch} onChange={searchHandler}
          placeholder="Searching about task.." className='p-4 rounded-2xl overflow-hidden bg-slate-100 w-full'
        />
        <button onClick={menuHandler} className='md:hidden w-12 h-12 p-2'>
          <Image alt='settings' src={ isSettings ? close : menu  } />
        </button>
      </section>
      <section className='my-10 w-fit'>
        <h2>👋 Welcome, {name}!</h2>
        <p className=' font-bold mb-2'>
          You had completeed
          <span className=' inline-block indent-2 text-xl font-bold text-mainClr'>
            {String(progress).padStart(2, 0)}
            /
            {String(length).padStart(2, 0)}
          </span>
        </p>
        <p ref={progressRef} data-length={length} data-progress={progress}
        className='p-2 progress w-full before:w-full bg-slate-300 rounded-xl before:bg-mainClrLight relative before:absolute before:rounded-xl before:left-0 before:top-0 before:h-full '></p>
      </section>
      <section className='pb-4 mb-4 border-b-2 border-slate-300 flex max-lg:flex-wrap gap-y-4 items-start'>
        <Folders />
        <div className='flex-1 flex justify-between items-center'>
          <AddFolderBtn />
          <Views />
        </div>
      </section>
    </header>
  )
}
