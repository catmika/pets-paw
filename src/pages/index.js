import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <main className="main">
      <Layout />
      <div className={styles.container}>
        <Image
          src="/images/girl-and-pet 1.png"
          width={530}
          height={558}
          alt="girl and cat"
        />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
