import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// eslint-disable-next-line import/no-unresolved
import { LazyView } from 'supergroww';

const LazyViewExample = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setData({
        name: 'Vinit',
      });
    }, 5000);
  });
  return (
    <SafeAreaView>
      <LazyView loading={loading}>
        <Text>{data.name}</Text>
      </LazyView>
    </SafeAreaView>
  );
};

export default LazyViewExample;
