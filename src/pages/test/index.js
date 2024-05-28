import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Paper } from "@mui/material";
import Typography from '@mui/material/Typography';
import styles from './index.module.css'
import { useState } from "react";

export default function PersonalHome() {
    const [cum, setCum] = useState(false);
    const onMouseOver = () => {
        setCum(true);
    };
    const onMouseOut = () => {
        setCum(false);
    };

    const [balls, setBalls] = useState(false);
    const onMouseOverb = () => {
        setBalls(true);
    };
    const onMouseOutb = () => {
        setBalls(false);
    };
    
    return <div>
        <Container maxWidth="80%" fixed style={{padding: '50px'}}>
            <Box sx={{ bgcolor: '#444', height: '100vh', padding: '30px' }} className={styles.container}>
                <Card sx={{ maxWidth: 345, maxHeight: 400 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/images/giraffe.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    borderRadius: '10px',
                    },
                }}
                >
                    <Paper elevation={balls ? 20 : 50}>
                        <Card sx={{ maxWidth: 345, maxHeight: 400 }}>
                        <CardActionArea onMouseOver={onMouseOverb} onMouseOut={onMouseOutb}>
                            <CardMedia
                            component="img"
                            height="140"
                            image="/images/giraffe.jpg"
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Paper>
                </Box>
                <Card sx={{ maxHeight: 400 }} className={`${styles.cbt} ${cum ? styles.notcbt : ''}`} style={{padding: '2px', backgroundColor: 'maroon'}}>
                    <div className={styles.inner}>
                    <CardActionArea onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/images/giraffe.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </div>
                </Card>
            </Box>
        </Container>
    </div>
}