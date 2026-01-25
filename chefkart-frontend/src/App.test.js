import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Mock the components that make API calls to prevent test failures
jest.mock('./components/ChefDirectory', () => () => <div data-testid="chef-directory">Chef Directory</div>);
jest.mock('./components/Testimonial1', () => () => <div>Testimonials</div>);

// Utility to wrap components in Router if App.js doesn't include it at the root level for tests
const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('ChefKart App Tests', () => {

  test('renders the main App without crashing', () => {
    // If your App.js already contains <BrowserRouter>, just use render(<App />)
    // If it doesn't, use the wrapper approach. Assuming App.js has the Router:
    render(<App />);

    // Check for a common element, like the Logo or a main CTA
    // This assumes your Navbar has the text "ChefKart"
    const brandElement = screen.getByText(/ChefKart/i);
    expect(brandElement).toBeInTheDocument();
  });

  test('navigates to the Investor page', async () => {
    render(<App />);

    // Find a link that points to /invest (adjust text based on your actual Navbar)
    const investLink = screen.getByRole('link', { name: /invest/i });
    expect(investLink).toBeInTheDocument();
  });

  test('shows the Hero section on Home page', () => {
    render(<App />);

    // Check for a known text from your Carousel/Hero component
    // Example: "Cook for One-time" or "Unlimited"
    const heroText = screen.getByText(/Cook/i);
    expect(heroText).toBeInTheDocument();
  });

});