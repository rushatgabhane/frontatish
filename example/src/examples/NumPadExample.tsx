import React, { Component } from 'react';
import { View } from 'react-native';

// eslint-disable-next-line import/no-unresolved
import { NumPad, withColors, CodeInput } from 'frontatish';
import { SafeAreaView } from 'react-native-safe-area-context';

// import { Fonts, getColors } from '../styles';

interface NumPadExampleState {
  input: string;
}
interface NumPadExampleProps {
  isDark: boolean;
  Colors: any;
}
class NumPadExample extends Component<NumPadExampleProps, NumPadExampleState> {
  constructor(props: NumPadExampleProps) {
    super(props);
    this.state = { input: '' };
  }

  // onItemClick
  onItemClick = (value: string) => {
    const { input } = this.state;
    if (input.length < 4) {
      this.setState({ input: input + value });
    }
  };

  onDeleteItem = () => {
    const { input } = this.state;
    this.setState({ input: input.substring(0, input.length - 1) });
  };

  render() {
    const { input } = this.state;
    const { Colors } = this.props;
    return (
      <SafeAreaView
        style={{
          flex: 1,
          // justifyContent: 'flex-end',
          backgroundColor: Colors.white,
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <CodeInput value={input} codeLength={4} />
        </View>

        <NumPad
          onItemClick={this.onItemClick}
          onDeleteItem={this.onDeleteItem}
        />
      </SafeAreaView>
    );
  }
}

export default withColors(NumPadExample);
