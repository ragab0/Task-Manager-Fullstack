import Image from 'next/image'
import { viewTypes } from '@/assets/data/data'


export default function Views() {
  return (
    <div>
      <ul className='flex justify-end items-center gap-4'>
        {
          viewTypes.map(({iconSrc, name}, i) => (
            <li key={i}>
              <button name={name} >
                <Image alt='view' src={iconSrc} />
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
