import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';

import courses from '../db.json';
import ApplyForm from './ApplyForm';
import Modal from '../Modal';

const MyContext = createContext();

function CourseList() {
    const [coursesData, setCoursesData] = useState([]);
    const [courseInfoVisible, setCourseInfoVisible] = useState({});
    const [showForm, setShowForm] = useState(courses.courses.reduce((obj, course) => (obj[course.courseId] = false, obj), {}));
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
        setIsOpen(false);
      };

      const [selectedCourseId, setSelectedCourseId] = useState(null);
      const course = coursesData.find(course => course.courseId === selectedCourseId);

    useEffect(() => {
      setCoursesData(courses.courses);
    }, []);
    
    const handleClick = useCallback((courseId) => {
        setCourseInfoVisible({
          ...courseInfoVisible,
          [courseId]: !courseInfoVisible[courseId],
        });
      }, [courseInfoVisible]);

      const handleFormToggle = (courseId) => {
        setShowForm(prevState =>({
            ...prevState,
            [courseId]: !prevState[courseId],
        }))
    }
    
    const BUTTON_WRAPPER_STYLES = {
        position: 'relative',
        zIndex: 1
    }

    return (
        <MyContext.Provider value={{handleClick, handleFormToggle, showForm}}>
        <>
            {coursesData.map(courses => (
            <div key={courses.courseId}>
                <h2>{courses.courseName}</h2>
                <p>Starts: {courses.courseStart}</p>
                <div style={BUTTON_WRAPPER_STYLES}>
                    <button onClick={() => {setIsOpen(true); setSelectedCourseId(courses.courseId)}}>Show More</button>
                    <Modal open={isOpen} onClose={handleClose} courseId={selectedCourseId} coursesData={coursesData}>
                    {course && (
                    <>
                        <h2>{course.courseName}</h2>
                        <p>Educator: {course.courseEducator}</p>
                        <p>Length of course: {course.courseLength}</p>
                        <p>Additional information: {course.courseInfo}</p>
                    </>
                    )}
                    </Modal>
                </div>
                <button onClick={() => handleClick(courses.courseId)}>
                {courseInfoVisible[courses.courseId] ? 'Hide' : 'More'} Info
                </button>
                {courseInfoVisible[courses.courseId] && (
                <div>
                    <p>Educator: {courses.courseEducator}</p>
                    <p>Length of course: {courses.courseLength}</p>
                    <p>Additional information: {courses.courseInfo}</p>
                    <ApplyFunc courseId={courses.courseId} />
                </div>
                )}
                <hr />
            </div>
            ))}
        </>
        </MyContext.Provider>
    );
}

function ApplyFunc({ courseId }) {
    const {handleFormToggle, showForm} = useContext(MyContext)
    return (
        <div>
            <button onClick={() => handleFormToggle(courseId)}>Apply here</button>
            {showForm[courseId] && <ApplyForm />}
        </div>

    )
};

export default CourseList;