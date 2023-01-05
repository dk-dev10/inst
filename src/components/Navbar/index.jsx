import UserBadge from '../Userbadge';
import './style.css';
const Navbar = (props) => {
  return (
    <div className='cnNavbarRoot'>
      <div className='cnNavbarWrapper'>
        <span>Rugram</span>
        <UserBadge {...props} />
      </div>
    </div>
  );
};

export default Navbar;
