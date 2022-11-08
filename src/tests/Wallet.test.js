import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

describe('Teste o Login ', () => {
  test('Teste se é renderizado elementos do Header', () => {
    renderWithRouterAndRedux(<Wallet />);

    const email = screen.getByTestId('email-field');
    const total = screen.getByTestId('total-field');
    const currency = screen.getByTestId('header-currency-field');

    expect(email).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(currency).toBeInTheDocument();
  });

  test('Teste se a soma aparece no header', () => {
    renderWithRouterAndRedux(<Wallet />);

    const valueInput = screen.getByTestId('value-input');
    const soma = screen.getByText(/0\.00/i);
    const btn = screen.getByRole('button', { name: /adicionar despesa/i });

    userEvent.type(valueInput, '3');
    userEvent.click(btn);

    expect(soma).toBeInTheDocument();

    screen.logTestingPlaygroundURL();
  });

  test('Teste se WalletForm é renderizado', () => {
    renderWithRouterAndRedux(<Wallet />);

    const value = screen.getByText(/valor:/i);
    const descriprion = screen.getByText(/descrição:/i);
    const moeda = screen.getByText(/moeda:/i);
    const pagamento = screen.getByText(/método de pagamento:/i);
    const categoria = screen.getByText(/categoria:/i);

    expect(value).toBeInTheDocument();
    expect(descriprion).toBeInTheDocument();
    expect(moeda).toBeInTheDocument();
    expect(pagamento).toBeInTheDocument();
    expect(categoria).toBeInTheDocument();
  });
});
