import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import AuthScreen from "./auth-screen";

const App = () => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables

  const snapPoints = useMemo(() => ["25%", "50%", "100%"], []);

  // callbacks
  const handleSheetChange = useCallback((index:number) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index:number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Close" onPress={() => handleClosePress()} />
      <BottomSheet
        handleComponent={null}
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose
        onChange={handleSheetChange}
         keyboardBehavior="extend"
      keyboardBlurBehavior="restore"
      android_keyboardInputMode="adjustPan"
        
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          <AuthScreen/>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
});

export default App;