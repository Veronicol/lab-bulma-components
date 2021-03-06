import React, { Component } from 'react';

export default class FormField extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="FormField">
        <div className="field" style={{width: '35rem'}}>
          <label className="label">{this.props.label}</label>
          <div className="control">
            <input className="input has-margin-bottom-20" type={this.props.type} placeholder={this.props.placeholder}/>
          </div>
        </div>
      </div>
    );
  }
}