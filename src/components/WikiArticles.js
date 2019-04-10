import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'


const SearchResult = ({ article }) => (
      <article>
        <h2>{article.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: `${article.snippet}...` }}></p>
        <p>
          <a href={`https://en.wikipedia.org/wiki/${article.title}`} target="_blank">Continue Reading...</a>
        </p>
      </article>
    );

const WikiArticles = ({ results }) => {
  const searchResults = results.map((article, index) => <SearchResult key={index} article={article} />);
  return (
    <div className="results">
      {searchResults}
    </div>
  );
}


export default (WikiArticles)