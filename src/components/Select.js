"use client";
import Image from 'next/image'
import { useState } from 'react';
import { imgs } from "@/assets/imgs";
import { useGlobalContext } from '@/utils/context';
const { arrow } = imgs;


export default function Select({list=[], img=null, label="", changer}) {
  const {appDispatch} = useGlobalContext();
  const initialState = {
    current:list[0],
    isOpen: false,
  }

  const [select, setSelect] = useState(initialState)
  const { isOpen, current } = select;

  function transHandler() {
    setSelect(o => ({
      ...o,
      isOpen: !o.isOpen
    }))
  }

  function choiceHandler(curr) {
    setSelect({
      isOpen: false,
      current: curr
    })
    
  }
  

  return (
    <div className='mb-4' aria-label={label}>
      <div className='current p-3 rounded-2xl bg-white flex gap-2 items-center justify-between' style={isOpen ? {borderRadius:0,borderBottom: "1px solid #ddd"} : {}}>
        <span value={current.name} className='flex items-center gap-2 capitalize cursor-default'>
            {
              img && <Image alt={"img"} src={img} className='w-5 h-5' /> 
            } 
            {current.name}
        </span>
        <button onClick={transHandler}  className={`p-3 hover:scale-125 hover:bg-slate-100 rounded-full  cursor-pointer transition-all ${isOpen ? "rotate-0" : "-rotate-180"}`}>
          <Image src={arrow} alt="arrow" className="w-[10px] h-[10px]" />
        </button>
      </div>
      <div className={`p-3 animate-slideDown bg-white ${isOpen ? "" : "hidden"}`}>
        {
          list.map((curr, i) => (
            <button key={i} value={curr.name} className='flex gap-2 capitalize border-slate-200/50 w-full' 
            onClick={() => choiceHandler(curr)}>
              {curr.iconSrc && <Image alt={curr.name} src={curr.iconSrc} className='w-5 h-5' />} {curr.name}
            </button>
          ))
        }
      </div>
    </div>
  )
}
