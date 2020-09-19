import React,{useState} from "react";
import {View, Text, StyleSheet, Button, TextInput} from "react-native";
import TimerButton from "./TimerButton";

const TimerForm = (props)=>{
    const {id, onFormClose, onFormSubmit} = props;
    const [title,setTitle] = useState(id?props.title:"");
    const [project,setProject] = useState(id?props.project:"");
    const submitText = id?"Update":"Create";

    const handleTitleChange= (title)=>{
        setTitle(title);
    }
    const handleProjectChange = project=>{
        setProject(project);
    }
    const handleSubmit = ()=>{
        onFormSubmit({
            title,
            project,
            id
        })
    }
	return(
		<View style={styles.container}>
			<View style={styles.attributeContainer}>
                <Text style={styles.labelTitle}>Title</Text>
                <TextInput
                    style={styles.textInput}
                    value={title}
                    onChangeText={handleTitleChange}
                />
            </View>

            <View style={styles.attributeContainer}>
                <Text style={styles.labelTitle}>Project</Text>
                <TextInput
                    style={styles.textInput}
                    value={project}
                    onChangeText = {handleProjectChange}
                />
            </View>
            <View style={styles.buttonGroup}>
                <TimerButton small color="#3DD778" title={submitText} onPress={handleSubmit}></TimerButton>
                <TimerButton small color="red" title="Cancel" onPress={onFormClose}></TimerButton>
            </View>
		</View>
	);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:5,
        borderColor: "#B2B2B2",
        borderRadius: 15,
        borderWidth: 2,
        padding: 15,
    },
    attributeContainer:{
        marginVertical: 7
    },
    labelTitle:{
        fontWeight:"bold",
        fontSize: 15
    },
    textInput:{
        borderColor:"#d6d7da",
        borderWidth: 1,
        height: 40,
        borderRadius: 5,
        marginVertical: 5,
    },
    buttonGroup:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical: 10
    }
});

export default TimerForm;