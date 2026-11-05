/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  reactStrictMode: true,
  images: { unoptimized: true },

  exportPathMap: async (defaultPathMap) => {
    const slugs = await import("./src/data/project-slugs.json", { assert: { type: "json" } });

    const projectRoutes = slugs.default.reduce((acc, slug) => {
      acc[`/projects/${slug}`] = {
        page: "/projects/[slug]",
        query: { slug },
      };
      return acc;
    }, {});

    return {
      ...defaultPathMap,
      "/projects": { page: "/projects" },
      "/about": { page: "/about" },
      ...projectRoutes,
    };
  },
};

export default nextConfig;
