import {AnimationObject} from 'lottie-react-native';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  // {
  //   id: 1,
  //   animation: require('../assets/animations/Lottie1.json'),
  //   text: 'MS insight',
  //   textColor: 'white',
  //   backgroundColor: '#1640D6',
  // },
  {
    id: 2,
    animation: require('../assets//animations/Animation - 1702312483882.json'),
    text: 'MsInsight',
    textColor: 'white',
    backgroundColor: '#2B3499',
  },
  {
    id: 3,
    animation: require('../assets//animations/Animation - 1702312483882.json'),
    text: 'MSInsight',
    textColor: 'white',
    backgroundColor: '#1640D6',
  },
];

export default data;
