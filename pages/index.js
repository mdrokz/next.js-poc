import './css/index.css';
import Mountain from './assets/img/mountain.jpg';
import Coast from './assets/img/coast.jpg';
import Hero from './assets/img/hero.jpg';
import Island from './assets/img/island.jpg';
import Balloon from './assets/img/balloon.jpg';
import { Button } from "react-bulma-components";

export default function Index() {
    return (
        <>
    <header>
      <h2><a href="#">Website Logo</a></h2>
      <nav>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contacts</a></li>
      </nav>
    </header>


    <section className="hero">
      <div className="background-image" style={{ backgroundImage: `url(${Hero})` }}></div>
      <h1>Responsive Flexbox Template</h1>
      <h3>A freebie by Tutorialzine.</h3>
      <a href="http://tutorialzine.com/2016/06/freebie-landing-page-template-with-flexbox/" className="btn">Download it
      Here</a>
      <Button renderAs="a" href="http://tutorialzine.com/2016/06/freebie-landing-page-template-with-flexbox/" color="primary" size="medium" outlined>Download it Here</Button>
    </section>


    <section className="our-work">
      <h3 className="title">Some of our work</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae
      pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
      <hr></hr>
      <ul className="grid">
        <li className="small" style={{ backgroundImage: `url(${Balloon})` }}></li>
        <li className="large" style={{ backgroundImage: `url(${Island})` }}></li>
        <li className="large" style={{ backgroundImage: `url(${Coast})` }}></li>
        <li className="small" style={{ backgroundImage: `url(${Mountain})` }}></li>
      </ul>
    </section>


    <section className="features">
      <h3 className="title">Features and services</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae
      pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
      <hr></hr>

      <ul className="grid">
        <li>
          <i className="fa fa-camera-retro"></i>
          <h4>Photography</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae
          pulvinar velit.</p>
        </li>
        <li>
          <i className="fa fa-cubes"></i>
          <h4>Web Development</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae
          pulvinar velit.</p>
        </li>
        <li>
          <i className="fa fa-newspaper-o"></i>
          <h4>Content Editing</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae
          pulvinar velit.</p>
        </li>
      </ul>
    </section>


    <section className="reviews">
      <h3 className="title">What others say:</h3>

      <p className="quote">Mauris sit amet mauris a arcu eleifend ultricies eget ut dolor. className aptent taciti sociosqu ad
      litora torquent per conubia nostra, per inceptos himenaeos.</p>
      <p className="author">— Patrick Farrell</p>

      <p className="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum
      ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
      <p className="author">— George Smith</p>

      <p className="quote">Donec commodo dolor augue, vitae faucibus tortor tincidunt in. Aliquam vitae leo quis mi pulvinar
      ornare. Integer eu iaculis metus.</p>
      <p className="author">— Kevin Blake</p>


    </section>


    <section className="contact">
      <h3 className="title">Join our newsletter</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae
      pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
      <hr />

      <form>
        <input type="email" placeholder="Email" />
        <a href="#" className="btn">Subscribe now</a>
      </form>
    </section>

    <footer>
      <ul>
        <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
        <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
        <li><a href="#"><i className="fa fa-snapchat-square"></i></a></li>
        <li><a href="#"><i className="fa fa-pinterest-square"></i></a></li>
        <li><a href="#"><i className="fa fa-github-square" /></a></li>
      </ul>
      <p>Made by <a href=" http://tutorialzine.com/" target="_blank">tutorialzine</a>. images courtesy to <a
        href="http://unsplash.com/" target="_blank">unsplash</a>.</p>
      <p>No attribution required. you can remove this footer.</p>
    </footer>
  </>
    )
}