import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../../contexts/UsersContext"

export function Home() {
  
  const { logout, loggedIn } = useContext(UserContext)

  return (
    <div>
      <h1>HOME</h1>
      {!loggedIn && <Navigate to="/login" />}
      
      <button onClick={logout}> Sair </button>
    </div>
  )
}