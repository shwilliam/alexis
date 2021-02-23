import React from "react";
import Socials from "./socials";
import styles from "./footer.module.css";

export default () => {
  return (
    <div className={styles.footer}>
      <Socials />
      <a
        style={{
          textDecoration: "none",
          position: "absolute",
          bottom: "0.25rem",
          right: "2rem",
        }}
        href="/love-you"
      >
        ❤️
      </a>
    </div>
  );
};
