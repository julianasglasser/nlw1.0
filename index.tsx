import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Emoji from "react-native-emoji";
import MapView from "react-native-maps";
import { SvgUri } from "react-native-svg";

const Points: React.FC = () => {
  const navigator = useNavigation();

  function handleNavigateToHome() {
    navigator.goBack();
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateToHome}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Emoji name="smiley" style={{ fontSize: 24 }} />
          <Text style={styles.title}>Bem vindo.</Text>
        </View>
        <Text style={styles.description}>
          Encontre no mapa um ponto de coleta.
        </Text>

        <View style={styles.mapContainer}>
          <MapView style={styles.map} />
        </View>

        <View style={styles.itemsContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            // contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            <TouchableOpacity style={styles.item} onPress={() => {}}>
              <SvgUri
                width={42}
                height={42}
                uri="http://192.168.25.8:3333/uploads/oleo.svg"
              />
              <Text style={styles.itemTitle}>Óleo de cozinha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => {}}>
              <SvgUri
                width={42}
                height={42}
                uri="http://192.168.25.8:3333/uploads/oleo.svg"
              />
              <Text style={styles.itemTitle}>Óleo de cozinha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => {}}>
              <SvgUri
                width={42}
                height={42}
                uri="http://192.168.25.8:3333/uploads/oleo.svg"
              />
              <Text style={styles.itemTitle}>Óleo de cozinha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => {}}>
              <SvgUri
                width={42}
                height={42}
                uri="http://192.168.25.8:3333/uploads/oleo.svg"
              />
              <Text style={styles.itemTitle}>Óleo de cozinha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => {}}>
              <SvgUri
                width={42}
                height={42}
                uri="http://192.168.25.8:3333/uploads/oleo.svg"
              />
              <Text style={styles.itemTitle}>Óleo de cozinha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => {}}>
              <SvgUri
                width={42}
                height={42}
                uri="http://192.168.25.8:3333/uploads/oleo.svg"
              />
              <Text style={styles.itemTitle}>Óleo de cozinha</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },

  title: {
    fontSize: 24,
    fontFamily: "Ubuntu_700Bold",
    marginLeft: 8,
  },

  description: {
    color: "#6C6C80",
    fontSize: 16,
    marginTop: 4,
    fontFamily: "Roboto_400Regular",
  },

  mapContainer: {
    flex: 1,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 16,
  },

  map: {
    width: "100%",
    height: "100%",
  },

  mapMarker: {
    width: 90,
    height: 80,
  },

  mapMarkerContainer: {
    width: 90,
    height: 70,
    backgroundColor: "#34CB79",
    flexDirection: "column",
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
  },

  mapMarkerImage: {
    width: 90,
    height: 45,
    resizeMode: "cover",
  },

  mapMarkerTitle: {
    flex: 1,
    fontFamily: "Roboto_400Regular",
    color: "#FFF",
    fontSize: 13,
    lineHeight: 23,
  },

  itemsContainer: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 32,
  },

  item: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#eee",
    height: 120,
    width: 120,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
  },

  selectedItem: {
    borderColor: "#34CB79",
    borderWidth: 2,
  },

  itemTitle: {
    fontFamily: "Roboto_400Regular",
    textAlign: "center",
    fontSize: 13,
  },
});

export default Points;
