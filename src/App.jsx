import { createBrowserRouter, RouterProvider } from "react-router"
import PublicProtected from "./protectedRoutes/PublicProtected"
import AuthLayout from "./layouts/AuthLayout"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            {
              index: true,
              element: <Login/>
            },
            {
              path: "/register",
              element: <Register/>
            }
          ]
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router } />
    </>
  )
}

export default App
