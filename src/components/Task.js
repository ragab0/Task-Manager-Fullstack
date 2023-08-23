export default function Task({task}) {
  const { name, id, desc } = task;
  return (
    <article className="py-2 px-4 bg-white">
      {name}
    </article>
  )
}
