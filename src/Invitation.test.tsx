import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import App from './App';


it('To check if it renders a name', () => {
    render(<App />);

    const name = screen.getByText(/Lucas Vargas/i);
    expect(name).toBeInTheDocument();
});

test('To check if there is the h1id', () => {
    render(<App />);

    const h1Element = screen.getByTestId("h1id");
    expect(h1Element).toBeInTheDocument();
});

test('To check if there is a button', () => {
    render(<App />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});
