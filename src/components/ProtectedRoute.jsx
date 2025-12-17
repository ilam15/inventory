import { Navigate } from "react-router";
 
const ProtectedRoute = ({children}) => {

    const isLoggedin=sessionStorage.getItem("isLoggedin") ?  true :  false

  return (
    isLoggedin ? children : <Navigate to='/login'/>
  )
}

export default ProtectedRoute