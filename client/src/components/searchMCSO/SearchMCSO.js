import React, { PureComponent } from 'react';
import Header from '../../containers/header/Header';
import PropTypes from 'prop-types';
import { withList } from '../withList';

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
        <input type="checkbox" value={this.state.selected} onChange={this.handleSelection}/>
        <span>{this.props.mcsoName}</span>
        <span>{this.props.mcsoBookingDate}</span>
      </>
    );
  }
}

const StateRecords = withList(StateRecord, { spread: true });

class SearchMCSOForm extends PureComponent {
  state = {
    mcsoName: '',
    start: '',
    end: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // this.props.fetchSearchResults(this.state);
    console.log(this.state);
  };

  render() {
    const { mcsoName, start, end } = this.state;

    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>Name contains:</label>
          <input name="mcsoName" type="text" value={mcsoName} onChange={this.handleChange}/>
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

export default class SearchMCSO extends PureComponent {
  render() {
    console.log('this.props', this.props);
    return (
      <>
        <Header />
        <h1>Search MCSO Records</h1>
        <SearchMCSOForm />
        <StateRecords list={ [{ mcsoName: 'fake name', mcsoBookingDate: 'somefake date', onSelection: () => {} }] }/>
      </>
    );
  }
}


//components presentational, containers data
//should it be on change?



