import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import TimerButton from "./TimerButton";
import {millisecondsToHuman} from "../utils/TimerUtils";

const Timer = (props)=>{
    const {id, title, project, elapsed, isRunning, onEditPress,onRemovePress, onStartStopPress} = props;
    const elapsedString = millisecondsToHuman(elapsed);

    const handleRemovePress=()=>{
        onRemovePress(id);
    }

    const handleStartStop=()=>{
        onStartStopPress(id);
    }
	return(
		<View style={styles.container}>
			<View style={styles.jobContainer}>
				<Text style={[styles.title, styles.textSmall]}>{title}</Text>
                <Text style={[styles.project, styles.textSmall]}>{project}</Text>
			</View>
            <Text style={[styles.textLarge, styles.timer]}>{elapsedString}</Text>
            <View style={styles.buttonGroup}>
                <TimerButton small color="blue" title="Edit" onPress={onEditPress}></TimerButton>
                <TimerButton small color="blue" title="Remove" onPress={handleRemovePress}></TimerButton>
            </View>
            {
                !isRunning && 
                <TimerButton color="#3DD778" title="Start" onPress={handleStartStop}></TimerButton>
            }
            {
                isRunning && 
                <TimerButton color="red" title="Stop" onPress={handleStartStop}></TimerButton>
            }
            
		</View>
	);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderColor: "#B2B2B2",
        borderRadius: 15,
        borderWidth: 2,
        padding: 15,
    },
    jobContainer:{
        flex: 1,
        marginBottom: 10

    },
    textSmall:{
        fontSize: 14,
        fontFamily: "Roboto"
    },
    textLarge:{
        fontSize: 25
    },
    title:{
        fontWeight: "bold"
    },
    timer:{
        flex:1,
        textAlign:'center',
        fontWeight:"bold",
        marginBottom: 10
    },
    buttonGroup:{
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    }
});

export default Timer;