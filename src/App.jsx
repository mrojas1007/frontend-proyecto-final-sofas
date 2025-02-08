import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContext from './context/MainContext'
import useUser from './hooks/useUser'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CustomNavbar from './components/Navbar'
import Home from './views/Home'

function App() {
	const globalState = useUser();

	return (
		<>
			<MainContext.Provider value={globalState}>
				<BrowserRouter>
					<CustomNavbar />
					<Routes>
						<Route path="/" element={<Home />} />
						{/* <Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/create" element={<CreatePost />} />
						<Route path="/products" element={<Products />} />
						<Route path="/product/:id" element={<Product />} />
						<Route path="*" element={<NotFound />} /> */}
					</Routes>
				</BrowserRouter>
			</MainContext.Provider>
		</>
	)
}

export default App
