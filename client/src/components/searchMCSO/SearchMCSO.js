import React, { PureComponent } from 'react';
import Header from '../../containers/header/Header';
import PropTypes from 'prop-types';
import { withList } from '../withList';
import styles from '../app/App.css';

class StateRecord extends PureComponent {
  static propTypes = {
    mcsoName: PropTypes.string.isRequired,
    mcsoBookingDate: PropTypes.string.isRequired,
    swisId: PropTypes.string.isRequired,
    onSelection: PropTypes.func.isRequired
  };

  state = {
    selected: false
  };

  handleSelection = () => {
    this.setState({ selected: !this.state.selected }, () => {
      this.props.onSelection({ selected: this.state.selected, swisId: this.props.swisId });
    });
  };

  render() {
    return (
      <>
        <p>
          <input type="checkbox" className={styles.checkbox} value={this.state.selected} onChange={this.handleSelection}/>
          <span>{this.props.mcsoName}</span>
          <span>{this.props.mcsoBookingDate}</span>
        </p>
      </>
    );
  }
}

const StateRecords = withList(StateRecord, { spread: true });

class SearchMCSOForm extends PureComponent {
  state = {
    name: '',
    start: '',
    end: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetch(this.state);
    console.log(this.state);
  };

  render() {
    const { name, start, end } = this.state;
    return (
      <>
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <p>
          <label>Name contains:</label>
          <input name="name" type="text" value={name} onChange={this.handleChange}/>
        </p>
        <p>
          <label>Date and Time Range:</label>
          <input name="start" type="date" value={start} onChange={this.handleChange}/>
          <input name="end" type="date" value={end} onChange={this.handleChange}/>
        </p>
        <button type="submit">Search</button>
      </form>
      </>
    );
  }
}

export class SearchMCSO extends PureComponent {
  state = {
    recordsToAdd: []
  };

  onSelection = selection => {
    const { selected, swisId } = selection;
    
    if(selected) {
      const recordsToAdd = [...this.state.recordsToAdd];
      if(!recordsToAdd.includes(swisId)) recordsToAdd.push(swisId);
      this.setState({ recordsToAdd });
    }
    else {
      const recordsToAdd = this.state.recordsToAdd.filter(id => {
        return id !== swisId;
      });
      this.setState({ recordsToAdd });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('recordsToAdd', this.state);
  };

  render() {
    console.log('this.props', this.props);
    return (
      <>
        <Header />
        <h1>Search MCSO Records</h1>
        <SearchMCSOForm fetch={this.props.fetch} />
        <h1>Results</h1>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <StateRecords list={ this.props.list } onSelection={ this.onSelection } />
          <button type="submit">Add</button>
        </form>
      </>
    );
  }
}

//when post filter redux store, 
//components presentational, containers data
//should it be on change?



