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
    //
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
          <div className="body">
            <a
              style={{ textDecoration: 'none', color: '#000' }} href={article.url} target="_blank">
              <h3>{article.title}</h3>
            </a>
            {article.author ? <h5 style={{ margin: '1em 0' }}> Author: {article.author}</h5> : <h5 style={{ margin: '1em 0' }}>Author: Unknown</h5>}
            <h5
              style={{
                position: 'absolute',
                bottom: 0
              }}>
              {moment(article.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}
            </h5>
          </div>
        </div>
      );
    });
  }

  render() {
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
