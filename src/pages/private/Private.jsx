import { UserContext } from "@/context/userContext"
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"

function Private(){
    const {currentUser} = useContext(UserContext)
    if(!currentUser){
        return <Navigate to="/" />
    }
    return (
    <>
        <Outlet />
    
    </>
    )
}

export default Private