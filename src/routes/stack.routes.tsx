import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/public/Login";
import SignUp from "../screens/public/SignUp";
import PassForgot from "../screens/public/PassForgot";
import Home from "../screens/private/Home";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">

          <Stack.Screen 
          name="Login"
          component={Login}
          options={{
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation:'slide_from_bottom'
          }}/>

          <Stack.Screen 
          name="SignUp"
          component={SignUp}
          options={{
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation:'slide_from_right'
          }}/>
          
          <Stack.Screen 
          name="PassForgot"
          component={PassForgot}
          options={{
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation:'slide_from_left'
          }}/>

        <Stack.Screen 
          name="Home"
          component={Home}
          options={{
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation:'slide_from_bottom'
          }}/>

        </Stack.Navigator> 
      );
}