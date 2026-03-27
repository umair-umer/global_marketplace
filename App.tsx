import { NavigationContainer } from "@react-navigation/native"
import StackNavigation from './src/navigations/StackNavigation';
import { ImageBackground, } from "react-native";

const App = () => {
  return (
    // <ImageBackground
    //   source={require('./src/assets/images/bground.png')}
    //   // resizeMode="cover"
    //   style={{ flex: 1 }}
    // >
      
    
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
      //  </ImageBackground>
  )
}


export default App

// TODO: #66BB6A WE HAVE TO USE THIS COLOR IN THIS APP