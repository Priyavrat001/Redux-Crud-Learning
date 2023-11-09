import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { createUser } from '../features/userDatailsSlice'

const Form = () => {
    const [user, setUser] = useState({})
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user);
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("user...", user)
        dispatch(createUser(user))
    }
    return (
        <>
            <form className='w-50 mx-auto bg-gray' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input onChange={handleChange} type="name"  name='name' className="form-control" id="name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Email</label>
                    <input onChange={handleChange} type="email"  name='email' className="form-control" id="email" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Age</label>
                    <input onChange={handleChange} type="age"  name='age' className="form-control" id="age" />
                </div>
                <div className="form-check">
                    <input className="form-check-input"  name='gender' type="checkbox" value="male" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            Male
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input"  name='gender' type="checkbox" value="" id="female" checked/>
                        <label className="form-check-label" for="flexCheckChecked">
                            Female
                        </label>
                </div>
                <button type="submit" className="btn btn-primary d-flex m-auto">Submit</button>
            </form>
        </>
    )
}

export default Form