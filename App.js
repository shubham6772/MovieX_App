import 'react-native-gesture-handler';
import StackNavigationRoot from './src/Navigation/StackNavigationRoot';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <StackNavigationRoot />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
