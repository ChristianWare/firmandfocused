import LayoutWrapper from "../LayoutWrapper";
import styles from "./SolutionSection.module.css";
import Image from "next/image";
import Doctors from "../../public/images/doctors.png";

const SolutionSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Doctors} alt='image' fill className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.heading}>
              Introduce your Business as the Solution
            </h2>
            <p className={styles.copy}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              officia placeat ipsam tenetur, vero fugiat facere sequi, nisi
              dolore labore quis ullam architecto corrupti veritatis illo
              incidunt ducimus maiores obcaecati.
            </p>
            <br />
            <p className={styles.copy}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quo officiis assumenda ut deleniti corporis.
            </p>
            <br />
            <p className={styles.copy}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              officia placeat ipsam tenetur, vero fugiat facere sequi, nisi
              dolore labore quis ullam architecto corrupti veritatis illo
              incidunt ducimus maiores obcaecati.
            </p>
          </div>
        </div>
      </LayoutWrapper>
      <LayoutWrapper>
        <div className={styles.bottom}>
          <h2 className={styles.headingii}>So why work with us?</h2>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default SolutionSection;
