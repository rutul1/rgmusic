import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import color from '@material-ui/core/colors/lightBlue';

import LeftPanel from './Home/LeftPanel';
const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 },
};
const Home = props => (
  <Grid
    container
    direction="row"
    justify="space-around"
    alignItems="flex-start"
  >
    <Grid item sm={4}>
      <LeftPanel style={style.Paper} />
    </Grid>
    <Grid item sm={4}>
      <Paper style={style.Paper}> Second item</Paper>
    </Grid>
    <Grid item sm={4}>
      <Paper style={style.Paper}> Third item</Paper>
    </Grid>
  </Grid>
);

export default Home;
