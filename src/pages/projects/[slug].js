import { Box, Container, Grid, Typography, Button, Chip, Paper } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { projects } from "@/data/projects";
import SkillChip from "@/components/skill_chip";

export default function ProjectDetail({ project }) {
    if (!project) {
        return (
            <>
                <Head>
                    <title>Project Not Found — Preet Mistry</title>
                </Head>
                <Container maxWidth={false} sx={{ px: { md: 6 }, py: 0 }}>
                    <Box sx={{ pt: 12, pb: 12, textAlign: "center" }}>
                        <Typography
                            sx={{
                                fontFamily: '"Orbitron", sans-serif',
                                fontSize: "2rem",
                                fontWeight: 800,
                                letterSpacing: "0.1em",
                                color: "#e8eaf2",
                            }}
                        >
                            Project Not Found
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <Link href="/projects" passHref legacyBehavior>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        border: "1px solid rgba(34, 211, 238, 0.4)",
                                        color: "#22d3ee",
                                        textTransform: "none",
                                        fontWeight: 600,
                                        px: 4,
                                        py: 1.5,
                                    }}
                                >
                                    Back to Projects
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>{project.title} — Preet Mistry</title>
            </Head>
            <Container maxWidth={false} sx={{ px: { md: 6 }, py: 0 }}>
                {/* Project header */}
                <Box sx={{ mb: 6 }}>
                    <Box
                        sx={{
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #22d3ee, #d946ef)",
                            mb: 2,
                        }}
                    />
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                        <Typography
                            sx={{
                                fontFamily: '"Orbitron", sans-serif',
                                fontSize: "1.75rem",
                                fontWeight: 800,
                                letterSpacing: "0.1em",
                                color: "#e8eaf2",
                            }}
                        >
                            {project.title}
                        </Typography>
                        {project.status && (
                            <Chip
                                label={project.status}
                                size="small"
                                sx={{
                                    color: "#22d3ee",
                                    borderColor: "rgba(34, 211, 238, 0.4)",
                                    background: "rgba(34, 211, 238, 0.1)",
                                }}
                            />
                        )}
                    </Box>
                    <Typography
                        sx={{
                            color: "#94a3b8",
                            fontSize: "0.95rem",
                            lineHeight: 1.6,
                        }}
                    >
                        {project.summary}
                    </Typography>
                    <Box sx={{ mt: 3, display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {project.tech.map((skill, i) => (
                            <SkillChip key={i} item={skill} />
                        ))}
                    </Box>
                </Box>
                {/* Sections: Overview, Architecture, Planning, Demo */}
                <Grid container spacing={4}>
                    {project.sections.map((section) => (
                        <Grid key={section.id} item xs={12} lg={12}>
                            <Paper
                                sx={{
                                    borderRadius: "12px",
                                    border: "1px solid rgba(35, 48, 74, 0.6)",
                                    background: "rgba(26, 35, 53, 0.6)",
                                    p: 3,
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: '"Orbitron", sans-serif',
                                        fontSize: "1.25rem",
                                        fontWeight: 700,
                                        letterSpacing: "0.1em",
                                        color: "#22d3ee",
                                        mb: 2,
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {section.title}
                                </Typography>
                                {section.type === "text" && (
                                    <Typography
                                        sx={{
                                            color: "#e8eaf2",
                                            lineHeight: 1.8,
                                            whiteSpace: "pre-line",
                                            fontSize: "0.95rem",
                                        }}
                                    >
                                        {section.body}
                                    </Typography>
                                )}
                                {section.type === "links" && (
                                    <>
                                        <Typography
                                            sx={{
                                                color: "#94a3b8",
                                                fontSize: "0.95rem",
                                                mb: 2,
                                            }}
                                        >
                                            {section.body}
                                        </Typography>
                                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                                            {section.links.map((link, i) => (
                                                <Link
                                                    key={i}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener"
                                                    sx={{
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        gap: 1,
                                                        color: "#22d3ee",
                                                        textDecoration: "none",
                                                        fontSize: "0.9rem",
                                                        fontWeight: 600,
                                                        "&:hover": { textDecoration: "underline" },
                                                    }}
                                                >
                                                    {link.label}
                                                </Link>
                                            ))}
                                        </Box>
                                    </>
                                )}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Back link */}
                <Box sx={{ mt: 8, mb: 4, textAlign: "center" }}>
                    <Link href="/projects" passHref legacyBehavior>
                        <Button
                            variant="outlined"
                            sx={{
                                border: "1px solid rgba(34, 211, 238, 0.4)",
                                color: "#22d3ee",
                                textTransform: "none",
                                fontWeight: 600,
                                px: 4,
                                py: 1.5,
                                "&:hover": {
                                    background: "rgba(34, 211, 238, 0.1)",
                                    borderColor: "#22d3ee",
                                },
                            }}
                        >
                            Back to Projects
                        </Button>
                    </Link>
                </Box>
            </Container>
        </>
    );
}

export async function getStaticPaths() {
    const slugs = projects.map((p) => p.slug);
    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const slug = params.slug;
    const project = projects.find((p) => p.slug === slug);
    return {
        props: { project },
    };
}