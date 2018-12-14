import React, { PureComponent } from 'react';
import styles from '../app/App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './SearchMCSO.css';


export default class SearchMCSOForm extends PureComponent {
  state = {
    name: '',
    start: null,
    end: null
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  changeStart = start => {
    this.setState({ start });
  };

  changeEnd = end => {
    this.setState({ end });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { start, end, name } = this.state;
    const startString = start && start.toISOString();
    const endString = end && end.toISOString();
    this.props.fetch({ name, start: startString, end: endString });
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
            maxDate={end || new Date()}
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
            minDate={start}
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="Select a date range END within the last 7 days"
          />
        </div>
        {this.props.loading  
          ? <button type="submit" disabled={true} className={styles.loadingButton}>Loading<span className={styles.loading}></span></button>
          : <button type="submit" disabled={false}>Search</button>
        }
      </form>
      </>
    );
  }
}

