import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function Profile({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView>
        <View style={styles.buttonsArea}>
          <TouchableOpacity /*onPress={() => navigation.navigate()} */>
            <View style={styles.littleArea}>
              <Feather
                name="settings"
                size={24}
                style={styles.icon}
                color="black"
              />
              <Text style={styles.username}>Ayar 1</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity /*onPress={() => navigation.navigate()} */>
            <View style={styles.littleArea}>
              <Entypo
                name="wallet"
                size={24}
                style={styles.icon}
                color="black"
              />
              <Text style={styles.username}>Ayar 2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity /*onPress={() => navigation.navigate()} */>
            <View style={styles.littleArea}>
              <MaterialIcons
                name="security"
                size={24}
                style={styles.icon}
                color="black"
              />
              <Text style={styles.username}>Ayar 3 </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity /*onPress={() => navigation.navigate()} */>
            <View style={styles.littleArea}>
              <Feather
                name="phone"
                size={24}
                style={styles.icon}
                color="black"
              />
              <Text style={styles.username}>Ayar 4 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity /*onPress={() => navigation.navigate()} */>
            <View style={styles.littleArea}>
              <AntDesign
                name="user"
                size={24}
                style={styles.icon}
                color="black"
              />

              <Text style={styles.username}>Ayar 5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity /*onPress={() => navigation.navigate()} */>
            <View style={styles.littleArea}>
              <Feather
                name="settings"
                size={24}
                style={styles.icon}
                color="black"
              />
              <Text style={styles.username}>Ayar 6</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity /*onPress={() => navigation.navigate()} */>
            <View style={styles.littleArea}>
              <Entypo
                name="wallet"
                size={24}
                style={styles.icon}
                color="black"
              />
              <Text style={styles.username}>Ayar 7</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity /*onPress={() => navigation.navigate()} */>
            <View style={styles.littleArea}>
              <MaterialIcons
                name="security"
                size={24}
                style={styles.icon}
                color="black"
              />
              <Text style={styles.username}>Ayar 8 </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity /*onPress={() => navigation.navigate()} */>
            <View style={styles.littleArea}>
              <Feather
                name="phone"
                size={24}
                style={styles.icon}
                color="black"
              />
              <Text style={styles.username}>Ayar 9 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity /*onPress={() => navigation.navigate()} */>
            <View style={styles.littleArea}>
              <AntDesign
                name="user"
                size={24}
                style={styles.icon}
                color="black"
              />

              <Text style={styles.username}>Ayar 10</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    marginLeft: 15,
    width: 100,
    height: 100,
    borderRadius: 55,
  },
  username: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
  textArea: { justifyContent: "center", marginLeft: 15 },

  icon: {
    marginRight: 15,
  },

  buttonsArea: {
    flex: 5,

    justifyContent: "flex-end",
  },

  littleArea: {
    flexDirection: "row",
    marginVertical: 30,
    marginHorizontal: 35,
  },
});
