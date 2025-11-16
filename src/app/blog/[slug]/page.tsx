import { getAllPostsSlugs, getPostData } from "@/lib/posts";

export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return await getAllPostsSlugs();
}

export default async function Post({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { metadata, contentHtml } = await getPostData(slug);
  return <article dangerouslySetInnerHTML={{ __html: contentHtml }}></article>;
}
