import { createBrowserRouter, RouterProvider } from "react-router"
import PublicProtected from "./protectedRoutes/PublicProtected"
import AuthLayout from "./layouts/AuthLayout"
import Login from "./pages/Login"
import Register from "./pages/Register"
import MainProtected from "./protectedRoutes/MainProtected"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"

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
    }, {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <Home/>
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
