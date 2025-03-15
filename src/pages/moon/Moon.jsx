import React, { useState } from "react";
import '../pages.css'
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
        <div id="moon-section" className='moon-component' style={{ display:'flex', justifyContent:'center', pb:50}}>
            <Card sx={{ maxWidth: 450 }}>
                <CardMedia
                    sx={{ height: 450 }}
                    image={selected}
                    title="moon"
                />
                <CardContent>
                    <Typography variant="h6" color="text.secondary">
                    The Moon is Earth's only natural satellite and the fifth-largest in the Solar System. It formed approximately 4.5 billion years ago, likely from debris resulting from a collision between Earth and a Mars-sized body called Theia. 
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