import React from 'react';
import { render, screen } from '@testing-library/react';
import TeacherList from './Teachers';

jest.mock('../db.json', () => ({
teachers: [
{
id: 1,
firstName: 'John',
lastName: 'Doenut',
socialSecurityNumber: '123-45-6789',
email: 'johnny@mail.com',
phone: '555-555-5555',
skills: ['Homebrew', 'Python'],
courses: [1, 2]
},
{
id: 2,
firstName: 'Dora',
lastName: 'Explore',
socialSecurityNumber: '987-65-4321',
email: 'Dora@explore.com',
phone: '555-555-5556',
skills: ['React', 'Next.js'],
courses: [2, 3]
}
]
}));

describe('TeacherList', () => {
it('displays teacher information', () => {
    // Arrange
render(<TeacherList />);

    // Assert
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toBeInTheDocument();
    expect(screen.getByText('John Doenut')).toBeInTheDocument();
    expect(headings[1]).toBeInTheDocument();
    expect(screen.getByText('Dora Explore')).toBeInTheDocument();
    expect(screen.queryByText('Skills: JavaScript, React')).toBeNull();
});
});





