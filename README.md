# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Cloning the repository

```bash
git clone
```

## Installing dependencies

```bash
yarn install
```

## Running the application using emulator

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

*Please make sure you have already installed and configure the emulator. Refer Android Studio and XCode documentation for more details.*

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn react-native start
```
Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn react-native run-android
```

### For iOS
*Currently not available*

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ shortly provided you have set up your emulator/simulator correctly.

For security purposes, keystore credentials will only be shared within members of DoctorOnCall organisation.
