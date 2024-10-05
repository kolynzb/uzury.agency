import Image from "next/image";
import styles from "./styles.module.scss";
import { LogoProps } from "sanity";

const StudioLogo = (props: LogoProps) => {
  return (
    <figure className={styles.container}>
      <Image
        className={styles.logo}
        width={25}
        height={25}
        src="/logo/submark.png"
        alt="logo"
      />
      {/* <>{props.renderDefault(props)}</> */}
    </figure>
  );
};

export default StudioLogo;
