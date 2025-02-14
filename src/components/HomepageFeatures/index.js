import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Reproducibility",
    Svg: require('@site/static/img/icon_reproducibility_grey.svg').default,
    description: (
      <>
        Snakemake workflows produce consistent results, making it easier to
        share and validate scientific findings.
      </>
    ),
  },
  {
    title: "Scalability",
    Svg: require('@site/static/img/icon_scalability_grey.svg').default,
    description: (
      <>
        Snakemake workflows can be executed on various computing environments,
        from local machines to high-performance computing clusters and cloud
        services.
      </>
    ),
  },
  {
    title: "Modularity",
    Svg: require('@site/static/img/icon_modularity_grey.svg').default,
    description: (
      <>
        Snakemake workflows are structured to allow easy customization and
        extension, enabling users to adapt them to their specific needs.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
