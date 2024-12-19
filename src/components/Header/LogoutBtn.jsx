import React from 'react'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }

  return (
  
    <div>Logoutbtn</div>
  )
}

export default LogoutBtn