import React from 'react';
import { View, StyleSheet, Text, Button, SafeAreaView } from 'react-native';


const TrackListScreen = ({ navigation }) => {
    return <SafeAreaView>
        <Text>
            Track List Screen
        </Text>
        <Button title={'go to TrackDetail'}
            onPress={()=> navigation.navigate('TrackDetail')}/>
    </SafeAreaView>
};

const styles = StyleSheet.create({

});

export default TrackListScreen;