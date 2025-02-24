import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import ScreenWrapper from "../../components/ScreenWrapper";
import Typo from "../../components/Typo";
import Button from "../../components/Button";
import { colors, spacingY, spacingX } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.push("/(auth)/login")}
            style={styles.loginButton}
          >
            <Typo fontWeight={"500"}>Sign in</Typo>
          </TouchableOpacity>
        </View>

        <Animated.Image
          entering={FadeIn.duration(500)}
          source={require("../../assets/images/welcome.png")}
          style={styles.welcomeImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.footer}>
        <Animated.View
          entering={FadeInDown.duration(1000).springify().damping(12)}
          style={{ alignItems: "center" }}
        >
          <Typo size={28} fontWeight={"800"}>
            Always take control
          </Typo>
          <Typo size={28} fontWeight={"800"}>
            of your finances
          </Typo>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.duration(1000)
            .delay(100)
            .springify()
            .damping(12)}
          style={{ alignItems: "center", gap: 2 }}
        >
          <Typo size={16} color={colors.textLight}>
            Finances must be arranged to set a better
          </Typo>
          <Typo size={16} color={colors.textLight}>
            lifestyle in future
          </Typo>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.duration(1000)
            .delay(200)
            .springify()
            .damping(12)}
          style={styles.buttonContainer}
        >
          <Button onPress={() => router.push("/(auth)/register")}>
            <Typo size={16} color={colors.neutral900} fontWeight={"600"}>
              Get Started
            </Typo>
          </Button>
        </Animated.View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    paddingTop: spacingY._7,
  },
  welcomeImage: {
    width: "100%",
    height: verticalScale(250),
    alignSelf: "center",
    marginTop: verticalScale(20),
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingX._20,
  },
  footer: {
    backgroundColor: colors.neutral900,
    alignItems: "center",
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(30),
    gap: spacingY._12,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -5 },
    elevation: 5,
    shadowRadius: 15,
    shadowOpacity: 0.1,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: spacingX._25,
  },
});
