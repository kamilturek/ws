import { useEffect, useState } from 'react';
import Trail from '../Trail/Trail';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => setOpen(true), 350);
  }, []);

  return (
    <Trail open={open}>
      <span>Kamil</span>
      <span>Turek</span>
      <span>.IT</span>
    </Trail>
  );
};

export default Header;
