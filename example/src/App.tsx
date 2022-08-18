import React from 'react';

import { SafeAreaView, Text } from 'react-native';
import { canAddPasses, addPass, AddPassButton } from 'react-native-ios-passkit';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#161616' }}>
      <Text style={{ color: '#FFFFFF' }}>component above</Text>
      <AddPassButton
        style={{ margin: 24, height: 60, width: 194 }}
        onPress={async () => {
          try {
            const isAddable = await canAddPasses();
            if (isAddable) {
              await addPass('');
            }
          } catch (err) {
            console.log(err);
          }
        }}
      />
      <Text style={{ color: '#FFFFFF' }}>component below</Text>
    </SafeAreaView>
  );
}
