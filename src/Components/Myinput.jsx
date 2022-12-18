import React from 'react'
const Myinput = ({setValue,type,placeholder}) => {
  return (
      <div>
      <input onChange={(event) => setValue(event.target.value)}
      type={type}  placeholder={placeholder}></input>
      </div>
  )
}

export default Myinput