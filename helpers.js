import * as MediaLibrary from "expo-media-library";
import { Alert } from "react-native";

const permissionAlert = () => {
  Alert.alert("Permission Required", "This app needs to read audio files", [
    {
      text: "I am ready",
      onPress: () => getPermission(),
    },
    {
      text: "Cancel",
      onPress: () => permissionAlert(),
    },
  ]);
};

export const getPermission = async () => {
  const permission = await MediaLibrary.getPermissionsAsync();
  if (permission.granted) {
    // we want to get all the audio files
    getAudioFiles();
  }

  if (!permission.canAskAgain) {
    // we want to display some error to the user
    return;
  }

  if (!permission.granted && !permission.canAskAgain) {
    const { status, canAskAgain } =
      await MediaLibrary.requestPermissionsAsync();
    if (status === "denied" && canAskAgain) {
      // we are going to display an alert that user must allow this permission to work this app
      permissionAlert();
    }
    if (status === "granted") {
      // we want to get all the audio files
      getAudioFiles();
    }
    if (status === "denied" && !canAskAgain) {
      // we want to display some error to the user
    }
  }
};

export const getAudioFiles = async () => {
  let media = await MediaLibrary.getAssetsAsync({
    mediaType: "audio",
  });
  media = await MediaLibrary.getAssetsAsync({
    mediaType: "audio",
    first: media.totalCount,
  });
  return media.assets;
};
