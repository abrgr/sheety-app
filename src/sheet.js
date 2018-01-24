import React, { Component } from 'react';
import Grid from 'react-data-grid';

import 'bootstrap/dist/css/bootstrap.css';

export default class Sheet extends Component {
  render() {
    const columns = [{key: "a", name: "A"}, {key: "b", name: "B"}];
    const rowGetter = (n) => ({a: n, b: n * 2});
    return (
      <Grid
        columns={columns}
        rowGetter={rowGetter}
        rowsCount={10}
        minHeight={100} />
    );
  }
}
