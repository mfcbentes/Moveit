import { Profile } from "../components/Profile";
import { ExperienceBar } from "../components/ExperienceBar";
import { CompletedChallenge } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";

import styles from "../styles/pages/Home.module.css";
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenge />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
