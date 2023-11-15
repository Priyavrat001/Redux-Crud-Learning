import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const Update = () => {
    // const [users, setUsers] = useState({})
    const {id } = useParams();
    const {users, loading} = useSelector((state)=> state.app);
    const [newData, setNewData] = useState()

    
    const handleChange = (e)=>{
        
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    useEffect(() => {
    if(id){
        const singleUser = users.filter((e)=> e.id === id);
        setNewData(singleUser)
    }
    }, [])
    console.log(newData)
  return (
    <>
     <form className='w-50 mx-auto bg-gray' onSubmit={handleSubmit}>
            <h2 className='my-5'>Edit the data</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input onChange={handleChange} type="name"  name='name' className="form-control" id="name" aria-describedby="emailHelp" value={newData}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input onChange={handleChange} type="email"  name='email' className="form-control" id="email" value={newData} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
                    <input onChange={handleChange} type="age"  name='age' className="form-control" id="age" value={newData}/>
                </div>
                <div className="form-check">
                    <input className="form-check-input"  name='gender' type="checkbox" value="male" id="flexCheckDefault"
                    checked={newData[0].gender === "Male"}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Male
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input"  name='gender' type="checkbox" value="female" id="female" checked={newData[0].gender === "Female"}/>
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Female
                        </label>
                </div>
                <button type="submit" className="btn btn-primary d-flex m-auto">Submit</button>
            </form>
    </>
  )
}

export default Update