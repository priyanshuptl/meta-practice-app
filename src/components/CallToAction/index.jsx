import { Link } from 'react-router-dom';

import heroImage from 'assets/restaurant-food.jpg';

import './styles.css';

const CallToAction = () => {
  return (
    <section className='call-to-action grid'>
      <div className='left-panel'>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className='primary-button'>
          <Link to='booking'>Reserve a Table</Link>
        </button>
      </div>
      <img src={heroImage} alt='Food' className='hero-image' />
    </section>
  );
};

export default CallToAction;
