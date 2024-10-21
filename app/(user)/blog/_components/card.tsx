import Link from "next/link";
import {IPost} from "@/interfaces/sanity.interface";
import Image from "next/image";
import {formatSanityDate} from "@/utils/datetime";
import PostReadTime from "@/components/post-read-time";
import type { Media, Post } from '@/payload-types'
import { Fragment } from "react";

interface BlogCardProps {
    details:Post
}
const BlogCard = ({details}:BlogCardProps)=> {
    const { slug, categories,featuredImage, meta, title } = details || {}
    const { description, image: metaImage } = meta || {}
    const hasCategories = categories && Array.isArray(categories) && categories.length > 0
    const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space

    return (
        <Link href={`/blog/${details.slug}`} className="mil-card mil-mb-60">
            <figure className="mil-cover-frame">
                {/* <Media resource={featuredImage} size="360px"  /> */}
                <Image
                   src={(featuredImage as Media).url!}
                  alt={(featuredImage as Media).alt!}
                    height={667}
                    width={1000}
                    priority={true}
                />
            </figure>
            <div className="mil-description">
                <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">

                    { hasCategories && (
          <li className="uppercase text-sm mb-4">
            { hasCategories && (
              <span>
                {categories?.map((category, index) => {
                  if (typeof category === 'object') {
                    const { title: titleFromCategory } = category

                    const categoryTitle = titleFromCategory || 'Untitled category'

                    const isLast = index === categories.length - 1

                    return (
                      <Fragment key={index}>
                        {categoryTitle}
                        {!isLast && <Fragment>, &nbsp;</Fragment>}
                      </Fragment>
                    )
                  }

                  return null
                })}
              </span>
            )}
          </li>
        )}


                        <li>{formatSanityDate(details.createdAt)}</li>
                        <li>{details.readTime} min read</li>
                    </ul>
                    {/*Truncate to 41 chars*/}
                    {title && (  <h4>  {title}</h4>)}
                </div>
                <div className="mil-card-text">
                    {/*truncate to 400*/}
                    <p>
                        {details.excerpt}
                    </p>
                </div>
            </div>
        </Link>
    );
}
export default  BlogCard;