import * as React from 'react';
import { TextInputMask } from 'react-native-text-input-mask';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

type P = { value: string, onChanged: number => void, style: ViewStyleProp };

class CurrencyInput extends React.Component<P> {
  state = {};

  onChangeText = (formatted: string, extracted: string) => {
    console.log(formatted);
    console.log(extracted);
    if (extracted.substr(0) === '0') {
      return;
    }

    if (Number.isNaN(Number(extracted))) {
      return;
    }

    if (extracted.includes('.')) {
      const split = extracted.split('.');
      // more than one decimal
      if (split.length > 2) {
        return;
      }
      // more than two decimal places
      if (split[1].length > 2) {
        return;
      }
    }

    this.props.onChanged(extracted);
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
        mask="$[999999990].[99]"
        placeholder="$0.00"
        value={value}
      />
    );
  }
}

export { CurrencyInput };
