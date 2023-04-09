import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";

export function TransparentBorder() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}></div>
    </div>
  );
}

