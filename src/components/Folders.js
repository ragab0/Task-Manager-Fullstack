"use client";


export default function Folders() {
  return (
    <div>
      <ul className='inline-flex flex-wrap gap-2 me-2'>
        {
          ["all", "projects"].map((a, i) => (
            <li key={i} >
              <button className='bg-white py-1 px-8 rounded-lg capitalize'>{a}</button>
            </li>
          )) 
        }
      </ul>
      <button className='w-8 h-8 rounded-full bg-white text-xl'>{"+"}</button>
    </div>
  )
}
