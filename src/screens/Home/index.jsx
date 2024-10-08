import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import theme from "@theme/index";
import { Text, View } from "react-native";
import { Container, Description, Title } from "./styles";
import { TitleWithDescription } from "@components/TitleWithDescription";

export function Home() {
  const navigation = useNavigation();

  function handleInstitution() {
    navigation.navigate("institution");
  }
  function handleContact() {
    navigation.navigate("contact");
  }
  function handleHelp() {
    navigation.navigate("help");
  }
  function handleProfile() {
    navigation.navigate("profile");
  }
  function handleLanguage() {
    navigation.navigate("changeLanguage");
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header />
      <Container>
        <TitleWithDescription
          title="Seja bem vindo(a)!"
          description="Plataforma de Apoio ao Migrante na Bahia"
        />
        <Button
          variant="primary"
          title="Instituições de Apoio"
          onPress={handleInstitution}
        />
        <Button variant="primary" title="Manual do Migrante" />
        <Button
          variant="primary"
          title="Entre em Contato"
          onPress={handleContact}
        />
        <Button variant="primary" title="Postos" onPress={handleHelp} />
        <Button variant="primary" title="Idioma" onPress={handleLanguage} />
        <Button variant="primary" title="Perfil" onPress={handleProfile} />
      </Container>
    </View>
  );
}
