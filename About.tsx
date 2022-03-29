
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About us</h2>

      {/* ABOUT PROFILE */}
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          </div>
        </div>

        {/* CARDS */}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <i className="about__icon" />
              <h5>Origins</h5>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eos non molestiae cum neque, sapiente iusto deleniti maxime officiis. Amet at quo sunt deserunt corporis nemo repudiandae quis distinctio voluptatibus.</small>
            </article>

            <article className="about__card">
              <i className="about__icon" />
              <h5>Story</h5>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi assumenda dignissimos maxime reprehenderit explicabo sit ad perferendis labore excepturi aut, nulla sed hic voluptates accusamus ipsam molestiae consectetur doloribus dolorum?</small>
            </article>
            <article className="about__card">
              <i className="about__icon" />
              <h5>Farm to cup</h5>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, neque quaerat sunt omnis ex quam voluptatibus deleniti quisquam impedit, saepe beatae aut perferendis sit laboriosam nam eligendi tenetur harum doloremque.</small>
            </article>
          </div>
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquam cupiditate doloremque nesciunt est eveniet velit, quae, ab et ipsum excepturi corrupti, soluta possimus eum molestiae ea asperiores necessitatibus assumenda?
          </p>
          <a href="#contact" className="btn btn primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>  )
}

export default About