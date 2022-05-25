import React from "react";


class Todo extends React.Component{

  constructor(props){
    super(props)
    this.state={
      data:[],
      id:0
    }
  }

  setid=()=>{
    this.setState({id:this.state.id+1})
  }


  date=()=>{
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;
      return dateTime

  }

  additem=()=>{
    this.setid()
    this.setState({data:[...this.state.data, {
      id: this.state.id,
      title:this.state.current_title,
      text: this.state.current_text,
      date: this.date(),
      completed: false
    }]})
  }

  handleTitle =(ev)=>{
    this.setState({current_title: ev.target.value});
  }

  handleText=(ev)=>{
    this.setState({current_text: ev.target.value});
  }


deleteitem=(itemid)=>{
  const temp= this.state.data
  const newState= temp.filter((item)=>item.id!==itemid)
  this.setState({data:newState})
}

completeitem=(itemid)=>{
  const temp= [...this.state.data]
  const obj=temp.find((item)=>item.id===itemid)
  obj.completed=!obj.completed
  obj.date= this.date()
  this.setState({data:temp})
}


  render(){
    return(

    <div>
      <h1 align= 'center'>This is my Todo application</h1>

        <div class="mb-3">
          <label class="form-label">Enter Title: </label>
          <input type="text" class="form-control" id="title" onChange={(e)=>this.handleTitle(e)}/>
        </div>
        <div class="mb-3">
          <label class="form-label">Enter the task : </label>
          <textarea class="form-control" id="task" rows="3" onChange={(e)=>this.handleText(e)}></textarea>
          <button class="btn btn-primary" onClick={this.additem}>Submit</button> <br/>
          <br/> 
        </div>
        <h2>Task Pending: </h2>

        {this.state.data.map((item)=>(
          item.completed?<></>:<div>
          <br/>


          <table class="table">
            <tr>
              <th scope="col">Task No.</th>
              <th scope="col">Title</th>
              <th scope="col">Task</th>
              <th scope="col">Delete</th>
              <th scope="col">Complete</th>
              <th scope="col">Date and Time</th>
            </tr>
            <tr>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.text}</td>
            <td><button onClick={()=>this.deleteitem(item.id)}>Delete</button></td>
            <td><button onClick={()=>this.completeitem(item.id)}>Done</button></td>
            <td>{item.date}</td>
            </tr>
          </table>


    
        </div>

    ))}


        <div>

              <h2>Task Completed</h2>
              {
                this.state.data.map((item)=>(
                  item.completed?<div>
                    <br/>


            <table class="table">
                <tr>
                  <th scope="col">Task No.</th>
                  <th scope="col">Title</th>
                  <th scope="col">Task</th>
                  <th scope="col">Date and Time of Completion</th>
                </tr>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.text}</td>
                  <td>{item.date}</td>

                </tr>
            </table>


                    {/* <h3>Task {item.id}</h3>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p> */}

                  </div>:<></>
                ))
              }

        </div>

  </div>

  )
}

}












export default Todo;