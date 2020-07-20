import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  text: string;
  onPress: any;
  backgroundColor: string;
  color: string;
  wide: boolean;
}

const windowWidth: number = Dimensions.get('window').width;
const buttonWidth: number = windowWidth / 4;

const Button: React.FC<Props> = ({
  text,
  onPress,
  backgroundColor,
  color,
  wide,
}) => {
  const containerStyles: string[] = [styles.container];
  const textStyles: string[] = [styles.text];

  if (backgroundColor) {
    containerStyles.push({ backgroundColor });
  }

  if (color) {
    textStyles.push({ color });
  }

  if (wide) {
    containerStyles.push(styles.wideButton);
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={containerStyles}>
        <Text style={textStyles}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Math.floor(buttonWidth - 10),
    height: Math.floor(buttonWidth - 10),
    borderRadius: buttonWidth,
    margin: 5,
    backgroundColor: '#222',
  },
  text: {
    fontSize: 32,
  },
  wideButton: {
    flex: 2,
    alignItems: 'flex-start',
    paddingLeft: buttonWidth / 2 - 14,
    width: Math.floor(buttonWidth * 2 - 10),
  },
});

export default Button;
