//Sample React testing Library

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


//Sample 2
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("Test theme button toggle", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Current theme/i);
    
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/dark/i);
});

//-----------------------------------------------------------------------------
//Sample JEST
const Sum = require('./index');

describe("test Sum", () => {
    it('Sum', () => {
        expect(Sum(1, 2)).toBe(3);
    });

    it('if country exists in database', () => {
        expect(isValidCountry('Belgium')).toBe(true)
    })

    it('should be instance of Car', () => {
        expect(newTruck()).toBeInstanceOf(Car);
    });


});


