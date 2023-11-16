import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchUser } from '../features/userDatailsSlice'

const Nav = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  const allUsers = useSelector((state)=>{
    return state.app.users
  })
  const handleChange = (e)=>{
    setSearch(e.target.value)
  }
  useEffect(() => {
   dispatch(searchUser(search))
  }, [search])
  console.log(search)
  
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/read">Read Data({allUsers.length})</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" onChange={handleChange}>Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav