import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import App from './App';
       

test('To check if it renders a name', () => {
    render(<App name ='Lucas Vargas' />);
    const linkElement = screen.getByText(/Lucas Vargas/i);
    expect(linkElement).toBeInTheDocument();
});
