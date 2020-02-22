import React from "react";
import { Link } from "gatsby";

import styles from "./style.module.css";

const Header = ({ title = "Galeria de Imagens" }) => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <h1 className={styles.title}>{title}</h1>
      </Link>
    </div>
  );
};

export default Header;
