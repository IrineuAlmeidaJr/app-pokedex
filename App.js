import { 
  useFonts, 
  Inter_400Regular, 
  Inter_500Medium, 
  Inter_600SemiBold,  
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';

import MyApp from './src';

export default function App() {  
  const [fontsLoaded] = useFonts({ 
    Inter_400Regular,  
    Inter_500Medium,
    Inter_600SemiBold,  
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if(!fontsLoaded) {
      return null;
  }

  return (
    <MyApp />
  );
}
