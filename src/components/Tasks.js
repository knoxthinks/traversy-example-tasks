import { useState } from "react"

export const Tasks = () => {
    const [tasks, setTasks] = useState([1,2,3,10,20,50])

  return (
    <>
        {tasks.map((task) =>(
            <h3>
                {task}
            </h3>
        ))}
    </>
  )
}
