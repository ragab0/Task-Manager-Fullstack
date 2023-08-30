import axios from "axios";
async function fetchTasks() {
  try {
    const res = await axios("http://localhost:5000/api/tasks", {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'accept': "*/*",
        'Access-Control-Allow-Origin': "no-cors",
      },
    });
    const { success, data } = await res.json();
    if (!success) {
      return [];
    }
    return data.tasks;
  } catch (error) {
    console.log("Faiiled", error);
    return [];
  }
}


export default fetchTasks;