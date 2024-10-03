import Image from "next/image";
import styles from "./ProblemSection.module.css";
import Design from "../../public/icons/designii.svg";
import Reminders from "../../public/icons/seo.svg";
import Clock from "../../public/icons/clock.svg";
import Card from "../../public/icons/payment.svg";
import LayoutWrapper from "../LayoutWrapper";
import Ponder from "../../public/images/ponder.png";

const ProblemSection = () => {
  const data = [
    {
      icon: <Clock width={50} height={50} className={styles.icon} />,
      title: "Real-Time Availability",
      description:
        "Clients can view real-time availability and book appointments instantly.",
    },
    {
      icon: <Reminders width={50} height={50} className={styles.icon} />,
      title: "Automated Reminders",
      description:
        "Automated email and SMS reminders reduce no-shows and keep clients informed.",
    },
    {
      icon: <Design width={50} height={50} className={styles.icon} />,
      title: "Intuitive Interface",
      description:
        "A simple and intuitive interface makes it easy for clients to navigate and book services.",
    },
    {
      icon: <Card width={50} height={50} className={styles.icon} />,
      title: "Integrated Payment Systems",
      description:
        "Accept payments from any major credit card with our payment services.",
    },
  ];
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h1 className={styles.heading}>Problem Section</h1>
          <p className={styles.leftCopy}>
            Empower your business with efficient and user-friendly booking
            systems.
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.right}>
            {data.map((x, index) => (
              <div key={index} className={styles.card}>
                {x.icon}
                <h4 className={styles.title}>{x.title}</h4>
                <p className={styles.description}>{x.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image
                src={Ponder}
                alt=''
                layout='fill'
                objectFit='cover'
                className={styles.img}
              />
            </div>
          </div>
        </div>
        
      </LayoutWrapper>
    </section>
  );
};
export default ProblemSection;
