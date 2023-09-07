import { filterTypes, timeTypes, viewTypes } from "@/assets/data/data";
import { imgs } from "@/assets/imgs";
import Login from "./Login";
import Select from "./Select";
import Reset from "./Reset";


export default function RightSide() {
  return (
    <section className="bg-slate-100 static top-0 left-0 px-5 py-10 rounded-2xl">
      <h1>todo list</h1>
      <Login />
      <div className="mt-8 mb-12 border-2 w-1/2 mx-auto border-slate-200 rounded-full"></div>
      <Select list={timeTypes} img={imgs.date} />
      <Select list={filterTypes} img={imgs.sort} />
      <div className="mt-8 mb-12 border-2 w-1/2 mx-auto border-slate-200 rounded-full"></div>
      <Reset />
    </section>
  )
}
