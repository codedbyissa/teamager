import { App } from "../../styles/passForgot/index.style";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const PassForgot = () => {
  
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
              <App.instrucion>
                <App.instrucionText>Esqueceu sua senha?</App.instrucionText>
                <App.instrucionText2>Digite seu email abaixo para redefinir sua senha.</App.instrucionText2> 
              </App.instrucion>

              <App.field placeholder="Email"/>

              <App.submit>
                <App.submitText>Redefinir senha</App.submitText>
              </App.submit>

              <App.goTo>
                <App.goToText>Lembra da sua senha?</App.goToText> 

                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                  <App.goToLink> Entrar</App.goToLink>
                </TouchableOpacity>

              </App.goTo>
        </App.form>
      </App.content>
    </App.main>
  );
}


export default PassForgot
