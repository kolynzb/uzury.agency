import { getFeaturedPosts, getPost, getPostMetadata } from "@/sanity/lib/api";

type Props = {
  children: React.ReactNode;
};

type PostDetailsPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: PostDetailsPageProps) {
  const post = await getPostMetadata(params.slug);

  return {
    title: `${post.title}`,
    description: `${post.excerpt}`,
    keywords: [...post.tags],
    openGraph: {
      title: `${post.title}`,
      description: `${post.excerpt}`,
      type: "article",
      locale: "en_US",
      publishedTime: new Date(post._updatedAt).toISOString(),
      authors: [post.author.name],
      images: [{ url: post.mainImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.mainImage],
      creator: "@Kolynz_b",
    },
  };
}

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map(({ slug }) => slug);
}

function layout({ children }: Props) {
  return <>{children}</>;
}

export default layout;
