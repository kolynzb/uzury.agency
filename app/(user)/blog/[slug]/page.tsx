/* eslint-disable @next/next/no-img-element */

import Layouts from "@/layouts";
import Link from "next/link";
import Image from "next/image";
import BlogSideBar from "../_components/blog-sidebar";
import { formatSanityDate } from "@/utils/datetime";
import { generateMeta } from "@/payload/utils/generate-metadata";
import { Metadata } from "next";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { draftMode } from "next/headers";
import React, { cache } from 'react'
import configPromise from '@payload-config'
import { PayloadRedirects } from "@/payload/components/payload-redirects";
import RichText from "@/payload/components/rich-text";
import { Media , Post, User } from "@/payload-types";
import { slugify } from "@/utils";


type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
  })

  return posts.docs?.map(({ slug }) => slug)
}


const Publication = async ({ params: { slug = '' } }: Props) => {
  const url = '/posts/' + slug
  const post = await queryPostBySlug({ slug })

  if (!post) return <PayloadRedirects url={url} />

  const { categories, featuredImage, meta: { image: metaImage } = {}, populatedAuthors, publishedAt, title } = post

  return (
    <Layouts>
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />
      {/* banner */}
      <div className="mil-banner-sm-2 mil-deep-bg">
      {/* {metaImage && typeof metaImage !== 'string' && (
          <Media fill imgClassName="mil-background-image" resource={metaImage} />
        )} */}
        <Image
          src={(featuredImage as Media).url!}
          alt={(featuredImage as Media).alt!}
          className="mil-background-image"
          height={667}
          width={1000}
          style={{ objectPosition: "center" }}
        />
        <div className="mil-overlay" />
      </div>
      {/* banner end */}
      {/* blog */}
      <section className="mil-blog mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              <span className="mil-suptitle mil-accent mil-mb-30">
              {categories?.map((category, index) => {
              if (typeof category === 'object' && category !== null) {
                const { title: categoryTitle } = category

                const titleToUse = categoryTitle || 'Untitled category'

                const isLast = index === categories.length - 1

                return (
                  <React.Fragment key={index}>
                    {titleToUse}
                    {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                  </React.Fragment>
                )
              }
              return null
            })}    
              </span>
              <h3 className="mil-up-font mil-mb-30">
                {title}
              </h3>
              <ul className="mil-dot-list mil-post-info mil-text-sm mil-mb-60">
                <li className="mil-post-author">
                  <Image
                    src={((post.authors?.[0] as User).avatar as Media).url!}
                    alt={((post.authors?.[0] as User).avatar as Media).alt!}
                    height={50}
                    width={50}
                    priority={true}
                  />
                  <span>{(post.authors?.[0] as User).name}</span>
                </li>

                <li>{formatSanityDate(post?.createdAt) ?? 'Unknown Date'}</li>
                <li>{post?.readTime ?? 'Unknown'} minutes</li>
              </ul>
              <div className="mil-divider mil-mb-60" />
              <article className="post-details-content">
                <RichText
                  className="lg:grid lg:grid-cols-subgrid col-start-1 col-span-3 grid-rows-[1fr]"
                  content={post.content}
                  enableGutter={false}
                />
              </article>
              <ul className="mil-tags mil-mb-60">
                <li className="mil-h6">Tags:&nbsp;&nbsp; </li>
                {post?.tags?.map(({tag}, index) => (
                  <li key={index}><Link href="/tag/[slug]" as={`/tag/${slugify(tag)}`}>
                    {tag}
                  </Link></li>
                ))}
              </ul>
              <div className="mil-divider mil-mb-60" />
              <h5 className="mil-mb-30">Was this article helpful?</h5>
              <a
                href="#."
                className="mil-button mil-border mil-button-sm mil-gray-border mil-mb-15"
              >
                <span>Yes, it was fine!</span>
              </a>
              <a
                href="#."
                className="mil-button mil-border mil-button-sm mil-gray-border mil-mb-60"
              >
                <span>No, or there was something off</span>
              </a>
              <div className="mil-divider mil-mb-60" />
              <h3 className="mil-mb-60">
                Comments - <span className="mil-accent">02</span>
              </h3>
              <ul className="mil-comments-frame">
                <li className="mil-comment">
                  <div className="mil-comment-top-panel">
                    <div className="mil-left">
                      <img src="img/faces/1.jpg" alt="user avatar" />
                      <div>
                        <h5>Ponnappa Priya</h5>
                        <p className="mil-text-sm">September 23, 2020</p>
                      </div>
                    </div>
                    <a
                      href="#reply"
                      className="mil-button mil-border mil-button-xs mil-gray-border mil-mb-15"
                    >
                      <span>Reply</span>
                    </a>
                  </div>
                  <p className="mil-comment-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim minus rerum officiis sit quos non, nulla alias labore
                    sapiente quasi ut exercitationem aperiam beatae magni sunt
                    corporis ducimus? Ipsum, asperiores.
                  </p>
                  <ul className="mil-sub-comments">
                    <li className="mil-comment">
                      <div className="mil-comment-top-panel">
                        <div className="mil-left">
                          <img src="img/faces/2.jpg" alt="user avatar" />
                          <div>
                            <h5>Tamzyn French</h5>
                            <p className="mil-text-sm">September 23, 2020</p>
                          </div>
                        </div>
                        <a
                          href="#reply"
                          className="mil-button mil-border mil-button-xs mil-gray-border mil-mb-15"
                        >
                          <span>Reply</span>
                        </a>
                      </div>
                      <p className="mil-comment-text">
                        We realised we really wanted to catch a glimpse of what
                        went on behind the scenes of the companies we looked up
                        to.
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="mil-comment">
                  <div className="mil-comment-top-panel">
                    <div className="mil-left">
                      <img src="img/faces/3.jpg" alt="user avatar" />
                      <div>
                        <h5>Paul Freeman</h5>
                        <p className="mil-text-sm">September 23, 2020</p>
                      </div>
                    </div>
                    <a
                      href="#reply"
                      className="mil-button mil-border mil-button-xs mil-gray-border mil-mb-15"
                    >
                      <span>Reply</span>
                    </a>
                  </div>
                  <p className="mil-comment-text">
                    Dolor sit amet, consectetur adipisicing elit. Veritatis
                    minus at aliquid dolorem quis, alias impedit eveniet, omnis
                    quisquam eaque, maxime aliquam repudiandae laborum mollitia
                    iure vel, ab illum voluptatem. Possimus eaque magnam facere
                    voluptatum ipsam optio, porro qui veritatis nostrum itaque,
                    tempora, vitae quam aliquid voluptate amet! Pariatur libero
                    blanditiis nesciunt quibusdam itaque voluptates iure tempore
                    facilis dolorem aut.
                  </p>
                </li>
              </ul>
              <div className="mil-divider mil-mb-60" id="reply" />
              <h3 className="mil-mb-60">Leave a Reply</h3>
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Name</span>
                        <span className="mil-accent">Required</span>
                      </label>
                      <input type="text" placeholder="Enter Your Name Here" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Email Adress</span>
                        <span className="mil-accent">Required</span>
                      </label>
                      <input type="email" placeholder="Your Email" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Message</span>
                        <span className="mil-accent">Required</span>
                      </label>
                      <textarea
                        placeholder="Your Message"
                        className="mil-shortened"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mil-input-frame mil-dark-input mil-mb-60">
                      <label className="mil-h6">
                        <span>Website</span>
                        <span className="mil-dark-soft">Optional</span>
                      </label>
                      <input type="text" placeholder="mydomain.com" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mil-checbox-frame mil-dark-input mil-mb-60">
                      <input
                        className="mil-checkbox"
                        id="checkbox-1"
                        type="checkbox"
                        defaultValue="value"
                      />
                      <label htmlFor="checkbox-1" className="mil-text-sm">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                    <button className="mil-button mil-border mil-fw">
                      <span>Post Comment</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <BlogSideBar />
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Publication;

const queryPostBySlug = cache(async ({ slug }: { slug: string }): Promise<Post | null> => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayloadHMR({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: true,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = (await queryPostBySlug({ slug: params.slug }))!;
  return generateMeta({ doc: post })
  // return {
  //   title: `${post.title}`,
  //   description: `${post.excerpt}`,
  //   keywords: [...post.tags],
  //   openGraph: {
  //     title: `${post.title}`,
  //     description: `${post.excerpt}`,
  //     type: "article",
  //     locale: "en_US",
  //     publishedTime: new Date(post._updatedAt).toISOString(),
  //     authors: [post.author.name],
  //     images: [{ url: post.mainImage }],
  //   },
  //   twitter: {
  //     card: "summary_large_image",
  //     title: post.title,
  //     description: post.excerpt,
  //     images: [post.mainImage],
  //     creator: "@Kolynz_b",
  //   },
  // };
}

