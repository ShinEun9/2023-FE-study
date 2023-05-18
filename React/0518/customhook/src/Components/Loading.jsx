import React from "react";
import loadingImage from "../images/loading.gif";
import styles from "./Loading.module.css";

export default function Loading() {
  return <img className={styles.imgLoading} src={loadingImage} alt="" />;
}
