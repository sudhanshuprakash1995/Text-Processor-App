import { render, screen } from '@testing-library/react';
import App from './App';

it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('About');
  expect(linkElement).toBeInTheDocument();
});

test("Fake Test", () => {
  expect(true).toBeTruthy();
})

