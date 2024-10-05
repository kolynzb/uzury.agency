"use client";

import Layouts from "@/layouts";
import Link from "next/link";
import Image from "next/image";
import BlogSideBar from "../_components/blog-sidebar";
import {formatSanityDate} from "@/utils/datetime";
import PostReadTime from "@/components/post-read-time";
import {slugify} from "@/utils";
import {RichTextComponents} from "@/components/rich-text";
import { PortableText, toPlainText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";
import { notFound } from "next/navigation";
import { getCategories, getPost, getPosts } from "@/lib/sanity.api";
import React, { useEffect, useState } from "react";
import { IPostCategory, IPost } from "@/interfaces/sanity.interface";

type Props = {
  params: { slug: string };
};

const Publication = ({ params }: Props) => {
  const [post, setPost] = useState<IPost>();
  const [allPosts, setAllPosts] = useState<IPost[]>();
  const [allCategories, setAllCategories] = useState<IPostCategory[]>();

  useEffect(() => {
    getPost(params.slug)
        .then((postResult) => {
          setPost(postResult);
          console.log("body",postResult.body)
        })
        .catch((error) => {
          //TODO: Handle error if getPost fails

          if (error.status === 404) {
            notFound();
          }
        });

    getPosts()
        .then((allPostsResult) => {
          setAllPosts(allPostsResult);
        })
        .catch((error) => {
          // Handle error if getPosts fails
        });

    getCategories()
        .then((categoriesResult) => {
          setAllCategories(categoriesResult);
        })
        .catch((error) => {
          // Handle error if getCategories fails
        });
  }, [params.slug]);

  return (
    <Layouts>
      {/* banner */}
      <div className="mil-banner-sm-2 mil-deep-bg">
        <Image
          src={post?.mainImage!}
          alt={post?.title!}
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
{post?.categories[0].title}              </span>
              <h3 className="mil-up-font mil-mb-30">
                {post?.title}
              </h3>
              <ul className="mil-dot-list mil-post-info mil-text-sm mil-mb-60">
                <li className="mil-post-author">
                  <Image
                      src={post?.author.image!}
                      alt={post?.author.name!}
                      height={50}
                      width={50}
                      priority={true}
                  />
                  <span>post.author.name</span>
                </li>

                <li>{formatSanityDate(post?._createdAt!)}</li>
                <li><PostReadTime body={post?.body!}/></li>
              </ul>
              <div className="mil-divider mil-mb-60"/>
              <article className="post-details-content">
                {post?.body && (
                    <>
                      <RichTextComponent content={post?.body}/>
                    </>
                )}
              </article>
              <ul className="mil-tags mil-mb-60">
                <li className="mil-h6">Tags:&nbsp;&nbsp; </li>
                {post?.tags?.map((tag, index) => (
                    <li key={index}><Link href="/tag/[slug]" as={`/tag/${slugify(tag)}`}>
                      {tag}
                    </Link></li>
                ))}
              </ul>
              <div className="mil-divider mil-mb-60"/>
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
              <div className="mil-divider mil-mb-60"/>
              <h3 className="mil-mb-60">
                Comments - <span className="mil-accent">02</span>
              </h3>
              <ul className="mil-comments-frame">
                <li className="mil-comment">
                  <div className="mil-comment-top-panel">
                    <div className="mil-left">
                      <img src="img/faces/1.jpg" alt="user avatar"/>
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
                          <img src="img/faces/2.jpg" alt="user avatar"/>
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
                      <img src="img/faces/3.jpg" alt="user avatar"/>
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
              <div className="mil-divider mil-mb-60" id="reply"/>
              <h3 className="mil-mb-60">Leave a Reply</h3>
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Name</span>
                        <span className="mil-accent">Required</span>
                      </label>
                      <input type="text" placeholder="Enter Your Name Here"/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Email Adress</span>
                        <span className="mil-accent">Required</span>
                      </label>
                      <input type="email" placeholder="Your Email"/>
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
                      <input type="text" placeholder="mydomain.com"/>
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
            <BlogSideBar/>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Publication;

type RichTextComponentProps = {
  content: PortableTextBlock[];
};

const RichTextComponent = ({ content }: RichTextComponentProps) => {
  return <PortableText value={content} components={RichTextComponents} />;
};