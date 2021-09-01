import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Header() {
  return (
    <View style={styles.container}>
      <Feather
        name="arrow-left"
        color={theme.colors.brown}
        size={32}
      />

      <View>
        <Text style={styles.title}>
          Good Coffe
        </Text>

        <Text style={styles.subtitle}>
          Special for you
        </Text>
      </View>
    </View>
  );
}