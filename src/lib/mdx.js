import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';

/**
 * Read and serialize an MDX file for use with MDXRemote
 * @param {string} contentPath - Relative path from project root (e.g., 'content/projects/circuit-builder.mdx')
 * @returns {Promise<Object>} - Serialized MDX source ready for MDXRemote
 */
export async function compileMDXFile(contentPath) {
  const fullPath = path.join(process.cwd(), contentPath);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`MDX file not found: ${fullPath}`);
  }
  
  const source = fs.readFileSync(fullPath, 'utf8');
  
  const mdxSource = await serialize(source, {
    parseFrontmatter: false,
    scope: {}, // Add empty scope to avoid issues
  });
  
  return mdxSource;
}

/**
 * Check if a project has MDX content
 * @param {Object} project - Project object from data
 * @returns {boolean}
 */
export function hasMDXContent(project) {
  return project.contentPath && typeof project.contentPath === 'string';
}