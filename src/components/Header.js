"use client"
import { useGlobalContext } from '@/utils/context'
import Folders from './Folders'
import Views from './Views'
import AddTask from './AddTask';
import { isModalSetter } from '@/utils/actions';


export default function Header() {
  const { appDispatch, appState: {modal: {isModal}, user: {userFormData: {name}}}} = useGlobalContext();
  function addHandler() {
    appDispatch(isModalSetter(true));
  }

  return (
    <header className="">
      <section className="text-center flex justify-between items-center gap-8">
        <div className=' w-2/3'>
          <input placeholder="Searching about task.." className='p-4 rounded-2xl overflow-hidden bg-slate-100 w-full' />
        </div>
        <button onClick={addHandler} className="btn-main w-1/3">add new task</button>
        {isModal && <AddTask />}
      </section>
      <section className='my-10 w-fit'>
        <h2>Welcome back, {name} 👋!</h2>
        <p className=' font-bold mb-2'>You had completeed <span className=' text-xl font-bold text-mainClr'>05/10</span></p>
        <p className='p-2 w-full before:w-1/2 bg-slate-300 rounded-xl before:bg-mainClrLight relative before:absolute before:rounded-xl before:left-0 before:top-0 before:h-full '></p>
      </section>
      <section className='pb-4 mb-4 border-b-2 border-slate-300 flex items-center justify-between gap-8'>
        <div className='w-2/3'>
          <Folders />
        </div>
        <div className='w-1/3'>
          <Views />
        </div>
      </section>
    </header>
  )
}
