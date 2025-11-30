import { Link } from "react-router-dom";

export const Navbar = () => {
	const isAuthenticated = sessionStorage.getItem("access_token");
	const navigate = useNavigate()

	const handleLogout = () => {
		sessionStorage.removeItem("access_token");
		navigate("/login"); // redirige al login o a donde prefieras
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
					{isAuthenticated && (
						<button
							type="button"
							className="btn btn-outline-danger ms-2"
							onClick={handleLogout}
						>
							Cerrar Sesión
						</button>
					)}
				</div>
			</div>
		</nav>
	);
};