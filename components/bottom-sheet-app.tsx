import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetProps,
  BottomSheetScrollView,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { Portal } from '@gorhom/portal';

import { ScrollView } from 'react-native-gesture-handler';
import { S, TS, color, ms } from '../screens/themes';
import { XVector } from '../assets/icons';

export interface BottomSheetAppRef {
  show: () => void;
  close: () => void;
  handleSheetChanges: (index: number) => void;
}
export interface IProps extends Omit<BottomSheetProps, 'snapPoints'> {
  withoutPortal?: boolean;
  initialSnapPoints?: (string | number)[];
  title?: string;
  enableHeader?: boolean;
}

export const BottomSheetApp = forwardRef((props: IProps, ref) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const initialSnapPoints = useMemo(
    () => props.initialSnapPoints || ['CONTENT_HEIGHT', ms(800)],
    [props.initialSnapPoints],
  );
  //handles close pressed and pan down events
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const handleShowPress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(0);
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    if (index < 0) Keyboard.dismiss();
  }, []);

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  useImperativeHandle(
    ref,
    () => ({
      show: () => {
        handleShowPress();
      },
      close: () => {
        handleClosePress();
      },
      handleSheetChanges: (index: number) => {
        bottomSheetRef.current?.snapToIndex(index);
      },
    }),
    [props.initialSnapPoints],
  );

  const renderBackdrop = useCallback(
    (props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        opacity={0.3}
        enableTouchThrough={false}
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        onPress={() => {
          handleClosePress();
        }}
      />
    ),
    [],
  );

  const BottomSheetResult = (
    <BottomSheet
      handleComponent={null}
      ref={bottomSheetRef}
      index={-1}
      snapPoints={animatedSnapPoints as any}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      keyboardBehavior="extend"
      keyboardBlurBehavior="restore"
      android_keyboardInputMode="adjustPan"
      {...props}>
      <BottomSheetView onLayout={handleContentLayout}>
        {props.enableHeader ? (
          <View style={styles.headerContainer}>
            <Text style={styles.title}>{props.title || ''}</Text>

            <TouchableOpacity
              hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
              onPress={() => {
                handleClosePress();
              }}>
              <XVector height={ms(12)} width={ms(12)} />
            </TouchableOpacity>
          </View>
        ) : null}
        <>{props.children}</>
      </BottomSheetView>
    </BottomSheet>
  );

  return (
    <>
      {props.withoutPortal ? (
        BottomSheetResult
      ) : (
        <Portal>{BottomSheetResult}</Portal>
      )}
    </>
  );
});

const styles = StyleSheet.create({
  headerContainer: {
    ...S.rowCenterSpaceBetween,
    padding: ms(16),
    borderBottomColor: color.gray[300],
    borderBottomWidth: ms(1),
  },
  title: {
    ...TS.textMdMedium,
    color: color.gray[700],
  },
});
