import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
// import experienceTimeline from './components/experiencetimeline'
import Experiencetimeline from './components/experiencetimeline'
import Interest from './components/interest'
import Blog from './components/blog'
import Projects from './components/projects'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
          <About></About>
          <Timeline></Timeline>
          <Experiencetimeline></Experiencetimeline>
          <Interest></Interest>
          {/* <Blog></Blog>
          <Projects></Projects> */}
        </div>
      	</div>
      </div>
    );
  }
}

export default App;
