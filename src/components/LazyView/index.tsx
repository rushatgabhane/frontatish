import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { LazyViewProps } from './types';

const LazyView = (props: LazyViewProps) => {
  const { children, loading } = props;
  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  return <View>{children}</View>;
};

export default LazyView;
