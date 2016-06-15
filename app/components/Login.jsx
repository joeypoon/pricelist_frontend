import React from 'react';

export default class Login extends React.Component {
  render() {
    return <div className="login absolute flex-center">
      <div className="container">
        <form action="#">
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" id="login-email" placeholder="Email" />
          </div>
        </form>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
          Login
        </button>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
          Signup
        </button>
      </div>
    </div>
  }
}