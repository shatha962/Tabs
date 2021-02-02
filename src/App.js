import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Tabs from "./components/Tabs";


function App() {

  const [tabs, setTabs] = useState([
    {name: "Tab 1", isSelected: true},
    {name: "Tab 2", isSelected: false},
    {name: "Tab 3", isSelected: false}
  ]);

  const toggleTab = (idx) =>{
    tabs.forEach((tab, i) =>{
      let updateTab = tab;

      if (idx === i){
        updateTab.isSelected = true;
      }
      else{
        updateTab.isSelected = false;
      }

      setTabs(
          [...tabs.slice(0,i), updateTab].concat(tabs.slice(i+1))
      );
    }
    )
  }

  return (
      <div>
          {
          tabs.map((tab, i) =>{
          return <Tabs key={i} idx={i} name={tab.name} isSelected ={tab.isSelected} toggleTab = {toggleTab}/>
          })
          }
    
          {
          tabs.map((tab, i)=>{
            return tab.isSelected ? <h2> {tab.name} content is showing here. </h2> :null
          })
          }
              </div>
      );
}

export default App;