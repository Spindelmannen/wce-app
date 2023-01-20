import { render, screen } from '@testing-library/react';

import Admin from './Admin';

test('All course inputs are in the DOM', () => {
    render(<Admin />);

    //Act
    const courseNameInput = screen.getByLabelText('Course Name:');
    const courseNumberInput = screen.getByLabelText('Course Number:');
    const courseLengthInput = screen.getByLabelText('Course Length:');
    const courseStartInput = screen.getByLabelText('Course Start:');
    const courseInfoInput = screen.getByLabelText('Course Info:');
    const courseSubmitButton = screen.getByTestId('course-form-submit');

    //Assert
    expect(courseNameInput).toBeInTheDocument();
    expect(courseNumberInput).toBeInTheDocument();
    expect(courseLengthInput).toBeInTheDocument();
    expect(courseStartInput).toBeInTheDocument();
    expect(courseInfoInput).toBeInTheDocument();
    expect(courseSubmitButton).toBeInTheDocument();
});