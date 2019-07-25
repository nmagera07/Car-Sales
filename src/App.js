import React, { useState } from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';

import { addFeature, removeFeature } from './store/actions'
import { dispatch } from 'rxjs/internal/observable/range';

const App = (props) => {
  console.log(props)
  const [state, setState] = useState({
    additionalPrice: 0,
    car: {
      price: 0,
      name: '',
      image:
        '',
      features: []
    },
    store: [
      { id: 1, name: '', price: 0 },
      { id: 2, name: '', price: 0 },
      { id: 3, name: '', price: 0 },
      { id: 4, name: '', price: 0 }
    ]
  })

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} addFeature={buyItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log()
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
}
}

export default connect(
  mapStateToProps,
  { addFeature, removeFeature}
)(App)
