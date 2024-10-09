import {
  getCaseStudyMetadata,
  getFeaturedCaseStudies,
  getFeaturedPosts,
  getPost,
  getPostMetadata
} from "@/sanity/lib/api";
import {urlFor} from "@/sanity/lib/image";

type Props = {
  children: React.ReactNode;
};

type CaseStudyDetailsPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: CaseStudyDetailsPageProps) {
  const caseStudy = await getCaseStudyMetadata(params.slug);
const mainImage = urlFor(caseStudy.mainImage!).url();
  return {
    title: `${caseStudy.title}`,
    description: `${caseStudy.excerpt}`,
    keywords: [...caseStudy.tags,...caseStudy.seoKeywords],
    openGraph: {
      title: `${caseStudy.title}`,
      description: `${caseStudy.description}`,
      type: "article",
      locale: "en_US",
      publishedTime: new Date(caseStudy._updatedAt).toISOString(),
      images: [{ url: mainImage}],
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.title,
      description: caseStudy.description,
      images: [mainImage],
      creator: "@Kolynz_b", // TODO: Replace with uzury twitter handle
    },
  };
}

export async function generateStaticParams() {
  const caseStudies = await getFeaturedCaseStudies();
  return caseStudies.map(({ slug }) => slug);
}

function layout({ children }: Props) {
  return <>{children}</>;
}

export default layout;
