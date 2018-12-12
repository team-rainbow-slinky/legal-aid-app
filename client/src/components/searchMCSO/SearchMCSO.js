import React, { PureComponent } from 'react';
import Header from '../../containers/header/Header';
import PropTypes from 'prop-types';
import { withList } from '../withList';
import styles from '../app/App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import searchStyles from './SearchMCSO.css';

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

  changeStart = start => {
    this.setState({ start: start.toISOString() });
  };

  changeEnd = end => {
    this.setState({ end: end.toISOString() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetch(this.state);
    console.log('this.state', this.state);
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
        <div>
          <label>Date and Time Range:</label>
          <DatePicker
            selected={start}
            selectsStart
            startDate={start}
            endDate={end}
            onChange={this.changeStart}
            showTimeSelect
            // minDate={subDays(new Date(), 7)}
            maxDate={new Date()}
            placeholderText="Select a date range START within the last 7 days"
            dateFormat="MMMM d, yyyy h:mm aa"
          />

          <DatePicker
            selected={end}
            selectsEnd
            startDate={start}
            endDate={end}
            onChange={this.changeEnd}
            showTimeSelect
            maxDate={new Date()}
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="Select a date range END within the last 7 days"
          />
        </div>
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



