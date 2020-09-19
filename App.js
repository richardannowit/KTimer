import React,{useState,useEffect} from "react";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import {View, Text, StyleSheet, ScrollView} from "react-native";
import ToggleableTimer from "./components/ToggleableTimer";
import EditableTimer from "./components/EditableTimer";

const App = ()=>{

	const [timers,setTimers] = useState([
		{
			id: uuidv4(),
			title: "Mow the law",
			project: "House Chores",
			elapsed: 8986300,
			isRunning: false
		},
		{
			id: uuidv4(),
			title: "Bake squash",
			project: "Kitchen Chores",
			elapsed: 3890985,
			isRunning: false
		}

	])


	useEffect(()=>{
		const TIME_INTERVAL = 1000;
		var intervalId = setInterval(()=>{
			const newTimers = timers.map(timer=>{
				const {isRunning, elapsed} = timer;
				return {
					...timer,
					elapsed: isRunning?elapsed+TIME_INTERVAL:elapsed
				}
			});
			setTimers(newTimers);
		},TIME_INTERVAL);

		//ComponentWillMount
		return ()=>{
			clearInterval(intervalId);
		}
	})

	const handleCreateFormSubmit=timer=>{
		const newTimer = {
			id: uuidv4(),
			title: timer.title,
			project: timer.project,
			elapsed: 0,
			isRunning: false
		}
		setTimers([newTimer,...timers]);
	}

	const handleUpdateFormSubmit = timerUpdated=>{
		const newTimer = timers.map((timer)=>{
			if(timer.id===timerUpdated.id){
				const {title,project} = timerUpdated;
				return ({
					...timer,
					title,
					project
				})
			}
			return timer;
		});
		setTimers(newTimer);
	}

	const handleRemoveFormSubmit=(id)=>{
		const newTimer = timers.filter((timer)=>{
			return timer.id!==id;
		})
		setTimers(newTimer);
	}

	const handleStartStop = (id)=>{
		const newTimers = timers.map(timer=>{
			if(timer.id===id){
				return {
					...timer,
					isRunning: !timer.isRunning,
					elapsed: timer.elapsed+1000
				}
			}
			return timer;
		})
		setTimers(newTimers);
	}
	return(
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>KTimer</Text>
			</View>
			
			<ScrollView style={styles.timerList}>
				<ToggleableTimer 
					style={styles.toggleTimer} 
					isOpen={false}
					onFormSubmit={handleCreateFormSubmit}
				
				/>
			{timers.map(({id,title,project,elapsed,isRunning})=>(
				<EditableTimer
					key={id}
					id={id}
					title={title}
					project={project}
					elapsed={elapsed}
					isRunning ={isRunning}
					onFormSubmit={handleUpdateFormSubmit}
					onFormRemove={handleRemoveFormSubmit}
					onFormStartStop={handleStartStop}
				/>
			))}
			</ScrollView>
		</View>
	);
	


}

const styles = StyleSheet.create({
	container:{
		flex:1
	},
	titleContainer:{
		borderBottomColor: "#D6D7DA",
		borderBottomWidth: 2,
		paddingTop: 15,
		paddingBottom: 15

	},
	title:{
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center"
		
	}, 
	timerList:{
		paddingBottom: 15,
		flex: 1
	}
});


export default App;