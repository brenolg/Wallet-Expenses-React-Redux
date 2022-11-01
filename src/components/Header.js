import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  state = {
    totalField: 0,
    currency: 'BRL',
  };

  render() {
    const { email } = this.props;
    const { totalField, currency } = this.state;
    return (

      <div>

        <p data-testid="email-field" />

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
