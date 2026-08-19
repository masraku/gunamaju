import { company } from "@/data/company";
import * as LucideIcons from "lucide-react";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  const IconComponent = ({ name }) => {
    const Icon = LucideIcons[name];
    if (!Icon) return null;
    return <Icon size={40} />;
  };

  return (
    <section className={`${styles.about} section`} id="tentang">
      <div className="container">
        <div className="section-title">
          <span className="badge">Tentang Kami</span>
          <h2>
            Kenapa Memilih{" "}
            <span className={styles.highlightText}>{company.name}</span>?
          </h2>
          <p>{company.description}</p>
        </div>

        <div className={styles.featuresGrid}>
          {company.features.map((feature, index) => (
            <div className={styles.featureCard} key={index}>
              <div className={styles.featureIcon}>
                <IconComponent name={feature.icon} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
