
import {RouterProvider} from "react-router-dom";
import {router} from "./config/routes.tsx";

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
