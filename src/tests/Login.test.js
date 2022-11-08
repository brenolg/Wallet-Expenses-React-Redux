import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Login from '../pages/Login';

describe('Teste o Login ', () => {
  test('Teste se é renderizado campo email, campo password e titulo estão na tela', () => {
    renderWithRouterAndRedux(<Login />);

    const email = screen.getByRole('textbox');
    const senha = screen.getByTestId('password-input');
    const titulo = screen.getByRole('heading', { name: /tribe wallet/i });

    expect(email).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
    expect(titulo).toBeInTheDocument();
  });

  test('Teste se botão fica enable pos email e senha corretos', () => {
    renderWithRouterAndRedux(<Login />);
    const email = screen.getByTestId('email-input');
    const senha = screen.getByTestId('password-input');
    const btn = screen.getByRole('button');

    userEvent.type(email, 'brenolg@yahoo.com.br');
    userEvent.type(senha, '123456');

    expect(btn).toBeEnabled();
  });
});
