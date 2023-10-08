// import '../../App.css'
import './Sky.css'
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

function Sky() {

    return (
    <>
    <Typography variant="h2" m={10}>
        Welcome to the SKY!
    </Typography>

    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          ml: 10,
          mr: 10,
          textAlign: 'center',
          p: 3
        },
      }}
    >
        <Paper> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Paper>
    </Box>
        
    </>
    )
  }
  
  export default Sky