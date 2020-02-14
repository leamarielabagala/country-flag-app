import React from 'react';
import { generateFakeUsers } from './utils/faker';
import SearchBar from './components/SearchBar';
import FlagCard from './components/FlagCard';
import Spinner from './components/Spinner';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filtered: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const fakeUsers = generateFakeUsers();
      this.setState({ users: fakeUsers });
    }, 1000);
  }

  onChange = (value) => {
    if (value === '') {
      this.setState({ filtered: [], searchString: '' });
    } else {
      const filtered = this.state.users.filter((u) => {
        const email = u.email.toLowerCase();
        const search = value.toLowerCase();
        return email.startsWith(search) || email === search;
      })
      this.setState({ searchString: value, filtered });
    }
  }

  renderContent = (filtered) => {
    if (filtered.length === 0) {
      if (!this.state.searchString === undefined) {
        return <Spinner />;
      }
      return <h4>No Results!</h4>;
    }
    return filtered.map(user => <FlagCard {...user} />);
  }

  render() {
    const { filtered, searchString } = this.state;
    return (
      <div className="App">
        <SearchBar value={searchString} onChange={this.onChange} />
        { this.renderContent(filtered) }
      </div>
    );
  }
}

export default App;
