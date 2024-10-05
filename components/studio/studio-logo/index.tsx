import Image from "next/image";
import styles from "./styles.module.scss";
// import { LogoProps } from "sanity";

export default function StudioLogo() {
  return (
    <figure className={styles.container}>
      <Image
        className={styles.logo}
        width={25}
        height={25}
        src="https://res.cloudinary.com/kolynz-b/image/upload/v1728153061/Asset_8_4x_xembji.png"
        alt="logo"
      />
    </figure>
  )}

// };function StudioLogo(props: LogoProps) {
//   return (
//     <figure className={styles.container}>
//       <Image
//         className={styles.logo}
//         width={25}
//         height={25}
//         src="/logo/submark.png"
//         alt="logo"
//       />
//       {/* <>{props.renderDefault(props)}</> */}
//     </figure>
//   );
// };

// export default StudioLogo;
