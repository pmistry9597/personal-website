import { Box, Container, Grid, Typography, Button, Chip } from "@mui/material";
import Head from "next/head";
import ProjectCard from "@/components/project_card";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    const techSet = new Set();
    projects.forEach((p) => p.tech.forEach((t) => techSet.add(t[0])));
    const techList = Array.from(techSet);

    return (
        <>
            <Head>
                <title>Projects — Preet Mistry</title>
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
                        Projects
                    </Typography>
                    <Typography
                        sx={{
                            color: '#94a3b8',
                            fontSize: '1rem',
                        }}
                    >
                        A selection of work spanning my own personal endeavors.
                    </Typography>
                </Box>

                {/* Tech filter chips */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap', mb: 4 }}>
                    <Chip
                        label="All"
                        size="small"
                        sx={{
                            color: '#22d3ee',
                            borderColor: 'rgba(34, 211, 238, 0.4)',
                            '&:hover': { borderColor: '#22d3ee' },
                        }}
                    />
                    {techList.map((t) => (
                        <Chip
                            key={t}
                            label={t}
                            size="small"
                            sx={{
                                color: '#94a3b8',
                                borderColor: 'rgba(148, 163, 184, 0.3)',
                                '&:hover': { borderColor: 'rgba(148, 163, 184, 0.6)' },
                            }}
                        />
                    ))}
                </Box>

                <Grid container spacing={3}>
                    {projects.map((project) => (
                        <Grid key={project.slug} item xs={12} sm={6} md={4}>
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}