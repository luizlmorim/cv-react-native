import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("./assets/Perfil-LF.jpg")} style={styles.image} />
      <Text style={styles.header}>Luiz Filipe de Amorim Miranda</Text>
      <Text style={styles.subheader}>
        Análise e desenvolmento de Sistemas 
      </Text>
      <Text style={styles.subheader}>
        Objetivo
      </Text>
      <Text style={styles.paragraph}>
        Meu objetivo é me desenvolver na área da tecnologia, tendo foco em
        programação e design para o desenvolvimento web. Viso a aprendizagem e estou
        motivado a aplicar meus conhecimentos e habilidades no mercado de trabalho.
        Acredito no impacto positivo da tecnologia na qualidade de vida e busco contribui
        com isso, trabalhando em equipe, para assim encontrar soluções criativas e
        inovadoras.
      </Text>
      <Text style={styles.subheader}>
        Habilidades
      </Text>
      <Text style={styles.listItem}>
        • Soft Skills: Criatividade, Comunicação, Trabalho em Equipe.
      </Text>
      <Text style={styles.listItem}>
        • Hard Skills: HTML5, CSS3, JS, Reacr Native, Python, Lógica de Programação, BD.
      </Text>
      <Text style={styles.paragraph}>
        você pode olhar meu porfólio em {""}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://luizfilipemeuportfolio.netlify.app/")}
        >
          https://luizfilipemeuportfolio.netlify.app/
        </Text>{" "}
        {""}
        E conhcer um pouco mais do meu trablaho em {""}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://github.com/luizlmorim")}
        >
         https://github.com/luizlmorim
        </Text>
        .
      </Text>
    </ScrollView>
  );
}

function ExperienceScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subheader}>
        Wise Cont | Web Design | Início: Abril 2024 - Atual 
      </Text>
      <Text style={styles.paragraph}>• Atividades </Text>
      <Text style={styles.paragraph}>
        • Crição de Layouts 
        • Desenvolvimento de websites 
        • Vendas e suporte técnico ao clientes 
      </Text>
      <Text style={styles.subheader}>
        Nova Mobi - PE | Assistente administrativo | 2022 a 2024
      </Text>
      <Text style={styles.paragraph}>• Atividades </Text>
      <Text style={styles.paragraph}>
        • Gestão de documentos
        • Atendimento ao clientes
        • Organização de atividades administrativas
      </Text>
      <Text style={styles.subheader}>Cursos</Text>
      <Text style={styles.paragraph}>
        • Formação backend - 300h | 2023 
        • Formção desenvolmento web - 330h | 2022 
      </Text>
    </ScrollView>
  );
}

function EducationScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subheader}>
        Anásile e desenvolmento de Sistemas
      </Text>
      <Text style={styles.paragraph}>
        Faculdade Senac Pernambuco | Início: Março 2023 - Atual 
      </Text>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Experience") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            } else if (route.name === "Education") {
              iconName = focused ? "school" : "school-outline";
            }

            const iconSize = focused ? 30 : 25;

            return <Ionicons name={iconName} size={iconSize} color={color} />;
          },
          tabBarActiveTintColor: "#008080",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#f8f8f8",
            borderTopWidth: 0,
          },

          headerStyle: {
            backgroundColor: "#008080",
          },
          headerTintColor: "#fff",
        })}
      >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Experience" component={ExperienceScreen} />
        <Tab.Screen name="Education" component={EducationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "##E0D0FF",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subheader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "justify",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
  },
  listItem: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: "justify",
  },
  link: {
    color: "#1C0052",
    textDecorationLine: "underline",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#008080",
    alignSelf: "center",
    marginBottom: 20,
  },
});
