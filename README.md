# Ghosh Barir Mobile Kothay - README

This README.md file provides detailed information about the Ghosh Barir Mobile Kothay mobile application. It includes instructions on how to set up the project, an overview of the app's functionality, and details about the technologies used. Screenshots of the application are attached to relevant sections to enhance the understanding of the app's UI.

## Table of Contents
- [Overview](#overview)
- [Screenshots](#screenshots)
- [Setup Instructions](#setup-instructions)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Overview

Ghosh Barir Mobile Kothay is a mobile application built using React Native. It allows users to track the location of their mobile devices and view the locations on a central hub. The app utilizes Firebase Firestore as the backend database for storing device locations.

The app provides two main views:
1. **User View**: In this view, users can enter their device name and store it in the app's local storage. They can then view their current location and perform actions like opening their location in maps or syncing the location with the central hub.
2. **Master View**: In this view, the central hub displays the locations of all registered devices. Users can refresh the device list to get the latest locations.

The app includes the following key features:
- User authentication is not required, and users can directly enter their device name.
- Users can store their device name locally using AsyncStorage.
- The app utilizes the Expo Location API to fetch the device's current location.
- Firebase Firestore is used to store and retrieve device locations.
- Users can open their current location in maps using the device's default map application.
- The app provides options to sync the device's location with the central hub and update the last modified timestamp.

## Screenshots

**User View:**
![User View](screenshots/user_view.png)
This screenshot shows the user view where the user can enter their device name and view their current location.

**Master View:**
![Master View](screenshots/master_view.png)
This screenshot displays the master view where the central hub shows the locations of all registered devices.

## Setup Instructions

To set up the Ghosh Barir Mobile Kothay app, follow these steps:

1. Clone the repository to your local machine using the following command:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd ghosh-barir-mobile-kothay
   ```
3. Install the required dependencies using either npm or yarn:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
4. Create a Firebase project and set up Firestore as the backend database. Obtain the Firebase configuration object.
5. Create a file named `firebaseConfig.js` in the project root directory and export the Firebase configuration object as shown below:
   ```javascript
   // firebaseConfig.js

   export const FIREBASE_DB = {
     // Firebase configuration object
   };
   ```
6. Connect your mobile device or start an emulator/simulator.
7. Start the Expo development server:
   ```
   npx expo start
   ```
8. Open the Expo client on your mobile device or use the emulator/simulator to run the app.
9. Follow the on-screen instructions to interact with the app.

## Technologies Used

The Ghosh Barir Mobile Kothay app utilizes the following technologies:

- React Native: A JavaScript framework for building mobile applications.
- Expo: A set of tools and services for building and deploying React Native applications.
- Firebase Firestore: A flexible, scalable NoSQL cloud database provided by Firebase.
- Expo Location: A module that provides access to the device's location.
- AsyncStorage: A simple, asynchronous, persistent key-value storage system for React Native.
- React Native Fonts: A package for loading custom fonts in React Native applications.

## Contributing

Contributions to the Ghosh Barir Mobile Kothay app are welcome. If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the project's GitHub repository.

When contributing, please ensure that you follow best practices and maintain code quality. Include tests for any new features or modifications to existing features.

## License

The Ghosh Barir Mobile Kothay app is released under the [MIT License](LICENSE). Make sure to review the license terms and comply with them when using or contributing to the project.
