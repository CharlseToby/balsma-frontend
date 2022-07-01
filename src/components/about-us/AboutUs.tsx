import  "./AboutUs.scss"
import aboutUsImg from '../../assets/images/about-us.png'

const AboutUs = () => {


  return (
    <section className="about-us">
      <article className="about-us__content">
        <h2 className="about-us__title">about us</h2>
        <hr />
        <p className="about-us__text">She is a product manager who has seen numerous projects from inception to completion. I am presently at WhoGoHost as the product manager</p>
        <p className="about-us__text">Here are sime of the projects I've overseen so far in my career. Here are sime of the projects I've overseen so far in my career. Here are sime of the projects I've overseen so far in my career. </p>
      </article>
      <figure className="about-us__image">
        <img src={aboutUsImg} alt="about us" />
      </figure>
    </section>
  )
}

export default AboutUs