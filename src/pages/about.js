import { Box, Container, Grid, Typography, Button, Paper } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

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
                    <Grid item xs={12} lg={8}>
                        <Paper
                            sx={{
                                borderRadius: '12px',
                                border: '1px solid rgba(35, 48, 74, 0.6)',
                                background: 'rgba(26, 35, 53, 0.6)',
                                p: 3,
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
                                Focused on systems programming, computer graphics, and machine learning.
                                Currently exploring Rust, ray tracing, and deep learning.

                                This portfolio is built with Next.js + MUI — designed to be
                                lightweight, fast, and easy to maintain.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Paper
                            sx={{
                                borderRadius: '12px',
                                border: '1px solid rgba(35, 48, 74, 0.6)',
                                background: 'rgba(26, 35, 53, 0.6)',
                                p: 3,
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
                                Connect
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Link
                                    href="https://github.com/pmistry9597"
                                    target="_blank"
                                    rel="noopener"
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        color: '#22d3ee',
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        fontWeight: 400,
                                        fontFamily: '"Oswald", sans-serif',
                                        '&:hover': {
                                            color: '#d946ef',
                                            textDecoration: 'none',
                                        },
                                    }}
                                >
                                    GitHub
                                </Link>
                                <Link
                                    href="/preet_mistry_resume.pdf"
                                    target="_blank"
                                    rel="noopener"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        color: '#e8eaf2',
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        fontWeight: 400,
                                        fontFamily: '"Oswald", sans-serif',
                                        '&:hover': {
                                            color: '#22d3ee',
                                            textDecoration: 'none',
                                        },
                                    }}
                                >
                                    Resume
                                </Link>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}