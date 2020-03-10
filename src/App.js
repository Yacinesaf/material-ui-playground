import React from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';




function App() {
  const loading = true
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div>
      <Card style={{ height: 400, width: 400 }}>
        {loading ?
          <Skeleton variant='text' animation="wave" height='100%' />
          : null}
      </Card>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Hover with a Popover.
  </Typography>
      <Popover
        id="mouse-over-popover"
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>I use Popover.</Typography>
      </Popover>
    </div>
  );
}

export default App;
