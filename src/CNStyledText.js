import React, {Component} from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';
import _ from 'lodash';
import ParsedText from "react-native-parsed-text";
import {COLOR_BLUEBERRY} from "../../../src/constants/color";
import fonts from "../../../src/constants/fonts";

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
                pattern: /#([0-9a-zA-Z가-힣ㄱ-ㅎ!$%^&*()_+-=<>?]+)/,
                style: {
                  color: COLOR_BLUEBERRY,
                  ...fonts.nanumDefault
                }
              }
            ]}>
          {this.props.text}
        </ParsedText>
    );
  }
}

export default CNStyledText;
