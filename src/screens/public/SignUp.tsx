import { App } from "../../styles/signUp/index.style";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  
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

                <App.instrucionText>Crie uma conta</App.instrucionText>
                <App.instrucionText2>Vamos começar inserindo seus dados abaixo</App.instrucionText2> 

              </App.instrucion>

              <App.field placeholder="Nome"/>
              <App.field placeholder="Segundo nome"/>
              <App.field placeholder="Email"/>
              <App.field placeholder="Senha"/>
              <App.field placeholder="Confirme senha"/>

              <App.submit>
                <App.submitText>Cadastrar</App.submitText>
              </App.submit>

              <App.goTo>

                <App.goToText>já tem uma conta?</App.goToText> 

                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                  <App.goToLink> Entrar</App.goToLink>
                </TouchableOpacity>

              </App.goTo>
        </App.form>

      </App.content>
    </App.main>
  );
}


export default SignUp
