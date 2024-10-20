import Link from "next/link";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import Image from "next/image";
import configPromise from '@payload-config'
import { COLLECTION_SLUG_BLOG_CATEGORY, COLLECTION_SLUG_POST } from "@/constants/slugs";

const BlogSideBar = async ()=> {
    const payload = await getPayloadHMR({ config: configPromise })

  const categories = await payload.find({
    collection: COLLECTION_SLUG_BLOG_CATEGORY,
  });

  const posts = await payload.find({
    collection: COLLECTION_SLUG_POST,
    where: {
      featured: { equals: true },
    },
    limit: 3,
  });

  const tagsResult = await payload.find({
    collection: COLLECTION_SLUG_POST,
    limit: 0,
  });
  const tags = [...new Set(tagsResult.docs.flatMap(post => post.tags || []))].slice(0, 6);

    return (
    <aside className="col-lg-4 col-xl-3 mil-mb-120">
        <div className="mil-mb-60">
            <h5 className="mil-list-title mil-mb-30">About ITSulu</h5>
            <p className="mil-mb-30">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt.
            </p>
            <Link href="team-single" className="mil-post-sm mil-mb-15">
                <div className="mil-cover-frame">
                    <img src="img/faces/1.jpg" alt="cover" />
                </div>
                <div className="mil-description">
                    <h4 className="mil-font-3 mil-accent">Jane Meldrum</h4>
                    <p className="mil-text-sm">CEO &amp; Co-Founder</p>
                </div>
            </Link>
        </div>
        <div className="mil-divider mil-mb-60" />
        <form className="mil-sidebar-input-frame mil-mb-60">
            <input
                type="text"
                className="mil-sidebar-input"
                placeholder="Search here..."
            />
            <button type="submit">
                <i className="fas fa-search" />
            </button>
        </form>
        <div className="mil-divider mil-mb-60" />
        <div className="mil-mb-60">
            <h5 className="mil-list-title mil-mb-30">Recent Posts</h5>
            {/* 4 posts */}
            {posts.docs.slice(0,3).map(post => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="mil-post-sm mil-mb-15">
                    <div className="mil-cover-frame">
                        <Image
                            src={(post.featuredImage as Media).url!}
                            alt={(post.featuredImage as Media).alt!}
                            height={667}
                            width={1000}
                            priority={true}
                        />
                    </div>
                    <div className="mil-description">
                        <h6>{post.title}</h6>
                    </div>
                </Link>
            ))}
        </div>
        <div className="mil-divider mil-mb-60" />
        <div className="mil-mb-60">
            <h5 className="mil-list-title mil-mb-30">Categories</h5>
            <ul className="mil-hover-link-list">
                {/*5 categories*/}
                {
                    categories.docs.slice(0,4).map(category => (
                        <li key={category.id}>
                            <Link href={`/blog/category/${category.slug}`}>{category.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className="mil-divider mil-mb-60" />
        <div className="mil-mb-60">
            <h5 className="mil-list-title mil-mb-30">Tags</h5>
            <ul className="mil-tags">
                {tags.slice(0, 6).map(({tag})=>(
                    <li key={tag}>
                    <a href="#.">{tag}</a>
                    </li>
                    ))}
            </ul>
        </div>
        <div className="mil-divider mil-mb-60" />
        <div className="mil-mb-60">
            <h5 className="mil-list-title mil-mb-30">Newsletter</h5>
            <form className="mil-sidebar-input-frame">
                <input
                    type="text"
                    className="mil-sidebar-input"
                    placeholder="Your email address"
                />
                <button type="submit">
                    <i className="fas fa-arrow-right" />
                </button>
            </form>
        </div>
        <div className="mil-divider mil-mb-60" />
        <h5 className="mil-list-title mil-mb-30">Contact us</h5>
        <p className="mil-mb-30">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </p>
        <Link href="/contact" className="mil-link">
            <span>Send</span>
            <i className="fas fa-arrow-right" />
        </Link>
    </aside>
    );
}

export default BlogSideBar;