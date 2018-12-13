import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const PAGE_SIZE = 25;

export const withList = (Component, options = {}) => {
  return class List extends PureComponent {
    static propTypes = {
      list: PropTypes.array.isRequired
    };

    state = {
      currentPage: 1,
      totalPages: 1
    };

    updateTotalPages = () => {
      let totalPages = Math.ceil(this.props.list.length / PAGE_SIZE);

      if(totalPages < 1) {
        totalPages = 1;
      }



      this.setState({ totalPages });
    };

    componentDidMount() {
      this.updateTotalPages();
    }

    componentDidUpdate(prevProps) {
      if(prevProps.list !== this.props.list) {
        this.updateTotalPages();
      }
    }

    pagedList = () => {
      const { list } = this.props;
      const startIndex = (this.state.currentPage - 1) * PAGE_SIZE;
      const endIndex = this.state.currentPage * PAGE_SIZE;

      return list.slice(startIndex, endIndex);
    };

    previousPage = () => {
      this.setState({ currentPage: this.state.currentPage - 1 });
    };

    nextPage = () => {
      this.setState({ currentPage: this.state.currentPage + 1 });
    };

    render() {
      const { idKey, spread, dataKey = 'item' } = options;
      const { list } = this.props;
      const pagedList = this.pagedList();
  
      const itemProps = { ...this.props };
      delete itemProps[list];
  
      const componentsList = pagedList.map((item, i) => {
        let componentProps = { itemProps, [dataKey]: item };
        if(spread) {
          componentProps = { ...itemProps, ...item };
        }
        return <Component key={item[idKey] || i} {...componentProps} />;
      });
  
      return (
        <div>
          {componentsList}
          { this.state.currentPage > 1 && <button type="button" onClick={this.previousPage}>Previous</button> }
          <span>page {this.state.currentPage} of {this.state.totalPages}</span>
          { this.state.currentPage < this.state.totalPages && <button type="button" onClick={this.nextPage}>Next</button> }
        </div>
      );
    }
  };
};
