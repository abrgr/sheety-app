import React, { Component } from 'react';
import HotTable from 'react-handsontable';
import presenter from '../presenter';

class Sheet_ extends Component {
  render() {
    const { arrayData } = this.props;
    return (
      <HotTable
        root="hot"
        data={arrayData}
        colHeaders={true}
        rowHeaders={true}
        stretchH="all" />
    );
  }
}

const Sheet = presenter({
  arrayDataDocs: 'An A1 reference to the data to show'
})(Sheet_);

export default Sheet;
