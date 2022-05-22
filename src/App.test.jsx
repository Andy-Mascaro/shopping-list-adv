import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { ListProvider } from './context/ListProvider';

describe('Testing Add item', () => {
  it('Test 1', async () => {
    render(
      <ListProvider>
        <App />
      </ListProvider>
    );

    const preset = await screen.findByPlaceholderText('Add new item');
    userEvent.type(preset, 'Bread');

    const button = screen.getByText('Add');
    userEvent.click(button);

    const add = await screen.findByText('Bread');
    expect(add).toBeInTheDocument();
  });
});

describe('Testing Delete all', () => {
  it('Test 2', async () => {
    render(
      <ListProvider>
        <App />
      </ListProvider>
    );

    const word = await screen.findByText('Milk 🥛');
    expect(word).toBeInTheDocument();

    const all = screen.getByText('Clear All');
    userEvent.click(all);
    expect(word).not.toBeInTheDocument();
    
  });
});

describe('Testing edit', () => {
  it('Test 3', async () => {
    render(
      <ListProvider>
        <App />
      </ListProvider>
    );

    const edit = screen.getByText('Edit');
    userEvent.click(edit);
    const preset = await screen.findByPlaceholderText('Edit item');
    userEvent.type(preset, 'Flour');

    const button = screen.getByText('Save');
    userEvent.click(button);

    const change = await screen.findByText('Flour');
    expect(change).toBeInTheDocument();
  });
});
