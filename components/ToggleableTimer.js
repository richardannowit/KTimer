import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableHighlight} from "react-native";
import TimerButton from "./TimerButton";
import TimerForm from "./TimerForm";

const ToggleableTimer = (props)=>{
    const [isOpen, setIsopen] = useState(false);

    const handleFormOpen=()=>{
        setIsopen(true);
    }
    const handleFormClose = ()=>{
        setIsopen(false);
    }
    const handleFormSubmit=(timer)=>{
        props.onFormSubmit(timer);
        handleFormClose();
    }
	return(
		<View style={styles.container}>
            {
                !isOpen && 
                <TimerButton 
                    color="#4D4D4D" 
                    title="+" 
                    onPress={handleFormOpen}
                    
                    
                
                />
            }
			{
                isOpen && 
                <TimerForm
                    onFormSubmit= {handleFormSubmit}
                    onFormClose = {handleFormClose}
                />
            }
		</View>
	);
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        marginVertical: 30,
        marginHorizontal: 20,
    },
    createTimer:{
        borderWidth: 2,
        borderColor: "#4D4D4D",
        borderRadius: 10,
        paddingHorizontal:20,
        paddingTop: 5,
        paddingBottom: 5,
        
        alignItems: "center"
    }, 
    plus:{
        fontSize: 22
    }
});

export default ToggleableTimer;