import { useAuth } from '../hooks/useAuth';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { AuthGuard } from '../guard/AuthGuard';
import { AdminLayout } from '../layouts/AdminLayout';
import { Page404 } from '../pages/Page404';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ProfilePage } from '../pages/ProfilePage';
import { DashboardPage } from '../pages/DashboardPage';
import { RegisterPage } from '../pages/RegisterPage';
import { SuccessPage } from '../pages/SuccessPage';
import { ROLES } from '../helpers/roles';

export const RouterManager = () => {
	const { session } = useAuth();
	console.log(session, 'User session');
	console.log(!session?.token, 'condicion');

	return (
		<Router>
			<Routes>
				<Route
					path="*"
					element={<Page404 />}
				/>
				<Route
					path="/login"
					element={<LoginPage />}
				/>
				<Route
					path="/register"
					element={<RegisterPage />}
				/>

				<Route
					path="/"
					element={<MainLayout />}
				>
					<Route
						index
						element={<HomePage />}
					/>

					<Route
						path="/cart"
						element={<CartPage />}
					/>

					<Route
						path="/checkout"
						element={<CheckoutPage />}
					/>

					<Route
						path="/success"
						element={<SuccessPage />}
					/>

					<Route
						path="/profile"
						element={
							<AuthGuard
								redirectTo="/login"
								isAllow={session?.token}
							/>
						}
					>
						<Route
							index
							element={<ProfilePage />}
						/>
					</Route>
				</Route>

				<Route
					path="/admin"
					element={
						<AuthGuard
							redirectTo="/profile"
							isAllow={session?.role == ROLES.ADMIN}
						>
							<AdminLayout />
						</AuthGuard>
					}
				>
					<Route
						index
						element={<DashboardPage />}
					/>

					<Route
						path="/admin/products"
						element={<p>Admin Products</p>}
					/>
				</Route>
			</Routes>
		</Router>
	);
};