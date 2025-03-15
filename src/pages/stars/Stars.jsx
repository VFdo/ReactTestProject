import '../pages.css'
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function Stars() {
    return (
    <>
        <div id="stars-section" className='star-component'>
            <Typography variant="h1" m={10} color={'#ffffff'}>
                Stars Sparkling Bright!
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
                    Stars are massive, luminous spheres of plasma held together by gravity, primarily composed of hydrogen and helium. They generate energy through nuclear fusion, where hydrogen atoms fuse into helium under extreme temperature and pressure, releasing vast amounts of light and heat. This process creates the radiation that makes stars shine. A star's life cycle depends on its mass, evolving through stages such as main sequence, red giant, and either a white dwarf, neutron star, or black hole. Stars are fundamental to the universe, producing heavier elements through fusion and supernova explosions, which contribute to the formation of planets and life. Their brightness, color, and temperature are classified using the Hertzsprung-Russell diagram, which helps astronomers understand stellar evolution..
                    </Typography>
                </Paper>
            </Box>
            <Typography variant="h5" mt={5} color={'#ffffff'}>
                Preference:
            </Typography>
            <RadioGroup 
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                justifyContent:'center',
                fontSize:20,
                },
            }}
            >
                <FormControlLabel value="high" sx={{color:'#ffffff'}}  control={<Radio sx={{color:'#ffffff'}} />} label="High" />
                <FormControlLabel value="low" sx={{color:'#ffffff'}}  control={<Radio sx={{color:'#ffffff'}} />} label="Low" />
            </RadioGroup>
        </div>
    </>
    )
  }

  export default Stars