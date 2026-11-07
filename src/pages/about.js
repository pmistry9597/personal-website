import { Box, Container, Grid, Typography, Button, Paper } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import OrbitalArt from '../components/orbital-art';

export default function About() {
    return (
        <>
            <Head>
                <title>About — Preet Mistry</title>
            </Head>
            <Container maxWidth={false} sx={{ px: { md: 6 }, py: 0 }}>
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography
                        sx={{
                            fontFamily: '"Orbitron", sans-serif',
                            fontSize: '2rem',
                            fontWeight: 800,
                            letterSpacing: '0.1em',
                            color: '#e8eaf2',
                            mb: 1,
                        }}
                    >
                        About
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid item xs={12} lg={9}>
                        <Grid container>
                            <Grid item>
                                <Paper
                                    sx={{
                                        borderRadius: '12px',
                                        border: '1px solid rgba(35, 48, 74, 0.6)',
                                        background: 'rgba(26, 35, 53, 0.6)',
                                        p: 5,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: '"Orbitron", sans-serif',
                                            fontSize: '1.25rem',
                                            fontWeight: 700,
                                            letterSpacing: '0.1em',
                                            color: '#22d3ee',
                                            mb: 2,
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        Background
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#e8eaf2',
                                            lineHeight: 1.8,
                                            fontSize: '0.95rem',
                                            whiteSpace: 'pre-line',
                                        }}
                                    >
                                        Computer engineering graduate from the University of Toronto (2024).
                                        I have diverse software experience in many areas such as full-stack, microservices, web dev, machine learning, and graphics. Currently exploring Rust and agentic AI.
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#e8eaf2',
                                            lineHeight: 1.8,
                                            fontSize: '0.95rem',
                                            whiteSpace: 'pre-line',
                                            mt: 1,
                                        }}
                                    >
                                        On my own time, I deeply enjoy running, playing the piano, and doing jiu-jitsu.
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#e8eaf2',
                                            lineHeight: 1.8,
                                            fontSize: '0.95rem',
                                            whiteSpace: 'pre-line',
                                            mt: 1,
                                        }}
                                    >
                                        This portfolio is built with Next.js + MUI — designed to be
                                        lightweight, fast, and easy to maintain. Cline + OpenRouter LLMs were used to help with this current overhaul.
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper
                                    sx={{
                                        borderRadius: '12px',
                                        border: '1px solid rgba(35, 48, 74, 0.6)',
                                        background: 'rgba(26, 35, 53, 0.6)',
                                        p: 5,
                                        mt: 2,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: '"Orbitron", sans-serif',
                                            fontSize: '1.25rem',
                                            fontWeight: 700,
                                            letterSpacing: '0.1em',
                                            color: '#22d3ee',
                                            mb: 2,
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        Why do I love engineering?
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#e8eaf2',
                                            lineHeight: 1.8,
                                            fontSize: '0.95rem',
                                            whiteSpace: 'pre-line',
                                        }}
                                    >
                                        Bold of me to say "engineering" in general, eh? Especially considering the fact that almost all of my experience and projects on this website are exclusively software. Truth be told, however, I've messed with electronics, mechanical systems, and, naturally, robotics in the past.
                                        As diverse as these areas are, I can't help but think there's something common among all of these.
                                    </Typography>
                                    
                                    <Typography
                                        sx={{
                                            fontFamily: '"Orbitron", sans-serif',
                                            fontSize: '1rem',
                                            fontWeight: 900,
                                            letterSpacing: '0.1em',
                                            color: '#22d3ee',
                                            mb: 2,
                                            mt: 2,
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        Technicalities?
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#e8eaf2',
                                            lineHeight: 1.8,
                                            fontSize: '0.95rem',
                                            whiteSpace: 'pre-line',
                                        }}
                                    >
                                        I was actually discussing this with a good friend of mine - he asked me what do I truly like about coding. With any form of engineering, there's the obvious forms of satisfaction:
                                        with software, I can leverage my skill in algorithms and mathematics and make some seriously good predictions about what my design will do, or how adjustments to a piece of software will change the outcome.
                                        On the other hand, in an area like mechanical systems, I can leverage my skill in dynamics and make some good predictions about how the system will react or change depending on what I do with it.
                                        We can see there's a trend emerging here and its often one of the first things people think of with engineering: using a bunch of smart, "technical" things and applying it to a problem.
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#e8eaf2',
                                            lineHeight: 1.8,
                                            fontSize: '0.95rem',
                                            whiteSpace: 'pre-line',
                                            mt: 1,
                                        }}
                                    >
                                        This certainly resonates with me on some level as I do like using skills that I've honed over the years. But I do feel like this reasoning is empty and outright based on ego if this reasoning exists in isolation.
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontFamily: '"Orbitron", sans-serif',
                                            fontSize: '1rem',
                                            fontWeight: 900,
                                            letterSpacing: '0.1em',
                                            color: '#22d3ee',
                                            mb: 2,
                                            mt: 2,
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        There's more to it
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#e8eaf2',
                                            lineHeight: 1.8,
                                            fontSize: '0.95rem',
                                            whiteSpace: 'pre-line',
                                        }}
                                    >
                                        Let's bring in something I love doing that isn't STEM: art and music. While I've allowed my visual art prowess to decline over the years, I managed to teach myself piano and express myself through that.
                                        I can create something new when I play the piano, something that isn't fully explainable with deterministic or rationalist laws. If we compare this to engineering, we can see in both cases, we're creating something new with different mediums.
                                        With art, the medium is a lot more free with far less constraints. There's less of a purpose and there's no real need for one. With engineering, there are certainly more constraints and more criteria to guide whatever you're making, and definitely a lot more consequence.
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#e8eaf2',
                                            lineHeight: 1.8,
                                            fontSize: '0.95rem',
                                            whiteSpace: 'pre-line',
                                            mt: 1,
                                        }}
                                    >
                                        But at the end of the day, there's something deeply satisfying and moving about creating something new, regardless of whatever the medium is. Even if many choices can be explained rationally, there's definitely something that cannot be explained so easily here.
                                    </Typography>
                                    
                                    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                                        <OrbitalArt size={150} />
                                    </Box>

                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Paper
                            sx={{
                                borderRadius: '12px',
                                border: '1px solid rgba(35, 48, 74, 0.6)',
                                background: 'rgba(26, 35, 53, 0.6)',
                                p: 3,
                                textAlign: 'center',
                                // mr: 7,
                                // ml: 7,
                                // gap: 2,
                            }}
                        >
                            {/* Profile photo */}
                            <Box sx={{ textAlign: 'center', mb: 3 }}>
                                <img
                                    src="/images/gradphoto.jpg"
                                    alt="Preet Mistry"
                                    style={{
                                        width: 120,
                                        height: 120,
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '3px solid rgba(34, 211, 238, 0.4)',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                                    }}
                                />
                            </Box>
                            <Typography
                                sx={{
                                    fontFamily: '"Orbitron", sans-serif',
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    color: '#22d3ee',
                                    mb: 2,
                                    textTransform: 'uppercase',
                                }}
                            >
                                Connect
                            </Typography>
                            {/* Social icons row */}
                            {/* <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}> */}
                        {/* Row 1: Social icons */}
                        <Box sx={{ display: 'flex', gap: 3, alignItems: "center", justifyContent: "center" }}>
                            <Link
                                href="https://github.com/pmistry9597"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    p: 1.5,
                                    borderRadius: 2,
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                    },
                                }}
                                aria-label="GitHub"
                            >
                                <img
                                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                    alt="GitHub"
                                    width={50}
                                    height={50}
                                    style={{ 
                                        filter: 'invert(1)',
                                        borderRadius: "50%",
                                    }}
                                />
                            </Link>
                            <Link
                                href="https://linkedin.com/in/preet-mistry"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    p: 1.5,
                                    borderRadius: 2,
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                    },
                                }}
                                aria-label="LinkedIn"
                            >
                                <img
                                    src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20140125013055"
                                    alt="LinkedIn"
                                    width={40}
                                    height={40}
                                    style={{ filter: 'grayscale(100%)' }}
                                />
                            </Link>
                        </Box>
                            {/* Resume link */}
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                mt={3}
                            >
                                <Link
                                    href="/preet_mistry_resume.pdf"
                                    target="_blank"
                                    rel="noopener"
                                    passHref
                                    legacyBehavior
                                >
                                    <Typography
                                        sx={{
                                            border: '1px solid rgba(148, 163, 184, 0.4)',
                                            color: '#e8eaf2',
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            fontFamily: '"Oswald", sans-serif',
                                            fontSize: '0.85rem',
                                            px: 5,
                                            py: 1.5,
                                            textAlign: 'center',
                                            borderRadius: 2,
                                            cursor: 'pointer',
                                            '&:hover': {
                                                borderColor: '#22d3ee',
                                                color: '#22d3ee',
                                            },
                                            width: "60%",
                                        }}
                                    >
                                        Resume
                                    </Typography>
                                </Link>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}