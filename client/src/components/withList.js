import React from 'react';

export const withList = (Component, options = {}) => {
  return function List(props) {
    const { idKey, spread, dataKey = 'item' } = options;
    const { list } = props;

    const itemProps = { ...props };
    delete itemProps[list];

    const componentsList = list.map((item, i) => {
      let componentProps = { itemProps, [dataKey]: item };
      if(spread) {
        componentProps = { ...itemProps, ...item };
      }
      return <Component key={item[idKey] || i} {...componentProps} />;
    });

    return <div>{componentsList}</div>;
  };
};
