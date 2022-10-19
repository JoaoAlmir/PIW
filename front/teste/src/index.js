import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/commom/Card/Card';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let info_gente = [
  {
    nome:"ronaldo",
    idade:"15"
  },
  {
    nome:"pedro",
    idade:"40"
  },
  {
    nome:"maria",
    idade:"52"
  },

]

let gente=[];

for(let info of info_gente){
  console.log(info);
  gente.push(
    <Card nome={info.nome} idade={info.idade}></Card>
  )
}
root.render(
  <React.StrictMode>
    {/* <Card nome='ronaldo' idade='15'/>
    <Card nome='pedro'idade='43'/>
    <Card nome='maria'idade='38'/> */}
    {/* ou */}
    {gente}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
