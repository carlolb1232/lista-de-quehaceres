import React, { useState } from 'react'
import '../Style/listStyle.css'

const List = (props) => {

  const { aChore,id } = props

  const [isItDone, setIsItDone] = useState(false);
  // const handleCheckbox = (e)=>{
  //   // e.target.checked
  //   console.log(e.target.checked)
  //   console.log(isItDone)
  //   setIsItDone(e.target.cheked)
  //   console.log(isItDone)
  // }
  // console.log(a);
  const handleClick = ()=>{
    let a = document.getElementById(id);
    // alert("Hola")
    console.log(a)
    a.style.display = "none"
  }
  return (
    <div className='chore-container' id={id}>
      
      <p 
        style={
          isItDone?
          {textDecoration: "line-through"}
          :
          {textDecoration: "none"}
        }
      >
        {aChore}
      </p>
      <input 
        type="checkbox" 
        value={isItDone}
        onChange={e => setIsItDone(e.target.checked)}
      />
      <button 
        onClick={
          ()=>handleClick()
        }
      >
          Delete
      </button>
    </div>
    
  )
}

export default List;
