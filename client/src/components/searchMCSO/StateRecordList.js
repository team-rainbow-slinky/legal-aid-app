import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withList } from '../withList';
import styles from '../app/App.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './SearchMCSO.css';

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
          <span className={styles.bold}>{this.props.mcsoName} -</span> <span>{this.props.mcsoBookingDate}</span>
        </p>
      </>
    );
  }
}

const StateRecords = withList(StateRecord, { spread: true, idKey: 'mcsoBookingDate' });
export default StateRecords;
