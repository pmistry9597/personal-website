import { Box, Button, Container, Paper, Typography, createTheme } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import backIm from '../../gr8/0.jpg';
import profboy from '../../profboy.jpg'
import styles from './index.module.css';
import Head from "next/head";
import { ThemeProvider } from "@emotion/react";
import SeparatedList from "@/components/separated_list";
// https://www.pexels.com/photo/view-of-countryside-under-evening-purple-sky-544268/

const myTheme = createTheme({
    typography: {
        posterheader: {
            fontFamily: '"Oswald", sans-serif',
            fontWeight: 'bold',
            fontSize: '60px',
            // color: '#c60327',
        },
        subheader: {
            fontFamily: '"Orbitron", sans-serif',
            // 'Oswald' 'Rokkitt', 'Orbitron'
            // fontWeight: 'bold',
            fontSize: '20px',
        },
        posterbody: {
            fontFamily: '"Edu TAS Beginner", cursive',
            fontSize: '20px',
        }
    },
    palette: {
        ochre: {
            main: '#ff4da6',
            light: '#f98bf8',
            dark: '#f98bf8',
            contrastText: '#fff',
        },
    },
});

export default function PersonalHome() {
    const [elev, setElev] = useState(10);
    
    return (
        <ThemeProvider theme={myTheme}>
        <div className={styles.main}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Orbitron:wght@400..900&family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Orbitron:wght@400..900&family=Oswald:wght@200..700&family=Rokkitt:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Edu+TAS+Beginner:wght@400..700&family=Orbitron:wght@400..900&family=Oswald:wght@200..700&family=Rokkitt:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
            </Head>
            <div className={styles.backImage}>
            <Image 
            src={backIm}
            width={0}
            height={0}  
            layout={'fill'} 
            // objectFit={'contain'}
            />
            </div>
            
            <div className={styles.contentcontain}>
            <div onMouseOver={() => {setElev(20)}} onMouseOut={() => {setElev(5)}} style={{width: '100%'}}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        m: 1,
                        width: 1,
                        // height: '40vh',
                        padding: '30px',
                        // overflow: 'hidden',
                        margin: '30px',
                        borderRadius: '10px',
                        opacity: 1,
                        },
                    }}
                    >
                        <Paper elevation={elev}>
                            <Box sx={{width: 1, height: 1, gap: '10px', position: 'relative',
                                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <div style={{padding: '70px', display: 'flex', gap: '10px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <div style={{
                                    width: '200px', height: '40%', position: 'absolute', left: 0, top: 0,
                                    borderLeft: '40px solid #0afce4', borderTop: '40px solid #0afce4', borderTopLeftRadius: '30px',
                                }
                                    }></div>
                                <div style={{
                                    width: '150px', height: '40%', position: 'absolute', right: 0, bottom: 0,
                                    borderRight: '40px solid #fc0fe4', borderBottom: '40px solid #fc0fe4', borderBottomRightRadius: '30px',
                                }
                                    }></div>
                                <Typography variant="posterheader" style={{textTransform: 'uppercase', textShadow: '#992 1px 0 10px', letterSpacing: '2px', wordSpacing: '2px'}}>
                                    I am Preet Mistry
                                    {/* Welcome to my Goon Cave */}
                                </Typography>
                                <Typography variant="subheader" style={{textTransform: 'uppercase'}}>
                                    <SeparatedList 
                                        items={
                                            ['Software Developer', 'Web Developer', 'Machine Learning Developer', 'Tinkerer']
                                        }
                                    />
                                </Typography>
                                <div style={
                                    {
                                        // margin: '20px',
                                        width: '300px', 
                                        height: '300px',
                                        minHeight: '300px', 
                                        borderRadius: '50%', 
                                        overflow: 'hidden'
                                    }
                                    }>
                                <Image 
                                    src={profboy}
                                    width={0}
                                    height={0}
                                    style={{ width: '100%', height: '100%' }} // optional
                                />
                                </div>
                                <Typography variant="posterbody" style={{width: '70%', gap: '0px', letterSpacing: '1px', border: 'solid pink 0px', borderRadius: '4px', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    I graduated as a computer engineer from the University of Toronto in 2024.

                                    {/* <p style={{margin: '5px'}}>I have a passion for building things while at the same time appreciating new knowledge.
                                    My creations can exist either in software, or have a more a physical manifestation.</p>

                                    <p style={{margin: '5px'}}>On my own time, I dragon boat, play the piano, and practice jiu-jitsu.</p> */}
                                </Typography>
                                <div style={{display: 'flex', gap: '40px', margin: '10px'}}>
                                    <Button variant="outlined" size="large" color="ochre">Find Out More</Button>
                                    <Button variant="contained" size="large" color="ochre">Contact Me!</Button>
                                </div>
                                </div>
                            </Box>
                        </Paper>
                    </Box>
            </div>
            <div style={{zIndex: 2, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0px'}}>
            <Container maxWidth={false} fixed style={{zIndex: 2, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0px'}}>
                <Box sx={{ background: 'rgba(70,70,70,1)', 
                        height: '100vh', 
                        width: 1,
                        borderRadius: '5px', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', }} >
                </Box>
            </Container>
            </div>
            </div>
        </div>
        </ThemeProvider>
        )
}