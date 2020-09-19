import React,{useState} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import Timer from "./Timer";
import TimerForm from "./TimerForm";

const EditableTimer = (props)=>{
    const {id, title, project, elapsed, isRunning, onFormRemove, onFormStartStop} = props;
    const [editFormOpen, setEditFormOpen] = useState(false);


    const handleEditPress=()=>{
        setEditFormOpen(true);
    }

    const handleFormClose = ()=>{
        setEditFormOpen(false);
    }
    const handleSubmit = (timer)=>{
        props.onFormSubmit(timer);
        handleFormClose();
    }

    const handleRemovePress=(rmid)=>{
        console.log(rmid);
        onFormRemove(rmid);
    }

    const handleStartStopPress=(startId)=>{
        onFormStartStop(startId);
    }
    if(editFormOpen){
        return(
            <View style={styles.container}>
                <TimerForm
                    id={id}
                    title={title}
                    project={project}
                    onFormClose={handleFormClose}
                    onFormSubmit = {handleSubmit}
                />
            </View>
        );
    }
	return(
		<View style={styles.container}>
			<Timer
                id={id}
                title={title}
                project={project}
                elapsed={elapsed}
                isRunning={isRunning}
                onEditPress={handleEditPress}
                onRemovePress = {handleRemovePress}
                onStartStopPress = {handleStartStopPress}
            />
		</View>
	);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30,
        justifyContent:"space-between"
    }
});

export default EditableTimer;