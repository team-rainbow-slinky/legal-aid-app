import React, { PureComponent } from 'react';
import Header from '../../containers/header/Header';
import SearchMCSOForm from './SearchMCSOForm';
import StateRecords from './StateRecordList';
import Footer from '../footer/Footer';
import styles from '../app/App.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './SearchMCSO.css';

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
    const recordsToAdd = this.state.recordsToAdd.map((swisId) => {
      return { ...this.props.list.find(record => record.swisId === swisId), org: this.props.org };
    });
    this.props.onSubmit(recordsToAdd)
      .then(() => {
        return this.props.history.push('/');
      });
  };

  render() {
    return (
      <>
        <Header />
        <h1>Search MCSO Records</h1>
        <SearchMCSOForm fetch={this.props.fetch} loading={this.props.loading}/>
        {this.props.list.length === 0 && this.props.searchComplete && <p className={styles.searchError}>No results found for your search</p>}
        {this.props.list.length > 0  && !this.props.loading &&
        <div>
          <h1>Results</h1>
          <form onSubmit={this.handleSubmit} className={styles.form}>
            <StateRecords list={ this.props.list } onSelection={ this.onSelection } />
            <br/>
            <button type="submit">Add</button>
          </form>
        </div>}
        <Footer />
      </>
    );
  }
}



