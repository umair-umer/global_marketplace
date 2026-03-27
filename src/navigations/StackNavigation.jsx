import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screens/authentication/Login";
import Signup from "../screens/authentication/Signup";
import PersonalInfo from './../screens/authentication/PersonalInfo';
import DateOfBirth from './../screens/authentication/DateOfBirth';
import ProfilingandImages from './../screens/authentication/ProfilingandImages';
import AddressAndLocation from './../screens/authentication/AddressAndLocation';
import HomeDetails from './../screens/Home/HomeDetails';
import ProductDetails from './../screens/Home/ProductDetails';
import UserConfirmation from './../screens/UserConfirmation/UserConfirmation';
import SplashScreen from './../screens/SplashScreen/SplashScreen';
import SignUp from './../screens/buyerSection/BuyerAuth/SignUp';
import BuyerHome from './../screens/buyerSection/BuyerHome/BuyerHome';
import IntroSlider from './../screens/SplashScreen/IntroSlider';
import DrawerNavigation from './DrawerNavigation';
import AreasShop from '../screens/buyerSection/MarketByArea/AreasShop';
import EachShop from '../screens/buyerSection/MarketByArea/EachShop'
import Notifications from '../screens/Notifications/Notifications'
import MainDashboard from './../screens/SellerSection/Dashboard/MainDashboard';
import CreateProduct from './../screens/SellerSection/Dashboard/CreateProduct';

const Stack = createNativeStackNavigator()
const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: 'transparent' }
        }}>
            <Stack.Screen options={{ headerShown: false }} name={'SplashScreen'} component={SplashScreen} />
            <Stack.Screen options={{ headerShown: false }} name={'IntroSlider'} component={IntroSlider} />
            <Stack.Screen options={{ headerShown: false }} name={'Login'} component={Login} />
            <Stack.Screen name={'Signup'} component={Signup} />
            <Stack.Screen name={'PersonalInfo'} component={PersonalInfo} />
            <Stack.Screen name={'DateOfBirth'} component={DateOfBirth} />
            <Stack.Screen name={'ProfilingandImages'} component={ProfilingandImages} />
            <Stack.Screen name={'AddressAndLocation'} component={AddressAndLocation} />
            <Stack.Screen name={'MainHome'} component={DrawerNavigation} />
            <Stack.Screen name={'HomeDetails'} component={HomeDetails} />
            <Stack.Screen name={'ProductDetails'} component={ProductDetails} />
            <Stack.Screen name={'UserConfirmation'} component={UserConfirmation} />
            <Stack.Screen name={'BuyerSignUp'} component={SignUp} />
            <Stack.Screen name={'BuyerHome'} component={BuyerHome} />
            <Stack.Screen name={'AreasShop'} component={AreasShop} />
            <Stack.Screen name={'EachShop'} component={EachShop} />
            <Stack.Screen name={'Notifications'} component={Notifications} />
            <Stack.Screen name={'MainDashboard'} component={MainDashboard} />
            <Stack.Screen name={'CreateProduct'} component={CreateProduct} />
            {/* <Stack.Screen name={'Profile'} component={Profile} /> */}
        </Stack.Navigator>
    )
}

export default StackNavigation