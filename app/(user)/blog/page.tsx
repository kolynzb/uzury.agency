import PageBanner from "@/components/page-banner";
import Layouts from "@/layouts";
import Link from "next/link";
import BlogSideBar from "@/app/(user)/blog/_components/blog-sidebar";
import BlogSidebar from "./_components/blog-sidebar";
import {getPosts} from "@/lib/sanity.api";
import BlogCard from "./_components/card";

const Blog = async () => {
  const posts = await getPosts();
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
              {posts.slice(0,3).map(post=>(<BlogCard key={post._id} details={post}/>))}
              <div className="mil-divider mil-mb-60" />
              {/*Pagination*/}
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
            {/* pagination */}
            </div>
            {/*Left Posts: END*/}
            <BlogSidebar/>
          </div>
        </div>
      </section>
      {/* blog end */}
    </Layouts>
  );
};
export default Blog;

