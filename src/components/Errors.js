import React, { Component } from 'react';

export default class Errors extends Component {
  uniqueKey(){
    return Math.random().toString(36).substring(2, 15)
  }

  render() {
    const { errors } = this.props;

    return (
      <ul className="errors">
        {errors.map(item => {
          return (
            item.messages.map((message) => {
              return (
                <li key={this.uniqueKey()}>
                  <strong>Error:</strong>
                  <span>{message}</span>
                  <i className='field'>{item.field}</i>
                </li>
              )
            })
          )
        })}
      </ul>
    );
  }
}
