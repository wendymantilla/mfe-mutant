import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainForm from "./component/MainForm";

test('renders MainForm component', () => {
  const { getByText, getByLabelText } = render(<MainForm />);

  expect(getByText('Mutant Test')).toBeInTheDocument();

  expect(getByText('Name:')).toBeInTheDocument();
  expect(getByText('Age:')).toBeInTheDocument();

  expect(getByText('Send')).toBeInTheDocument();
  expect(getByText('Clean')).toBeInTheDocument();
});