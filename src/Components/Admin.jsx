import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Admin() {
    const courseRef = useRef({});
    const teacherRef = useRef({});

    const handleCourseSubmit = async (event) => {
        event.preventDefault();
        try {
            const newCourse = {
                id: uuidv4(), // genererar ett unikt ID
                courseName: courseRef.current.courseName,
                courseNumber: courseRef.current.courseNumber,
                courseLength: courseRef.current.courseLength,
                courseStart: courseRef.current.courseStart,
                courseInfo: courseRef.current.courseInfo
            }
            const response = await fetch('http://localhost:3004/courses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newCourse),
            });
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    }
    
    const handleTeacherSubmit = async (event) => {
        event.preventDefault();
        try {
            const newTeacher = {
                id: uuidv4(), // genererar ett unikt ID
                firstName: teacherRef.current.firstName,
                lastName: teacherRef.current.lastName,
                socialSecurityNumber: teacherRef.current.socialSecurityNumber,
                email: teacherRef.current.email,
                phone: teacherRef.current.phone,
                skills: teacherRef.current.skills,
                courses: teacherRef.current.courses
            }
            const response = await fetch('http://localhost:3004/teachers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTeacher),
            });
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='Admin-container'>
            <form className='Course-form' onSubmit={handleCourseSubmit}>
                <h2>Add Course</h2>
                <div className='Course-form-inputs'>
                    <label>
                        Course Name:
                        <br/>
                        <input required type="text" name="courseName" onChange={e => courseRef.current = { ...courseRef.current, courseName: e.target.value }} />
                    </label>
                    <label>
                        Course Number:
                        <br/>
                        <input type="number" name="courseNumber" onChange={e => courseRef.current = { ...courseRef.current, courseNumber: e.target.value }} />
                    </label>
                    <label>
                        Course Length:
                        <br/>
                        <input type="text" name="courseLength" onChange={e => courseRef.current = { ...courseRef.current, courseLength: e.target.value }} />
                    </label>
                    <label>
                        Course Start:
                        <br/>
                        <input required type="date" name="courseStart" onChange={e => courseRef.current = { ...courseRef.current, courseStart: e.target.value }} />
                    </label>
                    <label>
                        Course Info:
                        <br/>
                        <textarea required cols={20} rows={5} name="courseInfo" onChange={e => courseRef.current = { ...courseRef.current, courseInfo: e.target.value }} />
                    </label>
                </div>
                <input data-testid="course-form-submit" className='Course-form-submit' type="submit" value="Register Course" />
            </form>


            <form className='Teacher-form' onSubmit={handleTeacherSubmit}>
                <h2>Add Teacher</h2>
                <div className='Teacher-form-inputs'>
                    <label>
                        First Name:
                        <br/>
                        <input type="text" name="firstName" onChange={e => teacherRef.current = { ...teacherRef.current, firstName: e.target.value }} />
                    </label>
                    <label>
                        Last Name:
                        <br/>
                        <input required type="text" name="lastName" onChange={e => teacherRef.current = { ...teacherRef.current, lastName: e.target.value }} />
                    </label>
                    <label>
                        Social Security Number:
                        <br/>
                        <input required type="number" name="socialSecurityNumber" onChange={e => teacherRef.current = { ...teacherRef.current, socialSecurityNumber: e.target.value }} />
                    </label>
                    <label>
                        Email:
                        <br/>
                        <input required type="email" name="email" onChange={e => teacherRef.current = { ...teacherRef.current, email: e.target.value }} />
                    </label>
                    <label>
                        Phone:
                        <br/>
                        <input type="tel" name="phone" onChange={e => teacherRef.current = { ...teacherRef.current, phone: e.target.value }} />
                    </label>
                    <label>
                        Skills:
                        <br/>
                        <textarea required cols={20} rows={5} onChange={e => teacherRef.current = { ...teacherRef.current, skills: e.target.value.split(',') }} />
                    </label>
                    <label>
                        Courses:
                        <br/>
                        <textarea cols={20} rows={5} onChange={e => teacherRef.current = { ...teacherRef.current, courses: e.target.value.split(',') }} />
                    </label>
                </div>
                <input className='Teacher-form-submit' type="submit" value="Register Teacher" />
            </form>
        </div>
    );
}

export default Admin;