import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveUser } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleButton = () => {
    const { email, password } = this.state;
    const number = 6;
    const verifyMax = password.length >= number;
    const emailCheck = email.length > 0 && email.includes('@');
    return !(verifyMax && emailCheck);
  };

  handleChange = () => ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, () => this.handleButton());
  };

  handleClick = () => {
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(saveUser(email));
    history.push('/carteira');
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <h1> Tribe Wallet</h1>
        <div>
          <form>
            <label htmlFor="email">
              Email
              <input
                data-testid="email-input"
                type="email"
                name="email"
                value={ email }
                onChange={ this.handleChange() }
              />

            </label>
            Senha
            <label htmlFor="password">
              <input
                data-testid="password-input"
                type="password"
                name="password"
                value={ password }
                onChange={ this.handleChange() }
              />
            </label>

            <button
              data-testid="login-submit-button"
              type="button"
              name="submit"
              onClick={ this.handleClick }
              disabled={ this.handleButton() }
            >
              Entrar
            </button>
          </form>

        </div>
      </>
    );
  }
}

Login.propTypes = {
  dispatch: propTypes.func.isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
