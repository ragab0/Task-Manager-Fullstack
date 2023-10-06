"use client";
import { viewTypes } from '@/assets/data/data'
import { useGlobalContext } from '@/utils/context';
import { filterActions } from '@/utils/actions';


export default function Views() {
  const { 
    appDispatch, 
    appState: {
      filtering: {currentView}}
  } = useGlobalContext();
  
  function cllickHandler(e) {
    appDispatch(filterActions.currentViewSetter(e.target.closest("button").name))
  }

  
  return (
    <div>
      <ul className='flex justify-end items-center gap-2'>
        {
          viewTypes.map(({Ico, name}, i) => (
            <li key={i}>
              <button name={name} className='p-2' onClick={cllickHandler}>
                <Ico color={`${name === currentView ? "rgb(157 0 238)" : ""}`} style={{transition: "none"}} width={28} height={28} />
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
