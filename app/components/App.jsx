import React from 'react';

export default class App extends React.Component {
  render() {
    return <div>
      <div className="main-layout-transparent mdl-layout mdl-js-layout">
        <header className="mdl-layout__header mdl-layout__header--transparent">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">
              <a href="/">Pricelist</a>
            </span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="/#/login">Account</a>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Pricelist</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="/">Home</a>
            <a className="mdl-navigation__link" href="/#/login">Account</a>
          </nav>
        </div>
        <main className="mdl-layout__content">
          {this.props.children}
        </main>
      </div>
    </div>
  }
}