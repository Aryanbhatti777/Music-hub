import { createBrowserRouter } from "react-router"
import PublicProtected from "./protectedRoutes/PublicProtected"
import AuthLayout from "./layouts/AuthLayout"
import Login from "./pages/Login"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          index: true,
          element: <AuthLayout />,
          children: [
            {
              index: true,
              element: <Login/>
          }
          ]
        }
      ]
    }
  ])

  return (
    <>
      
    </>
  )
}

export default App
