import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MusicList = ({ name }) => {
  return (
    <View>
      <Text style={{ color: "white" }}>{name}</Text>
    </View>
  );
};

export default MusicList;

const styles = StyleSheet.create({});
