import { filterTypes, timeTypes } from "@/assets/data/data";
import { imgs } from "@/assets/imgs";
import Login from "./Login";
import Select from "./Select";


export default function SliceFilter({nextHandler}) {
  return (
    <div>
      <Login nextHandler={nextHandler} />
      <div className="mt-8 mb-12 border-2 w-1/3 mx-auto border-slate-200 rounded-full"></div>
      <Select list={timeTypes} img={imgs.date} identfire="isSelectDateOpen" />
      <Select list={filterTypes} img={imgs.sort} identfire="isSelectSortOpen" />
      <div className="mt-8 mb-12 border-2 w-1/3 mx-auto border-slate-200 rounded-full"></div>
      <button className='p-3 bg-red-400/90 w-full rounded-2xl text-slate-100'>Reset</button>
    </div>
  )
}
