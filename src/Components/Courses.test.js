import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './Courses';

jest.mock('../db.json', () => ({
    courses: [
        {
            courseId: 1,
            courseName: 'Physics',
            courseStart: 'January 1, 2022',
            courseInfo: 'Learn the all about what physics is about and how much impact it has for our lives.'
        },
        {
            courseId: 2,
            courseName: 'Chess',
            courseStart: 'February 1, 2022',
            courseInfo: 'Become a master in chess beat everyone that tries to challenge you.'
        }
    ]
}));

describe('CourseList', () => {
    it('displays course information', () => {
    // Arrange
    render(<CourseList />);

    // Assert
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toBeInTheDocument();
    expect(screen.getByText('Starts: January 1, 2022')).toBeInTheDocument();
    expect(headings[1]).toBeInTheDocument();
    expect(screen.getByText('Starts: February 1, 2022')).toBeInTheDocument();
    expect(screen.queryByText('Additional information: Learn the all about what physics is about and how much impact it has for our lives.')).toBeNull();
    });
});