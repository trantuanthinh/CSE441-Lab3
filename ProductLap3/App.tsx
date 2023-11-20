import React from 'react';
import MainScreen from './View/MainScreen';
// import firestore from '@react-native-firebase/firestore';

const App = () => {
    // const addDataToFirestore = async () => {
    //     try {
    //         const collectionName = 'users'; // Specify your collection name here
    //         const dataToAdd = {
    //             name: 'John Doe',
    //             email: 'john@example.com',
    //             // Add other fields as needed
    //         };

    //         // Add data to Firestore
    //         await firestore().collection(collectionName).add(dataToAdd);

    //         console.log('Data added successfully!');
    //     } catch (error) {
    //         console.error('Error adding data to Firestore:', error.message);
    //     }
    // };

    return (
        <MainScreen />
        // <Button
        //     title="Facebook Sign-In"
        //     onPress={addDataToFirestore}
        // />
    );
};

export default App;
