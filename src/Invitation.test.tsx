import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import { prettyDOM } from "@testing-library/dom"
import App from './App';


test('To check if it renders a name', () => {
    const { container } = render(<App />);
    console.log(prettyDOM(container));
    const linkElement = screen.getByText(/Lucas Vargas/i);
    expect(linkElement).toBeInTheDocument();


});

test('To check if it renders a name', () => {
    render(<App />);

    const h1Element = screen.getByTestId("h1id")
    expect(h1Element).toBeInTheDocument();
});

test('To check if it renders a name', () => {
    render(<App />);

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument();

});
