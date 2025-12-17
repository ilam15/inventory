import Homepage from "./components/Homepage"
import Listpage from "./components/Listpage"
import Form from "./components/Form"
import { BrowserRouter, Route, Routes } from "react-router"
import HomeLayout from "./components/HomeLayout"
import ProductDetail from "./components/ProductDetail"
import LoginPage from "./components/LoginPage"
import ProtectedRoute from "./components/ProtectedRoute"
import { ToastContainer } from "react-toastify"
import Myorders from "./components/Myorders"

function App() {

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/listpage">
              <Route index element={<Listpage />} />
              <Route path=":id" element={<ProductDetail />} />
            </Route>
            <Route path="/form" element={<ProtectedRoute><Form /></ProtectedRoute>} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/myorders' element={<Myorders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
