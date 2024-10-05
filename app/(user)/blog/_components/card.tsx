import Link from "next/link";
import {IPost} from "@/interfaces/sanity.interface";
import Image from "next/image";
import {formatSanityDate} from "@/utils/datetime";
import PostReadTime from "@/components/post-read-time";

interface BlogCardProps {
    details:IPost
}
const BlogCard = ({details}:BlogCardProps)=> {
    return (
        <Link href={`/blog/${details.slug}`} className="mil-card mil-mb-60">
            <figure className="mil-cover-frame">
                {/*TODO: ADD PROPER ALT STATEMENT*/}
                <Image
                    src={details.mainImage}
                    alt={details.title}
                    height={667}
                    width={1000}
                    priority={true}
                />
            </figure>
            <div className="mil-description">
                <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                        <li>{details.categories[0].title}</li>
                        <li>{formatSanityDate(details._createdAt)}</li>
                        <li><PostReadTime body={details.body}/></li>
                    </ul>
                    {/*Truncate to 41 chars*/}
                    <h4>{details.title}</h4>
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