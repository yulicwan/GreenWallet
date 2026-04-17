// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GreenWallet title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GreenWallet/i);
    expect(titleElement).toBeInTheDocument();
});
