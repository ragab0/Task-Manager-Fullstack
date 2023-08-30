export default function Tasks({tasks}) {
  return (
    tasks.map((task, i) => {
      const { name, id, desc } = task;
      return (
        <article key={i} className="mb-2">
          art
        </article>
      )
    })
  )
}
