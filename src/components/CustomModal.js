import React from 'react'
import './CoutomModal.css'
import { useSelector } from 'react-redux'

const CustomModal = ( {id, pop, setPop}) => {
    const allUsers = useSelector((state)=> state.app.users)
    const singleUser = allUsers.filter((e)=> e.id === id)
    // console.log(singleUser)
  return (
    <>
    <div className="modalBackground">
        <div className="modalContainer">
            {/* <h1>hello</h1> */}
            <button onClick={()=> setPop(false)}>Close</button>
            <h2>{singleUser[0].name}</h2>
            <h3>{singleUser[0].email}</h3>
            <h4>{singleUser[0].age}</h4>
        </div>
    </div>
    </>
  )
}

export default CustomModal