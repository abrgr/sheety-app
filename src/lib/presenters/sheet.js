import React, { Component } from 'react';
import HotTable from 'react-handsontable';
import { Map, List } from 'immutable';
import { CellRef, CellRefRange } from 'sheety-model';
import presenter from '../presenter';

class Sheet_ extends Component {
  render() {
    const { arrayData } = this.props;
    return (
      <HotTable
        root="hot"
        readOnly={true}
        data={arrayData}
        colHeaders={true}
        rowHeaders={true}
        afterChange={this.onAfterChange}
        cells={this.getCellConfig} />
    );
  }

  onAfterChange = (changes, sources) => {
    const { arrayDataQuery, setCellValues, sheet } = this.props;
    const rangeRef = CellRefRange.fromA1Ref(arrayDataQuery);
    const tabId = rangeRef.getIn(['start', 'tabId']);
    setCellValues(
      new Map(
        new List(changes).map(([rowIdx, colIdx, _, newVal]) => {
          const cellRef = new CellRef({
            tabId,
            rowIdx,
            colIdx
          });
          const cell = sheet.getCell(cellRef);
          const format = cell && cell.get('format');
          return [
            cellRef,
            format ? format.fromUserEnteredValue(newVal) : newVal
          ];
        })
      )
    );
  };

  getCellConfig = (row, col) => {
    const { arrayCells } = this.props;
    const cell = arrayCells[row][col];

    return {
      readOnly: cell && cell.get('isUserEditable') ? false : true
    };
  };
}

const Sheet = presenter({
  formatted: true,
  arrayDataDocs: 'An A1 reference to the data to show'
})(Sheet_);

export default Sheet;
