import React, { useRef, useEffect, useState, useCallback } from 'react';
import { StyleSheet, ToastAndroid, View, BackHandler, Alert, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const webviewRef = useRef(null);
  const [lastBackPressed, setLastBackPressed] = useState(0);
  const [canGoBack, setCanGoBack] = useState(false);

  const handleBackPress = useCallback(() => {
    const now = Date.now();
    if (now - lastBackPressed < 2000) {
      BackHandler.exitApp();
      return true;
    }
    setLastBackPressed(now);
    if (Platform.OS === 'android') {
      ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
    } else {
      Alert.alert('Exit App', 'Press back again to exit');
    }
    return true;
  }, [lastBackPressed]);

  const onBackPress = useCallback(() => {
    if (canGoBack && webviewRef.current) {
      webviewRef.current.goBack();
      return true; // Prevent default behavior (exit app)
    } else {
      return handleBackPress(); // Handle the double-tap to exit
    }
  }, [canGoBack, handleBackPress]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, [onBackPress]);

  const handleNavigationStateChange = (navState) => {
    setCanGoBack(navState.canGoBack);
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webviewRef}
        source={{ uri: 'https://www.doctoroncall.com/' }}
        style={styles.webview}
        userAgent="Mozilla/5.0 (Linux; Android 10; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Mobile Safari/537.36"
        onNavigationStateChange={handleNavigationStateChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
