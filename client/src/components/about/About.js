import React from 'react';
import styles from './About.css';
import Header from '../../containers/header/Header';
import Footer from '../footer/Footer';

export default function About() {
  return (
      <>
        <Header />
        <div className={styles.aboutHeading}>
          <h1 className={styles.header}>About Us</h1>
          <p>This app was developed at Alchemy Code Lab in December 2018 by Team Rainbow Slinky. If you would like to view the source code, it is available <a href="https://github.com/team-rainbow-slinky/legal-aid-app">on GitHub.</a></p>

        </div>
        <div className={styles.crewWrapper}>
          <div className={styles.crewItem}>
            <img src="https://avatars0.githubusercontent.com/u/40673521?s=460&v=4" className={styles.bioPic}></img>
            <h3>Claire Flanagan</h3>
            <p>Claire is a full-stack JavaScript developer with a passion for purpose-driven work. She has ten years of experience in community organizing and social justice non-profits.  In addition to her technical skills, her strengths include project management, strategic planning, team-building, and communication.</p>
            <div className={styles.linksWrapper}>
              <a href="https://github.com/claireflanagan" className={styles.socialLogo} ><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-outline-512.png" alt="git hub logo" className={styles.socialLogo}></img></a>
              <a href="https://www.linkedin.com/in/claire-o-flanagan/" className={styles.socialLogo}><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-linkedin-outline-512.png" alt="linked in logo" className={styles.socialLogo}></img></a>
            </div>
          </div>

          <div className={styles.crewItem}>
            <img src="https://avatars1.githubusercontent.com/u/30356325?s=460&v=4"  className={styles.bioPic}></img>
            <h3>Karen Painter</h3>
            Karen is a developer with 19 years of experience in building database applications for global businesses.  She recently transitioned from the insulated world of proprietary IBM systems to the diverse ecosystem of web development, and she's energized by the new challenges.  She was very excited to work with Claire and Alex on this worthwhile project, and hopes her future professional endeavors will be similarly rewarding.            <div className={styles.linksWrapper}>
              <a href="https://github.com/KLPainter" className={styles.socialLogo}><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-outline-512.png" alt="git hub logo" className={styles.socialLogo}></img></a>
              <a href="https://www.linkedin.com/in/karen-painter-pdx/" className={styles.socialLogo}><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-linkedin-outline-512.png" alt="linked in logo" className={styles.socialLogo}></img></a>

            </div>
          </div>

          <div className={styles.crewItem}>
            <img src="https://avatars2.githubusercontent.com/u/40784590?s=460&v=4"  className={styles.bioPic}></img>
            <h3>Alex Rankin</h3>
            <p>Alex is a full-stack developer who strives to build software that helps others. This app was his first major foray into the React ecosystem and he is looking forward to deepening his knowledge of it in the future. He brings strong interpersonal and customer service skills from his background in hospitality and management.</p>
            <div className={styles.linksWrapper}>
              <a href="https://github.com/acrankin" className={styles.socialLogo}><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-outline-512.png" alt="git hub logo" className={styles.socialLogo}></img></a>
              <a href="https://www.linkedin.com/in/alexcrankin/" className={styles.socialLogo}><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-linkedin-outline-512.png" alt="linked in logo" className={styles.socialLogo}></img></a>
            </div>
          </div>
        </div>
        <Footer/>
      </>
  );
}
