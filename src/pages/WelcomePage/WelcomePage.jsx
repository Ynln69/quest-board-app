import React from 'react';
import Welcome from 'components/Welcome/Welcome';
import { Calendar } from 'components/Calendar/Calendar';

const WelcomePage = () => {
  return (
    <div>
      <Calendar />
      <Welcome />
    </div>
  );
};

export default WelcomePage;
