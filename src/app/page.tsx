import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Card from "./components/card";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Card />
    </main>
  );
}
