import { App } from "../../styles/login/index.style";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Login = () => {

  const navigation = useNavigation<any>();

  return (
      <App.main>
        <App.content>

        <App.logo>
          
            <App.logoImage source={require('../../../assets/images/icon.png')} resizeMode="contain"/>

            <App.logoText>
              <App.title>Teamager</App.title>
              <App.subtitle>o novo gestor do seu time</App.subtitle>
            </App.logoText>

        </App.logo>

        <App.form>
          
              <App.welcome>Seja Bem-vindo!</App.welcome>

              <App.goTo>

                <App.goToText>Não tem uma conta?</App.goToText> 

                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>

                  <App.goToLink> Cadastre-se aqui</App.goToLink>

                </TouchableOpacity>
                
              </App.goTo>

              <App.field placeholder="Email"/>
              <App.field placeholder="Senha"/>
              
                <App.submit onPress={() => navigation.navigate("Home")}>
                  <App.submitText>Entrar</App.submitText>
                </App.submit>

              <App.recoveryPass>

                <TouchableOpacity onPress={() => navigation.navigate("PassForgot")}>

                  <App.recoveryPassText>Clique aqui para recuperar sua senha</App.recoveryPassText> 
                  
                </TouchableOpacity>

              </App.recoveryPass>

        </App.form>
        </App.content>
      </App.main>
  );
}

export default Login

