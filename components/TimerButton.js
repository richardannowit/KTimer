import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";

const TimerButton = (props)=>{
    const {small,color,title, onPress} = props;
	return(
		<TouchableOpacity
            style={[styles.button, {borderColor: color}]}
            onPress={onPress}
        >
            <Text 
                style={[styles.buttonText, small?styles.smallText:styles.largeText,{color}]}
            
            >
                {title}
            </Text>
        </TouchableOpacity>
	);
}

const styles = StyleSheet.create({
    button:{
        minWidth: 100,
        borderWidth: 2,
        borderRadius: 5
    }, 
    buttonText:{
        textAlign:'center',
        fontWeight:"bold"
    },
    smallText:{
        fontSize: 14,
        padding: 5
    },
    largeText:{
        fontSize: 18,
        padding: 7
    }
});

export default TimerButton;