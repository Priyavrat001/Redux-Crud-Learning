import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showUser, deleteUser } from '../features/userDatailsSlice'
import CustomModal from './CustomModal'
import { Link } from 'react-router-dom'

const Read = () => {
    const dispatch = useDispatch()
    const [id, setId] = useState()
    const [pop, setPop] = useState(false)
    const { users, loading, searchData } = useSelector((state) => state.app)

    useEffect(() => {
        dispatch(showUser())
    }, [])
    if (loading) {
        return (<h2>Loading</h2>)
    }
    return (
        <>
        {pop && <CustomModal id={id} pop={pop} setPop={setPop}/>}
            <h2 className='my-3 text-center'>All data</h2>
            <div>
                {users &&
                users.filter((e)=>{
                    if(searchData.length === 0){
                        return e 
                    }
                    else{
                        return e.name.toLowerCase().includes(searchData.toLowerCase())
                    }
                }).map((e)=>(<div key={e.id} className="card w-50 mx-auto text-center my-2" style={{width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title text-center">{e.name}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary text-center">{e.email}</h6>
                            <p className="card-text">{e.age}</p>
                            <button onClick={()=>[setId(e.id), setPop(true)]} href="#" className="card-link">view</button>
                            <Link to={`/edit/${e.id}`} className="card-link">edit</Link>
                            <Link onClick={()=> dispatch(deleteUser(e.id))} className="card-link">delete</Link>
                        </div>
                 
                </div>))}
            </div>
        </>
    )
}

export default Read