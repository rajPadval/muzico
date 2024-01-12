import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect } from "react";
import { getAudioFiles } from "../helpers";
import { useDispatch, useSelector } from "react-redux";
import { setAudioFiles } from "../redux/slices/AudioSlice";
import MusicList from "../components/MusicList";
import { StatusBar } from "expo-status-bar";

const LibraryScreen = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.audio.audioFiles);

  const getFiles = async () => {
    const media = await getAudioFiles();
    console.log(media);
    dispatch(setAudioFiles(media));
  };

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "black", height: "100%" }}>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MusicList name={item.filename} />}
      />
    </SafeAreaView>
  );
};

export default LibraryScreen;
