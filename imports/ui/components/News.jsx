import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import moment from 'moment';

class NewsComponent extends Component {
  constructor(props) {
    super(props);

    this.props.getNews();
  }

  componentDidMount() {
    console.log(this.props);
  }

  renderNews() {
    return this.props.news.map(article => {
      return (
        <div key={article.title} className="article" style={{ display: 'inline-flex', marginBottom: '10px', position: 'relative' }}>
          <div className="img" style={{ float: 'left', marginRight: '0.5em' }}>
            <img
              src={article.urlToImage === null ? 'http://via.placeholder.com/240x160?text=No+Image' : article.urlToImage}
              style={{
                width: '240px',
                height: '160px',
                objectFit: 'cover'
              }}
            />
          </div>
          <div className="body" style={{  }}>
            <h3>{article.title}</h3>
            <h5>Author: {article.author}</h5>
            <span style={{ position: 'absolute', bottom: 0 }}>{moment(article.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return (
      <div id="news-component"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '650px'
        }}>
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
