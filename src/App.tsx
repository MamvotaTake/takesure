
import {RouterProvider} from "react-router-dom";
import {router} from "./config/routes.tsx";
import {Cursor} from "./components/Cursor";

function App() {

  return (
    <>
        <Cursor/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
