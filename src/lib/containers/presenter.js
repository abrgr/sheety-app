import React, { Component } from 'react';
import { dataActions } from '../action-creators';
import { connect } from 'react-redux';
import { Sheet } from '../presenters';

class Presenter_ extends Component {
  componentDidMount() {
    const { dispatch, calculatedValues, isLoading } = this.props;
    if ( !isLoading && !calculatedValues ) {
      return dispatch(dataActions.load('example.json'));
    }
  }

  render() {
    const { calculatedValues, presenter, isLoading } = this.props;

    if ( isLoading || !calculatedValues || !presenter ) {
      return (
        <p>Loading...</p>
      );
    }

    if ( presenter.id === 'table' ) {
      return (
        <Sheet
          arrayDataQuery={presenter.arrayDataQuery} /> 
      );
    }

    // TODO
    return null;
  }
}

const Presenter = connect(
  ({ data }) => ({
    isLoading: data.isLoading,
    calculatedValues: data.calculatedValues,
    presenter: data.presenter
  })
)(Presenter_);

export default Presenter;
