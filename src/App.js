import React, { Component } from 'react';
import axios from 'axios';
import Panel from "./components/panel";
import Article from "./components/article";
import './App.css';

// let Articles;





class App extends Component {

  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: []
  };

  apiCall = event => {
    const topic = "&q=" + this.state.topic;
    const beginDate = "&begin_date=" + this.state.startYear + "0101";
    const endDate = "&end_date=" + this.state.endYear + "0101";
    if(!this.state.startYear){
      alert("Must enter a start year.");
    }
    if(!this.state.endYear){
      alert("Must enter a end year.");
    }
    // event.preventDefault();
    axios.get(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7f9c42b7cddf4af3bb3ccda0b4efebf0" + topic + beginDate + endDate
    )
      .then(res => {
        console.log(res.data.response.docs);
        this.setState({ articles: res.data.response.docs })
        // const articles = res.data;
        // Articles[0].response.docs.forEach(() => { console.log("hi") });
        // articles.response.docs.forEach(() => { console.log("hi") });
        // Articles = articles.response.docs;
        // console.log(articles);
        // console.log(Articles);
      })
  }


//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   onTodoChange(value){
//     this.setState({
//          name: value
//     });
// }

  render() {
    return (
      <div id="wrapper">

        <div className="jumbotron">
          <h1>NYT React App</h1>
        </div>
        <Panel panelHeading="Article Search">

          <p>Topic:</p>

          <input value={this.state.topic}
            onChange={e => this.setState({ topic: e.target.value })} 
            className="form-control" 
            placeholder="Presidential Election"></input>

          <p>Start Year:</p>

          <input value={this.state.startYear}
            onChange={e => this.setState({ startYear: e.target.value })} 
            className="form-control" 
            placeholder="2000"></input>

          <p>End Year:</p>

          <input value={this.state.endYear}
            onChange={e => this.setState({ endYear: e.target.value })}  
            className="form-control" 
            placeholder="2018"></input>

          <button onClick={this.apiCall} className="btn btn-default" type="submit">Submit</button>
        </Panel>

        <Panel id="results" panelHeading="Results">
          {this.state.articles.map((article, index) => {
            return (
              <Article
                key={index}
                title={article.headline.main}
                url={article.web_url}
              ></Article>
            )
          })

          }

        </Panel>

      </div>
    );
  }
}

export default App;
