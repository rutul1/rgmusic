import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

// import { AppBar } from '@material-ui/core/AppBar';

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit">
        Your Music
      </Typography>
    </Toolbar>
  </AppBar>
);
