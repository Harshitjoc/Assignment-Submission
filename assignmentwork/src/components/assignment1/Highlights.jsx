// import * as React from 'react';
import '../../style/Style.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { highlights } from '../../data/Highlights'

const Highlights = () => {
    return (
        <div className='highlights-container'>

            <div style={{ display: 'flex', justifyContent: 'center', padding: '50px 50px' }}>
                <h1 style={{ boxShadow: '0 -10px 7px -7px grey inset', padding: '50px', width: '100%', textAlign: 'center' }}>Highlights about India</h1>
            </div>

            <Container sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {highlights.map((item, index) => (
                    <Card key={index} sx={{ display: 'flex', justifyContent: 'space-between', width: "40%", margin: '10px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {item.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {item.text}
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 150, marginRight: '10px' }}
                            image={item.image}
                            alt={item.title}
                        />
                    </Card>
                ))}

            </Container>

        </div>
    )
}

export default Highlights