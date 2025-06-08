import {Dimensions} from 'react-native';

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

const heightpercentage = percentage => {
  return (deviceHeight * percentage) / 100;
}

const widthpercentage = percentage => {
  return (deviceWidth * percentage) / 100;
}