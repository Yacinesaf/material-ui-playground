import React from 'react';
import './App.css';
import Card from '@material-ui/core/Card';

import Skeleton from '@material-ui/lab/Skeleton';




function App() {
  const loading = true

  return (
    <Card style={{height : 400, width : 400}}>
        {loading ?
            <Skeleton animation="wave" height='100%' />
        : null}
    </Card>
  );
}

export default App;
