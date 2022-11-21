import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter/Counter';

describe('testa se o timer funciona corretamente', () => {
  it('Verifica se ao digitar no input e acionar o timer funciona corretamente', () => {
    render(<Counter />);
    const DEFAULT_SECONDS = 25;
    const timer = screen.getByRole('timer');
    const inputSeconds = screen.getByPlaceholderText('ss');
    const inputMinute = screen.getByPlaceholderText('mm');
    const buttonStart = screen.getByRole('button');

    userEvent.type(inputMinute, 0);
    userEvent.type(inputSeconds, DEFAULT_SECONDS);
    userEvent.click(buttonStart);

    console.log(timer);
    expect(timer).toHaveTextContent('00:25');
  });
});
