import Logo from '../../assets/logo.png';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import CloudIcon from '@mui/icons-material/Cloud';
import StarIcon from '@mui/icons-material/Star';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Navbar() {
  return (

    <Box sx={{ width: '100%', backgroundColor:'#02101a', p:1}}>
      <Stack direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}>
          <Box
            component="img"
            sx={{
            width: 100,
            }}
            alt="Your logo."
            src={Logo}
        />
          <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: "#5A5A5A" }}/>
          <Button 
            style={{
              height:100,
              width:'100%',
              fontSize: "18px",
              color:'#ffffff'
            }}
          color='error' size ="large" href="#text-buttons" startIcon={<CloudIcon />}>Sky</Button> 
          <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: "#5A5A5A" }}/>
          <Button 
            style={{
              height:100,
              width:'100%',
              fontSize: "18px",
              color:'#ffffff'
            }}
          color='primary' size ="large" href="#text-buttons" startIcon={<StarIcon />}>Stars</Button>
          <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: "#5A5A5A" }}/>
          <Button 
            style={{
              height:100,
              width:'100%',
              fontSize: "18px",
              color:'#ffffff'
            }}
          color='primary' size ="large"href="#text-buttons" startIcon={<DarkModeIcon />}>Moon</Button>
      </Stack>
    </Box>
  );
}