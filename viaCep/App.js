import { Roboto_100Thin, Roboto_500Medium, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import HomeScreen from './src/screens/HomeScreen';
import Toast from "react-native-toast-message";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_100Thin, Roboto_500Medium, Roboto_700Bold
  })
  return (
    <>
    <HomeScreen />
    <Toast />
    </>
  );
}
