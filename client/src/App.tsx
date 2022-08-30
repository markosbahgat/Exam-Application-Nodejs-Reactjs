import { Navigate, Route, Routes } from 'react-router-dom';
import { Exam, Exams, Main, SignIn, Rank } from 'routes';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
	if (!localStorage.getItem('user')) {
		return <Navigate to='/login' replace />;
	}
	return children;
};
function App() {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='/login' element={<SignIn />} />
			<Route
				path='/exams'
				element={
					<PrivateRoute>
						<Exams />
					</PrivateRoute>
				}
			/>

			<Route
				path='/exams/:id'
				element={
					<PrivateRoute>
						<Exam />
					</PrivateRoute>
				}
			/>

			<Route
				path='/rank'
				element={
					<PrivateRoute>
						<Rank />
					</PrivateRoute>
				}
			/>
		</Routes>
	);
}

export default App;
