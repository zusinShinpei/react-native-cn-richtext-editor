import React, { Component } from 'react';
import { Linking, Text, StyleSheet, TextStyle } from 'react-native';
import _ from 'lodash';
import ParsedText from 'react-native-parsed-text';
import { COLOR_BLUEBERRY } from '../../../src/constants/color';
import fonts from '../../../src/constants/fonts';

class CNStyledText extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps) {
    if (_.isEqual(this.props.text, nextProps.text)
      && _.isEqual(this.props.style, nextProps.style)

    ) {
      return false;
    }


    return true;
  }

  render() {
    return (
      <ParsedText
        style={this.props.style}
        parse={[
          {
            type: 'url',
            style: {
              color: 'blue',
              textDecorationLine: 'underline',
            },
            onPress: async (url: string) => {
              console.log(url);
              if (/^http/.test(url)) {
                await Linking.openURL(url);
              } else {
                await Linking.openURL('http://' + url);
              }
            },
          },
          {
            pattern: /#([0-9a-zA-Z가-힣ㄱ-ㅎ!$%^&*()_+-=<>?]+)/,
            style: {
              color: COLOR_BLUEBERRY,
              ...fonts.nanumDefault
            },
            onPress: (text: string) => {
              if(this.props.enablePress) {
                this.props.SearchStore.searchValue = text;
                this.props.navigation.push('SearchResult', {
                  spec: false
                });
              }
            }
          },

        ]}>
        {this.props.text}
      </ParsedText>
    );
  }
}

export default CNStyledText;
