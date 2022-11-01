import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  state = {
    totalField: 'BRL',
    currency: 0,
  };

  render() {
    const { email } = this.props;
    const { totalField, currency } = this.state;
    return (

      <div>

        <p data-testid="email-field" />
        Email:
        {email}

        <p data-testid="total-field">{totalField}</p>

        <p data-testid="header-currency-field">{currency}</p>

      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
