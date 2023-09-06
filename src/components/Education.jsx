import React, { useEffect, useState } from 'react'
import '../stylesheet/education-style.css'

export default function Education() {
    const [educationData, setEducationData] = useState([]);
    useEffect(() => {

        const fetchEducation = async () => {
            try {
                const response = await fetch('https://portfolio-teven-dev.fl0.io/api/education');
                const data = await response.json();
                setEducationData(data);
            } catch (error) {
                console.error('Error fetching about data:', error);
            }
        }

        fetchEducation();

    }, []);

    return (
        <div className='education-container'>
            {
                educationData.map((item, index) => {
                    return (
                        <div className='card-education' key={index}>
                            
                            <p>{item.institute}</p>

                        </div>
                    )
                })
            }
        </div>
    )
}
