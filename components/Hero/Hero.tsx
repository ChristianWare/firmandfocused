"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import animationData from "../../public/lottie/pills.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.wrapper}>
              <h1 className={styles.heading}>Making at home healthcare</h1>
              <div className={styles.words}>
                <span className={styles.span}>fantastic.</span>
                <span className={styles.span}>interesting.</span>
                <span className={styles.span}>awesome.</span>
                <span className={styles.span}>incredible.</span>
                <span className={styles.span}>fantastic.</span>
              </div>{" "}
            </div>
            <p className={styles.copy}>
              Remote care logistics and patient support with unified data
              management.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
