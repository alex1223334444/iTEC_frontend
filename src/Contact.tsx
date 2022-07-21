import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Contact.css"
import { borderRadius, maxWidth } from '@mui/system';
import { TextField } from '@mui/material';
import Background from "./background.jpg"

export default function Contact() {
  return (
    <div style={{ 
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: "absolute",
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh'}}>
    <Card id="card"sx={{ 
        maxWidth: 500 ,
        maxHeight: 1000, 
        marginLeft: 70, 
        marginTop: 10,  
        }}>
      <CardMedia sx={{borderRadius: 400 / 2}}
        component="img"
        image={require('./profile.png')}
        height="340"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Udrea Alexandru
        </Typography>
        <Typography variant="body2" color="text.secondary">
          E-mail: alexandruudrea9@gmail.com
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Github profile</Button>
        <Button size="small">LinkedIn profile</Button>
      </CardActions>
      <div id='form'>
      <h4>Leave an anonimous message here:</h4>
        <TextField style={{width: 450, marginLeft: 10, marginBottom:5}}></TextField>
        </div>
    </Card>
    </div>
  );
}