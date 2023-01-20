import React, { useState, useEffect, useCallback } from 'react';
import teachers from '../db.json';

const Teachers = () => {

    const [teachersData, setTeachersData] = useState([]);
    const [teacherInfoVisible, setTeacherInfoVisible] = useState({});

    useEffect(() => {
        setTeachersData(teachers.teachers);
    }, []);
    
    const handleClick = useCallback((teacherId) => {
        setTeacherInfoVisible({
            ...teacherInfoVisible,
            [teacherId]: !teacherInfoVisible[teacherId],
        });
        }, [teacherInfoVisible]);

    return (
        //key={teachers.teacherId}
        <div>
        {teachersData.map(teachers => (
        <div key={teachers.teacherId} className="Teacher-box">
            <h2>{teachers.firstName} {teachers.lastName}</h2>
            <button onClick={() => handleClick(teachers.teacherId)}>
            {teacherInfoVisible[teachers.teacherId] ? 'Hide' : 'More'} Info
            </button>
            {teacherInfoVisible[teachers.teacherId] && (
            <div>
                <p>E-mail: <a href="mailto:">{teachers.email}</a></p>
                <p>Phone: <a href="tel:+">{teachers.phone}</a></p>
                <p>SSN: {teachers.socialSecurityNumber}</p>
                <h3>Skills:</h3>
                <ul>
                    <li>{teachers.skills[0]}</li>
                    <li>{teachers.skills[1]}</li>
                    <li>{teachers.skills[2]}</li>
                </ul>
                <h3>Teaching:</h3>
                <ul>
                    <li>{teachers.courses[0]}</li>
                    <li>{teachers.courses[1]}</li>
                </ul>
            </div>
            )}
            <hr />
            </div>
        ))}
    </div>
    );
}

export default Teachers