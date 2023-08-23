import React from "react";
import { BigSelector } from "@/ui/BigSelector/BigSelector";
import Image from "next/image";
import styles from "./Layout.module.css";
import Link from "next/link";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Image src="/Logo.png" width={80} height={18} alt="paw logo" />

      <header className={styles.header}>
        <h1>Hi!👋</h1>
        <p>Welcome to MacPaw Bootcamp 2023</p>
      </header>

      <section className={styles.section}>
        <h3>Lets start using The Cat API</h3>
        <div className={styles.selectors}>
          <Link href="/voting">
            <BigSelector
              src="/images/vote-table.png"
              alt="vote table"
              width={75}
              height={93}
              background="blue"
            >
              VOTING
            </BigSelector>
          </Link>

          <Link href="/breeds">
            <BigSelector
              src="/images/pet-breeds.png"
              alt="cat"
              width={88}
              height={123}
              background="green"
            >
              BREEDS
            </BigSelector>
          </Link>

          <Link href="/gallery">
            <BigSelector
              src="/images/images-search.png"
              alt="phone"
              width={84}
              height={142}
              background="yellow"
            >
              GALLERY
            </BigSelector>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Layout);
