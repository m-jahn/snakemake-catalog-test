import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <figure>
          <img src="https://raw.githubusercontent.com/snakemake/snakemake.github.io/refs/heads/master/src/logo_light.svg" />
        </figure>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/howto/intro"
          >
            Read Introduction - 5min ⏱️
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/workflows/featured"
          >
            Explore workflows 🔭
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Reproducible, scalable workflows for data science."
    >
      <HomepageHeader />
      <div className={styles.horizontal_bar}></div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
