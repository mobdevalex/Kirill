import React, { Component } from 'react';

import { StyleSheet, ScrollView, Image, Text, View, Alert } from 'react-native';

export default class App extends Component<{}> {

    render() {

        // mix emoji
        shuffle(emoji_images);

        return (


            <ScrollView style={styles.MainContainer}>

                {shuffle(initialArr).map((item, key) => {

                    return (

                        <View key={key} style={{backgroundColor: '#f1f1f1'}}>

                            <Text style={styles.textWhite}>

                                <Image style={styles.emoji} source={emoji_images[key].p} />

                                </Text>
                            <Text style={styles.TextStyle}>{item.id}) {item.preview} {item.text} </Text>


                            {/*vote*/}
                            <View style={styles.voteView}>

                                <View style={{width: 50, height: 50}}>

                                    <Text style={styles.voteNumber}>
                                        + 0
                                    </Text>

                                </View>


                                <View style={{width: 50, height: 50}}>

                                    <Text style={styles.textWhite}>

                                        <Image style={styles.emoji_thumb}
                                               source={require('./images/Thumbs_Up_Hand_Sign_Emoji_42x42.png')}
                                        />
                                    </Text>
                                </View>


                                <View style={{width: 50, height: 50}}>


                                    <Text style={styles.textWhite}>

                                        <Image style={styles.emoji_thumb}
                                               source={require('./images/Thumbs_Down_Sign_Emoji_Icon_42x42.png')}
                                        />

                                    </Text>

                                </View>


                                <View style={{width: 50, height: 50}}>

                                    <Text style={styles.voteNumber}>
                                        - 0
                                    </Text>

                                </View>

                            </View>

                        </View>


                    );
                })}

            </ScrollView>
        );

    }
}

function shuffle(arra1) {


    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}


let initialArr = [
    {
        id: 1,
        preview: "Can a kangaroo jump higher than a house?\n\n",
        text: "Of course, a house doesn’t jump at all."
    },

    {
        id: 2,
        preview: "Doctor: \"I'm sorry but you suffer from a terminal illness and have only 10 to live.\n\n",

        text: "Patient: \"What do you mean, 10? 10 what? Months? Weeks?!\"\n" +
                "\n Doctor: \"Nine.\"\n"
    },

    {
        id: 3,
        preview: "A man asks a farmer near a field, “Sorry sir, would you mind if I crossed your field instead of going around it? You see, I have to catch the 4:23 train.”\n\n",
        text: "The farmer says, “Sure, go right ahead. And if my bull sees you, you’ll even catch the 4:11 one.”"
    },

    {
        id: 4,
        preview: "A man asks a farmer near a field, “Sorry sir, would you mind if I crossed your field instead of going around it? You see, I have to catch the 4:23 train.”\n\n",
        text: "The farmer says, “Sure, go right ahead. And if my bull sees you, you’ll even catch the 4:11 one.”\n"
    },

    {
        id: 5,
        preview: "Anton, do you think I’m a bad mother?\n\n",
        text: "My name is Paul."
    },

    {
        id: 6,
        preview: "My dog used to chase people on a bike a lot. It got so bad,\n\n",
        text: "finally I had to take his bike away.\n"
    },

    {
        id: 7,
        preview: "What is the difference between a snowman and a snowwoman?\n\n",
        text: "Snowballs\n"
    },

    {
        id: 8,
        preview: "Mom, where do tampons go?\n\n",
        text: "\"Where the babies come from, darling.\" \n\n In the stork? \n"
    },

    {
        id: 9,
        preview: "My wife suffers from a drinking problem.\n\n Oh is she an alcoholic? \n\n",
        text: "No, I am, but she’s the one who suffers.\n"
    },

    {
        id: 10,
        preview: "I managed to lose my rifle when I was in the army. I had to pay $855 to cover the loss. \n\n",
        text: "I’m starting to understand why a Navy captain always goes down with his ship."
    },

];

let emoji_images = [

    {
        p: require('./images/Heart_Eyes_Emoji_42x42.png'),
    },

    {
        p: require('./images/Relieved_Emoji_Icon_42x42.png'),
    },

    {
        p: require('./images/Slightly_Smiling_Face_Emoji_Icon_42x42.png'),
    },

    {
        p: require('./images/Smiling_Emoji_with_Eyes_Opened_Icon_42x42.png'),
    },

    {
        p: require('./images/Smiling_Emoji_with_Smiling_Eyes_Icon_42x42.png'),
    },

    {
        p: require('./images/Smiling_Face_Emoji_Icon_42x42.png'),
    },

    {
        p: require('./images/Smiling_Face_with_Tightly_Closed_eyes_Icon_42x42.png'),
    },

    {
        p: require('./images/Smiling_with_Sweat_Emoji_Icon_42x42.png'),
    },

    {
        p: require('./images/Tongue_Out_Emoji_with_Winking_Eye_Icon_42x42.png'),
    },

    {
        p: require('./images/Upside-Down_Face_Emoji_Icon_42x42.png'),
    }

]


const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        margin: 10,

    },

    TextStyle:{
        fontSize : 25,
        textAlign: 'center'
    },

    textWhite:{

        textAlign: 'center',

        paddingTop: 15

    },

    voteNumber: {

        paddingTop: 15,
        textAlign: 'center',
    },

    emoji: {


        marginTop: 25,
        width: 100,
        height: 100
    },

    emoji_thumb: {

        width: 70,
        height: 70
    },

    separator: {

        marginTop: 25,
    },

    voteView: {

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        borderBottomColor: '#aecdce',
        borderBottomWidth: 1
    }

});

