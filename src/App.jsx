import { useContext } from "react"
import { DarkModeContext } from "./context/darkModeContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import "./style/dark.css";
import { userInputs, productInputs } from "./utils/formSource";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";


function App() {
  const {darkMode} = useContext(DarkModeContext)
  let loginInputs = userInputs.filter((input) => input.id === 1 || input.id === 5)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="login" element={<Login title="Login" userInputs={loginInputs} />} />
            <Route path="register" element={<Login title="Register" userInputs={userInputs} />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
               path="new"
               element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App