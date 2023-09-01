import { useNavigate } from 'react-router-dom';
import Projects from '../components/Projects';
import '../stylesheet/dashboard-style.css'
function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    }

    return (
        <div className='container'>
            <nav className='nav'>
                <h1>Dashboard</h1>
                <button onClick={handleLogout}>Cerrar Sesión</button>
            </nav>
            <section className='container-box'>
                <article className='projects-box'>
                    <h2>Proyectos</h2>
                    <Projects />
                </article>
            </section>
        </div>
    );
}

export default Dashboard;
