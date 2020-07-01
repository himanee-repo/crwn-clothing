import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

/* const TopicList = () => (
  <div>
    <h1>Topic Detail Page</h1>
  </div>
)

const TopicDetail = () => (
  <div>
    <h1>Topic Detail Page</h1>
  </div>
) */

function App() {
  return (
    <div>
      {/*  <HomePage /> */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
{/*         <Route exact path='/toipcs' component={TopicList} />
        <Route path='/topics/:topicId' component={TopicDetail} /> */}
      </Switch>
    </div>
  );
}

export default App;
