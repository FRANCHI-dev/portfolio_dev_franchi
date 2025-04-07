import Image from "next/image";
import styles from "@/app/accueil.module.css";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

export const metadata = {
  title: "DevCosmos – La Matrice des Développeurs et Codeurs",
  description:
    "Plongez dans DevCosmos, le portail futuriste des développeurs et codeurs. Outils, logiciels et équipements pour coder comme un élu dans la Matrice numérique",
  keywords:
    "accueil, DevCosmos, développement, programmation, outils, logiciels",
  robots: "index, follow",
  openGraph: {
    title: "Accueil - DevCosmos",
    description:
      "Découvrez un espace dédié aux développeurs et passionnés de code.",
    url: "https://ton-site.com/",
    type: "website",
    locale: "fr_FR",
    siteName: "DevCosmos",
  },
};

const Home = () => {
  return (
    <>
      <Header />
      <main id="main" className={styles.main}>
        <h1>Accueil</h1>

        <section id="presentation" className="sectionMain">
          <h2>Présentation</h2>
          <Image
            src="/images/images/equipement.webp"
            alt="Ceci est le logo de visual code"
            width={400}
            height={300}
            priority
            quality={60}
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 100px, 40vw"
            className={`${styles.images} ${styles.imagePresentation}`}
          />
          <p>
            {
              "Entre sites web maintenus, projets personnels et expérimentations 3D, je trace mon parcours avec méthode, curiosité et une envie constante d'apprendre. J’aime comprendre les systèmes, résoudre des problèmes et donner forme aux idées, que ce soit dans le numérique ou dans des contextes plus concrets. Inspiré par la science-fiction et attiré par la précision du monde industriel, je vois la 3D comme un pont entre imagination et conception. Ce portfolio témoigne de cette exploration, entre technologie, rigueur et créativité."
            }
          </p>
        </section>

        <section
          id="competences"
          className={`sectionMain ${styles.competences_Section}`}
        >
          <h2>Compétences</h2>

          <article>
            <h3>Langages</h3>
            <ul>
              <li>
                <Image
                  src="/images/logo/javascript-seeklogo.png"
                  alt="Logo JavaScript"
                  width={64}
                  height={64}
                  className={`${styles.images} ${styles.image_logo}`}
                />
              </li>
              <li>
                <Image
                  src="/images/logo/csslogo-final.png"
                  alt="Logo CSS"
                  width={64}
                  height={64}
                  className={`${styles.images} ${styles.image_logo}`}
                />
              </li>
              <li>
                <Image
                  src="/images/logo/Logo_HTML5.png"
                  alt="Logo HTML5"
                  width={64}
                  height={64}
                  className={`${styles.images} ${styles.image_logo}`}
                />
              </li>
            </ul>
          </article>

          <article>
            <h3>Frameworks</h3>
            <ul>
              <li>
                <Image
                  src="/images/logo/react-seeklogo.png"
                  alt="Logo React"
                  width={64}
                  height={64}
                  className={`${styles.images} ${styles.image_logo}`}
                />
              </li>
              <li>
                <Image
                  src="/images/logo/next-js-seeklogo.png"
                  alt="Logo Next.js"
                  width={64}
                  height={64}
                  className={`${styles.images} ${styles.image_logo}`}
                />
              </li>
              <li>
                <Image
                  src="/images/logo/symfony-removebg-preview.png"
                  alt="Logo Symfony"
                  width={64}
                  height={64}
                  className={`${styles.images} ${styles.image_logo}`}
                />
              </li>
            </ul>
          </article>

          <article>
            <h3>Outils</h3>
            <ul>
              <li>
                <Image
                  src="/images/logo/Figma Icon (Full-color).png"
                  alt="Logo Figma"
                  width={64}
                  height={64}
                  className={`${styles.images} ${styles.image_logo}`}
                />
              </li>
              <li>
                <Image
                  src="/images/logo/blender_logo_socket.png"
                  alt="Logo Blender"
                  width={64}
                  height={64}
                  className={`${styles.images} ${styles.image_logo}`}
                />
              </li>
            </ul>
          </article>
        </section>

        <section
          id="projets"
          className={`sectionMain ${styles.projetsSection}`}
        >
          <h2>Projets</h2>

          <section className={styles.projetsWrapper}>
            <article className={styles.projet1}>
              <h3>DevCosmos – La Matrice des Développeurs</h3>
              <Image
                src="/images/images/devcosmos1.png"
                alt="Aperçu du site DevCosmos avec un thème inspiré de la science-fiction"
                width={400}
                height={250}
                className={`${styles.images} ${styles.projetImage}`}
                loading="lazy"
              />
              <p>
                {
                  "DevCosmos est un site vitrine développé avec Next.js 15, destiné aux développeurs débutants et curieux. Il propose des outils, logiciels et conseils dans un univers de science-fiction. Optimisé pour le SEO, responsive et accessible, c’est la Matrice en version 1.0."
                }
              </p>
              <a
                href="https://devcosmos.franchidev.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Accéder au site vitrine DevCosmos"
                className={styles.projetLink}
              >
                Explorer DevCosmos
              </a>
            </article>

            <article className={styles.projet2}>
              <h3>DevCosmos – La Matrice des Développeurs</h3>
              <Image
                src="/images/images/projet2.png"
                alt="Illustration numérique d'une station lunaire futuriste, éclairée dans l'obscurité d'un fond noir"
                width={400}
                height={250}
                className={`${styles.images} ${styles.projetImage}`}
                loading="lazy"
              />
              <p>
                {
                  "Créés avec Fusion 360 pendant mes explorations numériques, ces modèles représentent une partie de mon apprentissage du design 3D technique. Chaque objet a été modélisé avec un mélange de rigueur, de caféine et d’imagination. L’idée ? Créer des pièces techniques propres, claires, compréhensibles… et prêtes à être partagées avec les autres bidouilleurs du futur. Ces fichiers sont visibles sur GrabCAD, pour tous les curieux."
                }
              </p>
              <a
                href="https://grabcad.com/henri.andre.franchi-1/models"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir mes projets Fusion 360 sur GrabCAD"
                className={styles.projetLink}
              >
                Explorer la version améliorée
              </a>
            </article>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
