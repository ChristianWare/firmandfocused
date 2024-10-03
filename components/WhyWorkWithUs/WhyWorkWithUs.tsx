"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./WhyWorkWithUs.module.css";
import animationData from "../../public/lottie/doctor.json";
import Lottie from "lottie-react";

const WhyWorkWithUs = () => {
  return (
    <section className={styles.contianer}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <span className={styles.index}>01</span>
              <h3 className={styles.heading}>
                First, Impilo <span className={styles.span}>identifies</span>{" "}
                and <span className={styles.span}>qualifies</span> patients for
                the program.
              </h3>
              <p className={styles.copy}>
                Impilo utilizes their data engine to enroll and welcome patients
                into remote care programs utilizing their platform and digital
                Health tech specialists.
              </p>
            </div>
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
export default WhyWorkWithUs;
