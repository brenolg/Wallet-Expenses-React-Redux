import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestCurrencies, infoWallet } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: '',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestCurrencies());
  }

  handleExpenses = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();

    this.setState({
      exchangeRates: data,
    }, this.dispatchFunc);
  };

  dispatchFunc = () => {
    const { dispatch, expenses } = this.props;
    dispatch(infoWallet({ ...this.state,
      id: expenses.length }));
    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: '',
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="value-input">
            Valor:
            <input
              name="value"
              value={ value }
              onChange={ this.handleChange }
              data-testid="value-input"
              type="number"
              id="value-input"
            />
          </label>
          <label htmlFor="description-input">

            Descrição:
            <input
              name="description"
              value={ description }
              onChange={ this.handleChange }
              data-testid="description-input"
              type="text"
              id="description-input"
            />
          </label>

          <label htmlFor="currency-input">
            Moeda:

            <select
              data-testid="currency-input"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              {currencies.map((currencie) => (

                <option
                  key={ currencie }
                >
                  {currencie}
                </option>

              ))}

            </select>
          </label>

          <label htmlFor="method-input">
            Método de pagamento:
            <select
              data-testid="method-input"
              id="method-input"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag-input">
            Categoria:
            <select
              data-testid="tag-input"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>

          <button
            type="button"
            onClick={ this.handleExpenses }
          >
            Adicionar despesa
          </button>

        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletForm);
