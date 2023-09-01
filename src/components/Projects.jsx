import React, { useEffect, useState } from 'react'

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
    <div>
        {
            projectsData.map((project, index) => {
                return (
                    <div key={index}>
                        <p>{project._id}</p>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
