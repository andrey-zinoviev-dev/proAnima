import React from 'react'
import './App.css'
import Home from './Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './landing'
import CandlePage from './CandlePage'
// const Landing = 
function App() {
  //states
  const [order, setOrder] = React.useState([]);
  const [orderClicked, setOrderClicked] = React.useState(false);



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home order={order} setOrder={setOrder} orderClicked={orderClicked} setOrderClicked={setOrderClicked}></Home>,
      children: [
        {
          path: "/",
          element: <Landing order={order} setOrder={setOrder} orderClicked={orderClicked} setOrderClicked={setOrderClicked}></Landing>
        },
        {
          path: "/candles/:name",
          element: <CandlePage setOrder={setOrder}></CandlePage>
        }
      ]
    }
  ]);

  React.useEffect(() => {
    console.log(order);
  }, [order]);

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
