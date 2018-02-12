import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dataActions } from '../action-creators';
import { PresenterRouter } from '../components';

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

    return (
      <PresenterRouter
        presenter={presenter} />
    );
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
