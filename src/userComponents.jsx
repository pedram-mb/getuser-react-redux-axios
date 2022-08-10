import React from 'react'
import { useSelector , useDispatch } from "react-redux"
import { getUser } from './redux/user/userAction'

const UserComponents = ()=>{

    const {loading , data , error} = useSelector(state => state)
    // console.log({loading , data , error});
    const dispatch = useDispatch()

    const HandelGetUser = ()=>{
        dispatch(getUser())
    }

    return(
        <div>
            <div className='text-center mt-5 '>
                <button className='btn btn-primary p-3' onClick={HandelGetUser}>دریافت کاربر</button>
            </div>
            {
                loading ? (
                    <div className='text-center text-secondary mt-5'>
                        <div className='spinner-border p-4' role="status">
                            <span className='visually-hidden'>
                                loading ...
                            </span>
                        </div>
                    </div>
                ) : data.length > 0 ? (
                    <ul>
                        {
                            data.map( u => (
                                <li key={u.id}>{u.username}</li>
                            ))
                        }
                    </ul>
                ) : error ? (
                    <h3 className='text-center text-danger mt-5'>{error}</h3>
                ) : (
                    <h3 className='text-center text-info mt-5'>با فشاردن دکمه کاربران را دریافت  کنید</h3>
                )
            }
        </div>
    )
}
export default UserComponents;
