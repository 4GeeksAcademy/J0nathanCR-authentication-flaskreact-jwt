import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Signup = () => {

    const [user, setUser] = useState({'is_active': true});
    const navigate = useNavigate();

    const handleOnchangeLogin = (event) => {
        const target = event.target;

        setUser({
            ...user,
            [target.name]: target.value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault(); // evita recargar la página
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/signup`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                }
            );
            if (!response.ok) {
                alert("Usuario o contraseña incorrectos");
                return;
            }

            const body = await response.json();
            alert("Registro exitoso ✅")
            navigate("/login")

        } catch (err) {
            console.error(err)
            alert("Error en el login")
        }
    }

    return (
        <div className="container">
            <div className="card mt-3 mx-auto shadow p-4" style={{ width: '22rem' }}>
                <h4 className="text-center mb-4">Registrar usuario</h4>

                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            onChange={handleOnchangeLogin}
                            placeholder="Ingresa tu usuario"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={handleOnchangeLogin}
                            placeholder="Ingresa tu contraseña"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Enviar</button>
                </form>

            </div>
        </div>
    );
};
