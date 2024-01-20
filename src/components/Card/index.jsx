import { Link } from 'react-router-dom';
import deliveryIcon from 'assets/delivery-icon.svg';

import './styles.css';

const Card = ({
  title = '',
  description = '',
  price = '',
  imageSource = '',
}) => {
  return (
    <div className='card'>
      <img src={imageSource} alt={title} />
      <div className='heading'>
        <h5 className='title'>{title}</h5>
        <h5 className='price'>${price}</h5>
      </div>
      <p className='description text-light'>{description}</p>
      <Link to='#'>
        Order a Delivery <img src={deliveryIcon} alt='Delivery Icon' />
      </Link>
    </div>
  );
};

export default Card;
