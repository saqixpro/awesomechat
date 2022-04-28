import React, { useState } from 'react'
import {Button, View, FlatList, Dimensions, SafeAreaView, ActivityIndicator, Text, Alert, TouchableOpacity} from 'react-native';
import { Provider } from 'react-redux'
import MainNav from './src/navigation'
import store from './src/store/store'
import Feather from 'react-native-vector-icons/Feather';
import CheckBox from './__components/checkbox';

const {width} = Dimensions.get('screen');


const Question = ({question, onSelectAnswer}) => (
  <View style={{width: width / 1.05, marginVertical: 10, alignSelf: 'center'}}>
    <Text style={{fontSize: 16, fontWeight:"bold", paddingVertical: 10}}>{question.text}</Text>
    <View style={{width: width / 1.1,  alignSelf: 'center'}}>
      {question.answers.map((answer, index) => (
        <CheckBox checked={question.selected == answer} onChange={() => onSelectAnswer(index)} title={answer}  />
      ))}
    </View>
  </View>
)



const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([
    {
      id: "1234567894",
      text: "What is a Carrot?",
      answers: ["Fruit", "Vegetable", "Hybrid", "Chocolate"],
      correct: "Vegetable",
      selected: null
    },
    {
      id: "1234567893",
      text: "What is a Carrot?",
      answers: ["Fruit", "Vegetable", "Hybrid", "Chocolate"],
      correct: "Vegetable",
      selected: null
    },
    {
      id: "1234567892",
      text: "What is a Carrot?",
      answers: ["Fruit", "Vegetable", "Hybrid", "Chocolate"],
      correct: "Vegetable",
      selected: null
    },
    {
      id: "1234567891",
      text: "What is a Carrot?",
      answers: ["Fruit", "Vegetable", "Hybrid", "Chocolate"],
      correct: "Vegetable",
      selected: null
    },
  ])
  

  const onChange = (question, answerIndex) => {
      const _question = questions.find(item => item.id == question.id);
      _question.selected = question.answers[answerIndex];
      // update the questions
      setQuestions(prev => prev.map((v, i) => v.id == _question.id ? _question : v));
  }


  



  return ( <View style={{flex: 1}}>
    <SafeAreaView />
      <FlatList style={{flex: 1}} data={questions} renderItem={({item, index})=> (
        <Question question={item} onSelectAnswer={(i) => onChange(item, i)} />
      )} />
    </View>)
}

export default App;