// import '../../index.css'
import '../pages.css'
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

function Sky() {

    return (
    <>
        <div className='sky-component'>
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
                        The sky, a canvas of boundless dreams, stretches overhead in a grand tapestry of celestial wonders. It is a vaulted realm where the imagination takes flight on wings of inspiration. With its lofty embrace, the sky invites us to reach beyond earthly confines and ascend into the ethereal expanse of possibility. It is a realm where the sun kisses the heavens with hues of gold at dawn and bids farewell in a fiery embrace at dusk. The sky, where clouds gather in whispered conversations, their billowing forms like ancient sages sharing tales of bygone eras. As day turns to night, the sky unveils its sparkling jewels, stars that twinkle like the dreams of distant galaxies. In its lofty height, the sky is a reminder that the limitless horizon is but a breath away, where aspirations rise like phoenixes, and the human spirit soars in pursuit of the infinite.
                    </Typography>
                </Paper>
            </Box>
        </div>
    </>
    )
  }
  
  export default Sky