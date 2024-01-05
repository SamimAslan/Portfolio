import React from 'react';
import Text from '../atoms/Text';
import '../../styles/header.css';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <Text className="header-title">{title}</Text>
    </header>
  );
};

export default Header;
