
import React from "react";
import './../styles/App.css';
import List from './list.js';

const App = () => {
  
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <div>
          <h2>Child Component</h2>
          <ul>
            <List words={'Learn React'}/>
            <List words={'Build React app'}/>
            <List words={'Deploy the React app'}/>
          </ul>
        </div>
    </div>
  )
}

export default App
