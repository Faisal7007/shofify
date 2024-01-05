import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivetRoute({ children }) {
    const isAuthenticated = sessionStorage.getItem('key')
    return (
        isAuthenticated ? children : <Navigate to='/login'/>
    )
}

export default PrivetRoute
