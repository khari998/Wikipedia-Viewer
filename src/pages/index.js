import React, { Component } from "react"
import axios from 'axios';
import Layout from "../components/layout"
import SEO from "../components/seo"
import RandomArticleButton from "../components/RandomArticleButton";
import WikiArticles from "../components/WikiArticles";
import SearchBox from "../components/SearchBox";

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      searchResults: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchInput: event.target.value,
    });
    
    
    axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${this.state.searchInput}&origin=*&format=json`)
      .then((wikiData) => {
        console.log(wikiData)
        if (wikiData.data.query.search.length > 0){
          this.setState({
            searchResults: wikiData.data.query.search,
          });
        }
        
      }).catch(e => console.error(e));
  }

  render() {
    return (
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <RandomArticleButton />
            <SearchBox
            handleFunc={this.handleChange} />
            <WikiArticles
            results={this.state.searchResults}/>
          </div>
          
        </Layout>
    )
  }
}
