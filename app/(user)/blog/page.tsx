import PageBanner from "@/components/page-banner";
import Layouts from "@/layouts";
import Link from "next/link";
import BlogSidebar from "./_components/blog-sidebar";
import BlogCard from "./_components/card";
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import type { Metadata } from 'next/types'
import { COLLECTION_SLUG_POST } from "@/constants/slugs";
import { PageRange } from "@/components/page-range";

export const dynamic = 'force-static'
export const revalidate = 600

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Posts`,
  }
}


const Blog = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  const posts = await payload.find({
    collection: COLLECTION_SLUG_POST,
    depth: 1,
    limit: 3,
  })

  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Blog"} pageTitle={"Our Blog"} />
      {/* blog */}
      <section className="mil-blog mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            {/*Left Posts: START*/}
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              {/*ADD PAGINATION*/}
              {posts.docs?.map((result, index) => {
                if (typeof result === 'object' && result !== null) {

                  return (<BlogCard key={index} details={result} />)
                }
              })}


              <div className="mil-divider mil-mb-60" />

              <PageRange
                collection={COLLECTION_SLUG_POST}
                currentPage={posts.page}
                limit={12}
                totalDocs={posts.totalDocs}
              />
              {/*Pagination*/}
              {posts.totalPages > 1 && posts.page && (
                <div className="mil-pagination mil-hidden-arrows">
                  <div className="mil-slider-nav">
                    <div className="mil-slider-btn-prev mil-blog-prev">
                      <i className="fas fa-arrow-left" />
                      <span className="mil-h6">Prev</span>
                    </div>
                  </div>
                  <ul className="mil-pagination-numbers">
                    <li className="mil-active">
                      <a href="#.">1</a>
                    </li>
                    <li>
                      <a href="#.">2</a>
                    </li>
                    <li>
                      <a href="#.">3</a>
                    </li>
                  </ul>
                  <div className="mil-slider-nav">
                    <div className="mil-slider-btn-next mil-blog-next">
                      <span className="mil-h6">Next</span>
                      <i className="fas fa-arrow-right" />
                    </div>
                  </div>
                </div>

              )}
              {/* pagination */}
            </div>
            {/*Left Posts: END*/}
            <BlogSidebar />
          </div>
        </div>
      </section>
      {/* blog end */}
    </Layouts>
  );
};
export default Blog;

