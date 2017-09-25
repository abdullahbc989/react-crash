import React, { Component } from 'react';
import Projects form './Components/Projects';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                My App
                <Projects />
            </div>
        );
    }
}

export default App;