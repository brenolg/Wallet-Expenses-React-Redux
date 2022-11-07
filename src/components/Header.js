import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  state = {
    currency: 'BRL',
  };

  render() {
    const { email, expenses } = this.props;
    const { currency } = this.state;
    console.log(expenses[0]);

    return (

      <div>

        <p data-testid="email-field">
          {email}
        </p>

        <p data-testid="total-field">
          { (expenses.length === 0 ? '0.00'
            : expenses.reduce((prev, cur) => {
              const currenciCode = cur.currency;
              const curAsk = Number(cur.exchangeRates[currenciCode].ask);
              prev = (Number(cur.value) * curAsk) + Number(prev);
              console.log(prev);
              return Number(prev).toFixed(2);
            }, 0)
          )}
        </p>

        <p data-testid="header-currency-field">{currency}</p>

      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
