import Cta from './components/Cta';
import Experience from './components/Experience';
import Main from './components/Main'
import Services from './components/Services';
import Slider from './components/Slider';
import About from './components/About';
import Review from './components/Review';
import Carousel from './components/Carousel';

import img01 from './assets/IMG_0182.jpeg'
import img02 from './assets/IMG_0203.jpeg'
import img03 from './assets/IMG_0258.jpeg'
import img04 from './assets/IMG_0287.jpeg'
import img05 from './assets/IMG_0330.jpeg'
import img06 from './assets/IMG_9770.jpeg'
import Footer from './components/Footer';

const slides = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06
]

function App() {

  return (
    <div>
      <Main />
      <Experience />
      <Services />
      <Cta />
      <Slider />
      <About />
      <Review />
      <div className='w-full'>
        <Carousel autoSlide={true}>
          {slides.map((s) => (
            <img className='object-cover' src={s} />
          ))}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}

export default App;
