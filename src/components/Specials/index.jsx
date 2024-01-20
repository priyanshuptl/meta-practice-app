import greekSalad from 'assets/greek-salad.jpg';
import bruchetta from 'assets/bruchetta.svg';
import lemonDessert from 'assets/lemon-dessert.jpg';
import Card from 'components/Card';

import './styles.css';

const dishes = [
  {
    title: 'Greek salad',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    price: 12.99,
    imageSource: greekSalad,
  },
  {
    title: 'Bruchetta',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    price: 5.99,
    imageSource: bruchetta,
  },
  {
    title: 'Lemon Dessert',
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    price: '5.00',
    imageSource: lemonDessert,
  },
];

const Specials = () => {
  return (
    <div className='specials grid'>
      <div className='heading'>
        <h2>This weeks specials</h2>
        <button className='primary-button'>Online Menu</button>
      </div>
      <div className='cards'>
        {dishes.map((props) => (
          <Card key={props.title} {...props} />
        ))}
      </div>
    </div>
  );
};

export default Specials;
