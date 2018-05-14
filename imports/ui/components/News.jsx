import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class NewsComponent extends Component {
  constructor(props) {
    super(props);

    this.props.getNews();
  }

  componentDidMount() {}

  renderNews() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h2>News Component</h2>
        {this.renderNews()}
      </div>
    );
  }
}

const mapStateToProps = ({ news }) => {
  return { news };
};

export default connect(mapStateToProps, actions)(NewsComponent);
