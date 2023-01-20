/* eslint-disable no-restricted-globals */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
    test('should render the company title', () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        expect(screen.getByText('Westcoast Education')).toBeInTheDocument();
    });

    test('should render links to Home, Courses, Teachers and Admin', () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Courses')).toBeInTheDocument();
        expect(screen.getByText('Teachers')).toBeInTheDocument();
        expect(screen.getByText('Admin')).toBeInTheDocument();
    });
});