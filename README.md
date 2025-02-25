This is a new React Native project, bootstrapped using @react-native-community/cli.

Task Management App

A React Native task management app with Firebase authentication, offline storage, and animations.

Features

Email/Password authentication with Firebase

Secure authentication state using SecureStore (iOS) / EncryptedStorage (Android)

CRUD functionality for tasks (SQLite/AsyncStorage for offline storage)

Automatic data syncing across sessions

Offline banner when the internet is unavailable

Context API for global state management

React Navigation for app navigation

Reanimated animations for smooth UI transitions

Dark Mode support

Getting Started

Note: Make sure you have completed the Set Up Your Environment guide before proceeding.

Step 1: Start Metro

First, you will need to run Metro, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

# Using npm
npm start

# OR using Yarn
yarn start

Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

Android

# Using npm
npm run android

# OR using Yarn
yarn android

iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

bundle install

Then, and every time you update your native dependencies, run:

bundle exec pod install

For more information, please visit CocoaPods Getting Started guide.

# Using npm
npm run ios

# OR using Yarn
yarn ios

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

Now what?

If you want to add this new React Native code to an existing application, check out the Integration guide.

If you're curious to learn more about React Native, check out the docs.

Troubleshooting

If you're having issues getting the above steps to work, see the Troubleshooting page.

Learn More

To learn more about React Native, take a look at the following resources:

React Native Website - learn more about React Native.

Getting Started - an overview of React Native and how setup your environment.

Learn the Basics - a guided tour of the React Native basics.

Blog - read the latest official React Native Blog posts.

@facebook/react-native - the Open Source; GitHub repository for React Native.

