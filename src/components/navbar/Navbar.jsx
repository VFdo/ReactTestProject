import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Navbar() {
  return (
    <Box sx={{ width: '100%', backgroundColor:'#fadadd', p:1}}>
      <Stack direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}>
          <Box component="span" sx={{ p: 1, border: '1px dashed grey' }}>
          <Typography variant="h3">
              LOGO
          </Typography>
          </Box>
          <Button href="#text-buttons">Sky</Button> 
          <Button href="#text-buttons">Stars</Button>
          <Button href="#text-buttons">Moon</Button>
      </Stack>
    </Box>
  );
}