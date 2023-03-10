import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({userDetails,children}) => {
    if(!userDetails.email){
        return <Navigate to='/'/>
    }
    return children
}

export default ProtectedRoute