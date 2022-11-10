import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteItem } from '../redux/actions';

class Table extends Component {
  deleteExpense = ({ target }) => {
    const { dispatch, expenses } = this.props;
    const idToDelete = Number(target.id);
    console.log(idToDelete);

    const expenseArr = expenses.filter((expense) => (expense.id !== idToDelete));
    dispatch(deleteItem(expenseArr));
  };

  render() {
    const { expenses } = this.props;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>

          <tbody>
            {expenses && expenses.map((expense) => {
              const { id, description, method, tag, value, currency, exchangeRates,
              } = expense;
              const { name, ask } = exchangeRates[currency];

              return (

                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{Number(value).toFixed(2)}</td>
                  <td>{name}</td>
                  <td>{Number(ask).toFixed(2)}</td>
                  <td>{(Number(value) * Number(ask)).toFixed(2)}</td>
                  <td>Real</td>

                  <td>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      id={ id }
                      onClick={ this.deleteExpense }
                    >
                      Excluir
                    </button>
                  </td>

                </tr>

              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Table);
