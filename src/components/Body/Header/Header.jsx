import React from 'react';
import './Header.css';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Avatar } from '@mui/material';
import { useStateValue } from '../../../StateProvider';
const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <ArrowBackIosNewOutlinedIcon className="before" />
        <ArrowForwardIosOutlinedIcon className="after" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="ds" className="avatar" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
