import React from 'react';
import { render, screen } from '@testing-library/react';
import Landingpage from './Landingpage';

jest.mock('./Courses', () => () => <div data-testid="courses"></div>);
jest.mock('./Teachers', () => () => <div data-testid="teachers"></div>);

describe('Landingpage', () => {
it('renders the Courses and Teachers components', () => {
// Arrange
render(<Landingpage />);


// Assert
expect(screen.getByTestId('courses')).toBeInTheDocument();
expect(screen.getByTestId('teachers')).toBeInTheDocument();
});
});