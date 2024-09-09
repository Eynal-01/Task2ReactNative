import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../Style'

const AddTaskCard = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [note, setNote] = useState('');

  const handleSave = () => {
    console.log("Task Title:", taskTitle);
    console.log("Category:", category);
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Note:", note);
  };

  return (
    <SafeAreaView>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <View style={styles.containerX}>
            <Text style={{ fontSize: 20, color: 'black', marginLeft: "34%", marginTop: "13%" }}>X</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add New Task</Text>
      </View>

      {/* Text Input */}
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 15, color: 'black', marginBottom: "3%", fontWeight: '500' }}>Task Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Task Title"
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
      </View>

      {/* Category */}
      <View style={styles.categoryContainer}>
        <Text style={{ fontSize: 15, color: 'black', marginBottom: "3%", fontWeight: '500' }}>Category</Text>
        <TouchableOpacity 
          style={styles.categoryButton} 
          onPress={() => setCategory('Work')}
        >
          <Text style={styles.buttonText}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.categoryButton} 
          onPress={() => setCategory('Event')}
        >
          <Text style={styles.buttonText}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.categoryButton} 
          onPress={() => setCategory('Goal')}
        >
          <Text style={styles.buttonText}>Goal</Text>
        </TouchableOpacity>
      </View>

      {/* Date and Time */}
      <View style={styles.datetimeContainer}>
        <View style={styles.dateContainer}>
          <Text style={{ fontSize: 15, color: 'black', fontWeight: '500', marginBottom: "3%" }}>Date</Text>
          <TextInput 
            style={styles.dateInput} 
            placeholder='Date' 
            value={date}
            onChangeText={setDate}
          />
        </View>

        <View style={styles.timeContainer}>
          <Text style={{ fontSize: 15, color: 'black', fontWeight: '500', marginBottom: "2%" }}>Time</Text>
          <TextInput 
            style={styles.timeInput} 
            placeholder='Time' 
            value={time}
            onChangeText={setTime}
          />
        </View>
      </View>

      {/* Note */}
      <View style={styles.noteContainer}>
        <Text style={{ fontSize: 15, color: 'black', fontWeight: '500', marginBottom: "2%" }}>Note</Text>
        <TextInput 
          multiline={true} 
          style={styles.note} 
          placeholder='Note'
          value={note}
          onChangeText={setNote}
        />
      </View>

      {/* Save Button */}
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

export default AddTaskCard;