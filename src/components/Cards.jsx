import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../styles/Cardsstyle.css'
function Cards() {
  return (
    <div className='page '>
         <Card className='card1' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5"  gutterBottom>
        Stay true to the web
        </Typography>
        <Typography sx={{ fontSize: 20  }} component="div">
        People expect web app pages to load fast. On the<br></br> server, React lets you start streaming HTML while<br></br> you’re still fetching data, progressively filling in the<br></br> remaining content before any JavaScript code loads.<br></br> On the client, React can use standard web APIs to keep<br></br> your UI responsive even in the middle of rendering.
        </Typography>
        
      </CardContent>
     
    </Card>
    <Card className='card2' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5"   gutterBottom>
        Go truly native
        </Typography>
        <Typography  sx={{ fontSize: 20  }} component="div">
        People expect native apps to look and feel like their<br></br> platform. React Native and Expo let you build apps<br></br> in React for Android, iOS, and <br></br>more. They look and feel native because their UIs are truly native. It’s not<br></br> a web view—your React components render real<br></br> Android and iOS views provided by the platform.
        </Typography>
        
      </CardContent>
     
    </Card>
    </div>
  )
}

export default Cards