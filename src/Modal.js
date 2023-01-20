import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
    position: 'fixed',
    top:'50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:'#FFF',
    padding: '10px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top:'0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, .09)',
    zIndex: 1000
}

export default function Modal({ open, courseId, coursesData, onClose }) {
    if (!open) return null;
    const course = coursesData.find(course => course.courseId === courseId);

    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES} onClick={onClose} />
            <div style={MODAL_STYLES}>
                <button onClick={onClose}>Close Window</button>
                {course && (
                <>
                    <h2>{course.courseName}</h2>
                    <p>Educator: {course.courseEducator}</p>
                    <p>Length of course: {course.courseLength}</p>
                    <p>Additional information: {course.courseInfo}</p>
                </>
                )}
            </div>
        </>,
        document.getElementById('portal')
    );
    }
