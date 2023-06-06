import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";

export function StripesBackground() {
  return (
    <section className="demo-container flex-c bg-b">
      <div className={styles["progress-outer"]}>
        <div className={styles["progress-enter"]}>
          <div className={styles["progress-bg"]}></div>
        </div>
      </div>
    </section>
  );
}

