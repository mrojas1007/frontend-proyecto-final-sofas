import './App.css'
import MainContext from './context/MainContext'
import { BrowserRouter } from 'react-router-dom'
import useUser from './hooks/useUser'

function App() {
	const globalState = useUser();

  return (
    <>
	  <MainContext.Provider value={globalState}>
		<BrowserRouter>
		<Navbar/>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/register" element={<Register />} />
			<Route path="/login" element={<Login />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/create" element={<CreatePost />} />
			<Route path="/products" element={<Products />} />
			<Route path="/product/:id" element={<Product />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
		</BrowserRouter>
	  </MainContext.Provider>
    </>
  )
}

export default App
