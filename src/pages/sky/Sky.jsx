// import '../../index.css'
import '../pages.css'
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

function Sky() {

    return (
    <>
        <div id="sky-section" className='sky-component'>
            <Typography variant="h1" m={10} color={'#ffffff'}>
                Sky is High!
            </Typography>
            <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                ml: 10,
                mr: 10,
                textAlign: 'center',
                fontSize:20,
                lineHeight:2,
                p: 3
                },
            }}
            >
                <Paper> 
                    <Typography variant="h6" color="text.secondary" sx={{lineHeight:2}}>
                    The sky is the portion of Earth's atmosphere and outer space visible from the surface, appearing as a vast dome due to atmospheric scattering of sunlight. During the day, the sky appears blue because shorter-wavelength blue light is scattered more efficiently by air molecules than longer-wavelength red light, a phenomenon known as Rayleigh scattering. At sunrise and sunset, the angle of the Sun's rays increases, causing more scattering of blue and green light, allowing red and orange hues to dominate. At night, in the absence of direct sunlight, the sky appears black, revealing celestial objects such as stars, planets, and the Moon. Atmospheric conditions, such as humidity, pollution, and cloud cover, further influence the sky's color and visibility, making it a dynamic and ever-changing aspect of Earth's environment.
                    </Typography>
                </Paper>
            </Box>
        </div>
    </>
    )
  }
  
  export default Sky