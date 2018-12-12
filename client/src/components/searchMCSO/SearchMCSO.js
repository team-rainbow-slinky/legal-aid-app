import React, { PureComponent } from 'react';
import Header from '../../containers/header/Header';
import PropTypes from 'prop-types';
import { withList } from '../withList';
import styles from '../app/App.css';

class StateRecord extends PureComponent {
  static propTypes = {
    mcsoName: PropTypes.string.isRequired,
    mcsoBookingDate: PropTypes.string.isRequired,
    onSelection: PropTypes.func.isRequired
  };

  state = {
    selected: false
  };

  handleSelection = () => {
    this.setState({ selected: !this.state.selected }, () => {
      this.props.onSelection(this.state.selected);
    });
  };

  render() {
    return (
      <>
        <p>
          <input type="checkbox" value={this.state.selected} onChange={this.handleSelection}/>
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
  render() {
    console.log('this.props', this.props);
    return (
      <>
        <Header />
        <h1>Search MCSO Records</h1>
        <SearchMCSOForm fetch={this.props.fetch} />
        <h1>Results</h1>
        <StateRecords list={ this.props.list }/>
      </>
    );
  }
}


//components presentational, containers data
//should it be on change?


