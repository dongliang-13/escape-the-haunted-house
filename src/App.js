import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Instruction from './Instruction';
import BlackScreen from './BlackScreen';
import Page1 from './Page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './Page4';
import Page5 from './Page5';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({
      currentPage: page
    });
  }

  render() {
    if (this.state.currentPage === "home") {
      return <Home changePage={this.changePage} />;
    } else if (this.state.currentPage === "instruction") {
      return <Instruction changePage={this.changePage} />;
    } else if (this.state.currentPage === "blackScreen"){
      return <BlackScreen changePage={this.changePage} />;
    } else if (this.state.currentPage === "page1"){
      return <Page1 changePage={this.changePage} />
    } else if (this.state.currentPage === "page2"){
      return <Page2 changePage={this.changePage} />
    } else if (this.state.currentPage === "page3"){
      return <Page3 changePage={this.changePage} />
    } else if (this.state.currentPage === "page4"){
      return <Page4 changePage={this.changePage} />
    } else if (this.state.currentPage === "page5"){
      return <Page5 changePage={this.changePage} />
    }
  }
}

export default App;
