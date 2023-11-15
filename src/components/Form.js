import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { createUser } from '../features/userDatailsSlice'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [users, setUsers] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleChange = (e)=>{
        setUsers({...users, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("users...", users)
        dispatch(createUser(users))
        navigate('/read')
    }
    return (
        <>
            <form className='w-50 mx-auto bg-gray' onSubmit={handleSubmit}>
            <h2 className='my-5'>Enter your data to craete a user.</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input onChange={handleChange} type="name"  name='name' className="form-control" id="name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input onChange={handleChange} type="email"  name='email' className="form-control" id="email" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
                    <input onChange={handleChange} type="age"  name='age' className="form-control" id="age" />
                </div>
                <div className="form-check">
                    <input className="form-check-input"  name='gender' type="checkbox" value="male" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Male
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input"  name='gender' type="checkbox" value="female" id="female"/>
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Female
                        </label>
                </div>
                <button type="submit" className="btn btn-primary d-flex m-auto">Submit</button>
            </form>
        </>
    )
}

export default Form