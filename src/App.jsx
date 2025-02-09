import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContext from './context/MainContext'
import useUser from './hooks/useUser'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CustomNavbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import Profile from './views/Profile'
import CreatePost from './views/CreatePost'
import Products from './views/Products'

function App() {
	const globalState = useUser();

	return (
		<>
			<MainContext.Provider value={globalState}>
				<BrowserRouter>
					<CustomNavbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/create" element={<CreatePost />} />
						<Route path="/products" element={<Products />} />
						{/* <Route path="/product/:id" element={<Product />} /> */}
						{/* <Route path="*" element={<NotFound />} /> */}
					</Routes>
				</BrowserRouter>
				<Footer />
			</MainContext.Provider>
		</>
	)
}

export default App
