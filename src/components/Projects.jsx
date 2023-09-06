import React, { useEffect, useState } from 'react'
import '../stylesheet/projects-style.css'
export default function Projects() {
  const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {

    const fechProjects = async () => {
      try {
        const response = await fetch('https://portfolio-teven-dev.fl0.io/api/projects');
        const data = await response.json();
        setProjectsData(data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    }

    fechProjects();

  }, []);
  return (
    <div className='container-projects'>
      {
        projectsData.map((project, index) => {
          return (
            <div className='card-project' key={index}>
              <div className='img-container'>
                <img className='img-project' src={project.image} alt="project-capture" />
                <div className='options'>
                  <span class="material-symbols-outlined option">
                    edit
                  </span>
                  <span class="material-symbols-outlined option">
                    delete
                  </span>
                </div>
              </div>

              <p>{project.title}</p>

            </div>
          )
        })
      }
    </div>
  )
}
