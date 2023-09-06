import { useNavigate } from 'react-router-dom';
import Projects from '../components/Projects';
import Education from '../components/Education';
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
                <article>
                    <br />
                    <div className='project-add'>
                        <h2>Education</h2>
                        <button className='b-add'>
                            <span class="material-symbols-outlined add">
                                add
                            </span>
                            <span>Add Education</span>
                        </button>
                    </div>
                    <br />
                    <Education />
                </article>
                <article className='projects-box'>
                    <br />
                    <div className='project-add'>
                        <h2>Projects</h2>
                        <button className='b-add'>
                            <span class="material-symbols-outlined add">
                                add
                            </span>
                            <span>Add Project</span>
                        </button>
                    </div>
                    <br />
                    <Projects />
                </article>


            </section>
        </div>
    );
}

export default Dashboard;
