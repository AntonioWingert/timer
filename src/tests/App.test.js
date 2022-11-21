import { render, screen } from '@testing-library/react';
import App from '../App';

describe('O componente App é renderizado corretamente', () => {
  it('verifica se componente é renderizado', () => {
    render(<App />);
  });
  it('verifica se o timer e inputs estão renderizados corretamente', () => {
    render(<App />);
    const timer = screen.getByRole('timer');
    const inputSeconds = screen.getByPlaceholderText('ss');
    const inputMinute = screen.getByPlaceholderText('mm');
    const buttonStart = screen.getByRole('button');

    expect(timer).toBeInTheDocument();
    expect(inputMinute).toBeInTheDocument();
    expect(inputSeconds).toBeInTheDocument();
    expect(buttonStart).toBeInTheDocument();
  });
  it('verifica se todos os botoẽs de navegação estão sendo renderizados', () => {
    render(<App />);
    const ARRAY_CONTENT = 3;
    const buttons = screen.getAllByRole('menuitem');
    expect(buttons.length).toEqual(ARRAY_CONTENT);
  });
  it('verifica se o footer esta sendo renderizado corretamente', () => {
    render(<App />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});
