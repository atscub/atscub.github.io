export interface BlogPostParams {
  slug: string;
  contentHtml: string;
  metadata: matter.GrayMatterFile<string>;
}
