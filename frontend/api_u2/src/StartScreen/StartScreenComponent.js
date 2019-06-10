import React, { Component } from 'react'
import style from './StartScreenComponent.module.css';

export default class StartScreenComponent extends Component {
  render() {
    return (
      <header>
        <div className={style.sidebarWrapper}>
          <h2>Hello</h2>
          <nav>
            <ul>
              <li>
                <a href="#">
                Hem
                </a>
              </li>
              <li>
                <a href="#">
                Recensioner
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
