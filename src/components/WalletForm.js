import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestCurrencies } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestCurrencies());
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <div>
        <form>
          <label htmlFor="value-input">
            Valor:
            <input
              data-testid="value-input"
              type="number"
              id="value-input"
            />
          </label>
          <label htmlFor="description-input">

            Descrição:
            <input
              data-testid="description-input"
              type="text"
              id="description-input"
            />
          </label>

          <label htmlFor="currency-input">
            Moeda:

            <select data-testid="currency-input">
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
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag-input">
            Categoria:
            <select data-testid="tag-input">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>

          <button
            type="button"
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

};

const mapStateToProps = ({ wallet }) => wallet;
export default connect(mapStateToProps)(WalletForm);
