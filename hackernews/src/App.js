import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.gitlab.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: list,
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onClickMe = this.onClickMe.bind(this);
  }

  onClickMe() {
    console.log('hello');
    console.log(this);
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render() {
    const helloWorld = 'Welcome to the Road to learn React';
    var firstName = 'Beixi';
    var lastName = 'Hao';
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <h3>{firstName} {lastName}</h3>
        {this.state.list.map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                Dismiss
              </button>
            </span>
          </div>
        )}
        <button
          onClick={() => this.onClickMe()}
          type="button"
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default App;
