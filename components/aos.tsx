import AOS from 'aos';

import { useEffect } from 'react';

import 'aos/dist/aos.css';

export const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({ easing: 'ease-out-quad', duration: 800 });
  }, []);

  return null;
};
