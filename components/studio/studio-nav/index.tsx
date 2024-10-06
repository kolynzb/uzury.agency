import Link from "next/link";
import { HiArrowUturnLeft } from "react-icons/hi2";
import styles from "./styles.module.scss";
import { NavbarProps } from "sanity";
import { getRandomQuote } from "@/services/quotes.service";

const StudioNav = async (props: NavbarProps) => {
  const randomQuote = await getRandomQuote();

  return (
    <div>
      <>
        <div className={styles.container}>
          <Link className={styles.back_to_site_link} href="/">
            <HiArrowUturnLeft className={styles.back_arrow} />
            Back To Site
          </Link>

          <div className={styles.nav_left}>
            <h1 className={styles.title}>&quot;{randomQuote?.content}&quot;</h1>
            <a
              target="_blank"
              className={styles.my_link}
              href={`https://quotable.io/quotes/${randomQuote?._id}`}
            >
              {randomQuote?.author}
            </a>
          </div>
        </div>
        {props.renderDefault(props)}
      </>
    </div>
  );
};

export default StudioNav;
