import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Pressable,
} from "react-native";

export default function LoginPage() {
  const [page, setPage] = useState("sign-in");

  const signIn = () => {
    console.log("Signed in");
  };

  const signUp = () => {
    console.log("Signed in");
  };

  const forgotPassword = () => {
    console.log("password recovered");
  };
  return (
    <SafeAreaView style={loginPageStyles.loginPageContainer}>
      <Text style={loginPageStyles.loginPageMainText}>DreamScroll</Text>
      {page === "sign-in" && (
        <View style={loginPageStyles.textFieldContainer}>
          <TextInput
            style={loginPageStyles.input}
            placeholder="Username"
            autoCorrect={false}
            textContentType="username"
          />
          <TextInput
            style={loginPageStyles.input}
            placeholder="Password"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />

          <Pressable onPress={forgotPassword}>
            <Text>Forgot password</Text>
          </Pressable>

          <Pressable style={loginPageStyles.signInButton} onPress={signIn}>
            <Text style={loginPageStyles.signInButtonText}>Sign in</Text>
          </Pressable>

          <Text>Dont have a journal?</Text>

          <Pressable
            style={loginPageStyles.signInButton}
            onPress={() => setPage("sign-up")}
          >
            <Text style={loginPageStyles.signInButtonText}>Create journal</Text>
          </Pressable>
        </View>
      )}

      {page === "sign-up" && (
        <View style={loginPageStyles.textFieldContainer}>
          <TextInput
            style={loginPageStyles.input}
            placeholder="Email ID"
            autoCorrect={false}
            textContentType="username"
          />
          <TextInput
            style={loginPageStyles.input}
            placeholder="Username"
            autoCorrect={false}
            textContentType="username"
          />
          <TextInput
            style={loginPageStyles.input}
            placeholder="Password"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <TextInput
            style={loginPageStyles.input}
            placeholder="Confirm password"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />

          <Pressable style={loginPageStyles.signInButton} onPress={signUp}>
            <Text style={loginPageStyles.signInButtonText}>Create</Text>
          </Pressable>

          <Text>Already have a journal?</Text>

          <Pressable
            style={loginPageStyles.signInButton}
            onPress={() => setPage("sign-in")}
          >
            <Text style={loginPageStyles.signInButtonText}>Sign in</Text>
          </Pressable>
        </View>
      )}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const loginPageStyles = StyleSheet.create({
  loginPageContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 60,
    paddingTop: 100,
  },

  loginPageMainText: {
    fontFamily: "Southam Demo",
    fontSize: 60,
  },

  textFieldContainer: {
    height: "100%",
    width: "100%",
    flex: 1,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    height: "fit-content",
    width: "66%",
    borderWidth: 1,
    padding: 10,
    borderTopColor: "#ffffff",
    borderLeftColor: "#ffffff",
    borderRightColor: "#ffffff",
    fontSize: 15,
  },

  signInButton: {
    backgroundColor: "black",
    borderRadius: 6,
    width: "fit-content",
    height: "fit-content",
    paddingTop: 4,
    paddingRight: 10,
    paddingBottom: 4,
    paddingLeft: 10,
  },

  signInButtonText: {
    color: "white",
  },
});
