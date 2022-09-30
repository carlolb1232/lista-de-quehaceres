import React, { useState } from 'react'
import "../Style/formStyle.css"

const Form = (props) => {

  const { onChores } = props

  const [chore, setChore] = useState("");


  const handleChange = (e)=>{
    const { value } = e.target
    console.log(value);
    setChore(value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(chore)
    onChores(chore);
    setChore("");
  }
  

  return (
    <form onSubmit={e=>handleSubmit(e)}>
      <input 
        type="text" 
        placeholder='Ingrese quehacer'
        onChange={e=>handleChange(e)}
        value={chore}
      />
      <input type="submit" value={"Agregar"}/>
    </form>
  )
}

export default Form;