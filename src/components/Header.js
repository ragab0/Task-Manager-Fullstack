import Folders from './Folders'
import Views from './Views'


export default function Header() {
  return (
    <header className="">
      <section className="text-center flex justify-between items-center gap-8">
        <div className=' w-2/3'>
          <input placeholder="Searching about task.." className='p-4 rounded-2xl overflow-hidden bg-slate-100 w-full' />
        </div>
        <button className=" w-1/3 capitalize block p-4 bg-[#9D00EE] text-white rounded-2xl shadow-md border-none">add new task</button>
      </section>
      <section className='my-10 w-fit'>
        <h3>Welcome back, Legend 👋!</h3>
        <p className=' font-bold mb-2'>You had completeed <span className=' text-xl font-bold text-[#9D00EE]'>05/10</span></p>
        <p className='p-2 w-full before:w-1/2 bg-slate-300 rounded-xl before:bg-[#9D00EE] relative before:absolute before:rounded-xl before:left-0 before:top-0 before:h-full '></p>
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
