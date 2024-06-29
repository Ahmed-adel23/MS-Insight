import {AnimationObject} from 'lottie-react-native';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require('../assets//animations/Animation - 1709424725042.json'),
    text: 'MsInsight',
    textColor: 'black',
    backgroundColor: '#cef5eb',
  },
  {
    id: 2,
    animation: require('../assets//animations/Animation - 1702312483882.json'),
    text: 'MSInsight',
    textColor: 'black',
    backgroundColor: '#cef5eb',
  },
];

export default data;
