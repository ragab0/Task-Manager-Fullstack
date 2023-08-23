import axios from "axios";
async function fetchTasks() {
  const res = await axios("http://localhost:5000/api/tasks", {
    method: "GET",
    headers: {
      'Content-Type': "application/json",
      'accept': "*/*"
    }
  });
  // const { success, data } = await res.json();
  // if (success) {
  //   return null;
  // }
  // return data.tasks;
}


export default fetchTasks;