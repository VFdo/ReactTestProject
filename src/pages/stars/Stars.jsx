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
        <div className='star-component'>
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
                        Beneath the velvet canopy of the night, stars become celestial jewels, adorning the heavens with their brilliance. They are like ethereal lanterns, casting their gentle glow upon the world, each one a beacon of hope, a spark of wonder. These celestial gems, sprinkled across the vast expanse of space, twinkle in a cosmic dance, as if sharing secrets with the universe. Their radiant light transcends time, bridging the gap between ancient history and the present moment. When we look up at the sky and see those stars sparkling bright, we are witnessing the echoes of the past, the promises of the future, and the enduring magic of the cosmos. It's a reminder that even in the darkest of nights, there is always a glimmer of beauty and a source of inspiration that can guide us on our journey through the mysteries of existence.
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