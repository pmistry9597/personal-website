import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import ProjectCard from "@/components/project_card";
import { projects } from "@/data/projects";

const featured = projects.slice(0, 3);

export default function Home() {
    return (
        <>
            <Head>
                <title>Preet Mistry — Engineer</title>
                <meta name="description" content="Engineering portfolio of Preet Mistry — Rust, computer graphics, deep learning, and systems programming." />
            </Head>
            <Container maxWidth={false} sx={{ px: { md: 6 }, py: 0 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        py: { md: 20, sm: 12 },
                        minHeight: '60vh',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    <Box
                        sx={{
                            width: 56,
                            height: 56,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #22d3ee, #d946ef)',
                            mb: 3,
                        }}
                    />
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{
                            fontFamily: '"Orbitron", sans-serif',
                            fontSize: { md: '3rem', sm: '2rem' },
                            fontWeight: 800,
                            letterSpacing: '0.15em',
                            mb: 2,
                            lineHeight: 1.2,
                            background: 'linear-gradient(to right, #fff, #94a3b8)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Preet Mistry
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: { md: '1.125rem', sm: '1rem' },
                            color: '#94a3b8',
                            maxWidth: { md: 500, sm: '90%' },
                            mx: 'auto',
                            lineHeight: 1.7,
                            mb: 4,
                        }}
                    >
                        Software engineer focused on systems programming, computer
                        graphics, and machine learning. Currently exploring Rust,
                        ray tracing, and deep learning.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/projects" passHref legacyBehavior>
                            <Button
                                variant="outlined"
                                sx={{
                                    border: '1px solid #22d3ee',
                                    color: '#22d3ee',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    px: 3,
                                    py: 1.5,
                                    '&:hover': {
                                        background: '#22d3ee',
                                        color: '#0a0e17',
                                    },
                                }}
                            >
                                View Projects
                            </Button>
                        </Link>
                        <Link
                            href="/preet_mistry_resume.pdf"
                            target="_blank"
                            rel="noopener"
                            passHref
                            legacyBehavior
                        >
                            <Button
                                variant="outlined"
                                sx={{
                                    border: '1px solid rgba(148, 163, 184, 0.4)',
                                    color: '#e8eaf2',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    px: 3,
                                    py: 1.5,
                                    '&:hover': {
                                        borderColor: '#22d3ee',
                                        color: '#22d3ee',
                                    },
                                }}
                            >
                                Resume
                            </Button>
                        </Link>
                    </Box>
                </Box>

                {/* Featured Projects */}
                <Box sx={{ pt: 8, pb: 12, position: 'relative', zIndex: 1 }}>
                    <Box sx={{ mb: 4, textAlign: 'center' }}>
                        <Typography
                            sx={{
                                fontFamily: '"Orbitron", sans-serif',
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                letterSpacing: '0.1em',
                                color: '#e8eaf2',
                            }}
                        >
                            Featured Projects
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        {featured.map((project) => (
                            <Grid key={project.slug} item xs={12} sm={6} md={4}>
                                <ProjectCard project={project} />
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ mt: 6, textAlign: 'center' }}>
                        <Link href="/projects" passHref legacyBehavior>
                            <Button
                                variant="outlined"
                                sx={{
                                    border: '1px solid rgba(34, 211, 238, 0.4)',
                                    color: '#22d3ee',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    px: 4,
                                    py: 1.5,
                                    '&:hover': {
                                        background: 'rgba(34, 211, 238, 0.1)',
                                        borderColor: '#22d3ee',
                                    },
                                }}
                            >
                                See All Projects
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </>
    );
}