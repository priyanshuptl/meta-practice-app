import './styles.css';

const ListSection = ({ title = '', list = [] }) => {
  return (
    <div className='nav-links'>
      <h5>{title}</h5>
      <ul className='no-default-style'>
        {list.map(({ label, href }) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const doormatNavLinks = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'About',
    href: '#',
  },
  {
    label: 'Menu',
    href: '#',
  },
  {
    label: 'Reservations',
    href: '#',
  },
  {
    label: 'Order Online',
    href: '#',
  },
  {
    label: 'Login',
    href: '#',
  },
];

const contactNavLinks = [
  {
    label: 'Address',
    href: '#',
  },
  {
    label: 'Phone Number',
    href: '#',
  },
  {
    label: 'Email',
    href: '#',
  },
];

const socialMediaLinks = [
  {
    label: 'Instagram',
    href: '#',
  },
  {
    label: 'WhatsApp',
    href: '#',
  },
  {
    label: 'Facebook',
    href: '#',
  },
];

const Footer = () => {
  return (
    <footer className='footer grid'>
      <img src='footer_logo' alt='Footer Img' id='footer-logo' />
      <ListSection title='Doormat Navigation' list={doormatNavLinks} />
      <ListSection title='Contact' list={contactNavLinks} />
      <ListSection title='Social Media' list={socialMediaLinks} />
    </footer>
  );
};

export default Footer;
