import React, { useState } from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';

import { addFeature } from './store/actions'
import { dispatch } from 'rxjs/internal/observable/range';

const App = (props) => {

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
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.carData.car} />
        <AddedFeatures car={props.carData.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.carData.store} />
        <Total car={props.carData.car} additionalPrice={props.carData.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log()
  return {
    carData: state.carData
}
}

export default connect(
  mapStateToProps,
  { addFeature }
)(App)
