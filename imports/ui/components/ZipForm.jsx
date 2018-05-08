import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ZipCode extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let zip = this.refs.zip.value;
    this.props.zip(zip);

    this.refs.zip.value = '';
  }

  componentDidMount() {}

  render() {
    return (
      <div id="form-overlay">
        <h2>Fetching location failed, please enter zipcode below</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            ref="zip"
            type="text"
            placeholder="Please Enter Zip-Code"
            required
          />
        </form>
      </div>
    );
  }
}
