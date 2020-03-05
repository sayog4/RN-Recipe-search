import React from 'react';

import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { HeaderButton } from 'react-navigation-header-buttons';

const CustomHeaderButton = (props) => {
  return <HeaderButton 
    { ...props }
    IconComponent={ Ionicons }
    iconSize={ 23 }
    color={ Platform.OS === 'ios' ? '#2b5876' : '#fff' }
  />
};

export default CustomHeaderButton;