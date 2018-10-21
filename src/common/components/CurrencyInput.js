// @flow
import * as React from 'react';
import TextInputMask from 'react-native-text-input-mask';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

type P = { value: string, onChanged: string => void, style: ViewStyleProp };

class CurrencyInput extends React.Component<P> {
  onChangeText = (formatted: string) => {
    this.props.onChanged(formatted);
  };

  render() {
    const { style, value } = this.props;
    return (
      <TextInputMask
        autoCorrect={false}
        autoCapitalize="none"
        style={style}
        keyboardType="numeric"
        onChangeText={this.onChangeText}
        mask="$[999999999].[99]"
        placeholder="$0.00"
        value={value}
      />
    );
  }
}

export { CurrencyInput };
