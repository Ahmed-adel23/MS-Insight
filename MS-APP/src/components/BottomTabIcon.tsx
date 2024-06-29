import React from 'react';
import {View} from 'react-native';
import HomeIcon from '../assets/svg/home.svg';
import SettingIcon from '../assets/svg/setting.svg';
import ProfileIcon from '../assets/svg/profile.svg';
import SearchIcon from '../assets/svg/search.svg';

interface Props {
  route: string;
  isFocused: boolean;
}

const BottomTabIcon = ({route, isFocused}: Props) => {
  const renderIcon = (route: string, isFocused: boolean) => {
    let height: number = 34;
    let width: number = 34;

    switch (route) {
      case 'Home':
        return (
          <HomeIcon
            width={width}
            height={height}
            fill={isFocused ? '#019874' : '#ffffff'}
          />
        );
      case 'Search':
        return (
          <SearchIcon
            width={width}
            height={height}
            fill={isFocused ? '#019874' : '#ffffff'}
          />
        );
      case 'Setting':
        return (
          <SettingIcon
            width={width}
            height={height}
            fill={isFocused ? '#019874' : '#ffffff'}
          />
        );
      case 'Profile':
        return (
          <ProfileIcon
            width={width}
            height={height}
            fill={isFocused ? '#019874' : '#ffffff'}
          />
        );
      default:
        break;
    }
  };

  return <View>{renderIcon(route, isFocused)}</View>;
};

export default BottomTabIcon;
