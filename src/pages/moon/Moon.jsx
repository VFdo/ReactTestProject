import React, { useState, useEffect } from "react";
import '../pages.css'
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Moon1 from '../../assets/moon_1.jpg'
import Moon2 from '../../assets/moon_2.jpg'


function Moon() {

    const pics = { Moon1, Moon2 }
    const [selected, setSelected] = useState(pics.Moon1)

    return (
    <>
        <div className='moon-component' style={{ display:'flex', justifyContent:'center', pb:50}}>
            <Card sx={{ maxWidth: 450 }}>
                <CardMedia
                    sx={{ height: 450 }}
                    image={selected}
                    title="moon"
                />
                <CardContent>
                    {/* <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography> */}
                    <Typography variant="h6" color="text.secondary">
                    The moon, a distant, celestial companion, inspires the hope of shared adventures in the cosmos. It's as though it whispers secrets of far-off galaxies and uncharted realms, igniting a desire to explore the mysteries of the universe together. In its soft, romantic light, we find a cosmic canvas upon which our story is painted, an eternal masterpiece of togetherness and exploration.
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button onClick={() => selected == pics.Moon1 ? setSelected(pics.Moon2) : setSelected(pics.Moon1)} size="large">Change</Button>
                </CardActions>
                </Card>
        </div>
    </>
    )
  }
  
  export default Moon