import React from "react"
import ReactDom from "react-dom/client"
import Todo from "./components/App"

const root= ReactDom.createRoot(document.getElementById('root'))


const data= [

  {
    id: 0,
    title: "React",
    task:  "Make todo App"
  },

  { id:1,
    title: "css",
    task: "apply css"
  }
]

root.render(
  <Todo data={data}></Todo>
)