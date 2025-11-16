import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { BlogPostParams } from "@/types";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getAllPostsSlugs(): Promise<{ slug: string }[]> {
  return fs
    .readdirSync(postsDirectory)
    .map((fileName) => ({ slug: fileName.replace(/\.md$/, "") }));
}

export async function getPostData(slug: string): Promise<BlogPostParams> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    slug,
    contentHtml,
    metadata: matterResult.data,
  };
}
