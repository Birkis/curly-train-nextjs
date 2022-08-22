import styles from  '../styles/aboutMe.module.css'


export default function AboutMe() {
    return (
        <div className={styles.aboutMe}>
        <div className={styles.profileImage}>
          <img
            src="/homepage/desktop/image-homepage-profile.jpg"
            alt=""
          />
        </div>
        <div className={styles.aboutMeText}>
          <h2 className="">About Me</h2>
          <p  className="body-1">
            I’m a junior front-end developer looking for a new role in an exciting
            company. I focus on writing accessible HTML, using modern CSS
            practices and writing clean JavaScript. When writing JavaScript code,
            I mostly use React, but I can adapt to whatever tools are required.
            I’m based in London, UK, but I’m happy working remotely and have
            experience in remote teams. When I’m not coding, you’ll find me
            outdoors. I love being out in nature whether that’s going for a walk,
            run or cycling. I’d love you to check out my work.
          </p>
          <button>Go to Portfolio</button>
        </div>
      </div>
    )

}