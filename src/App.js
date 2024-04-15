// import logo from './logo.svg';
import './App.css';
import ItemBox from './components/ItemBox';

function App() {
  const response=[
    {
      itemName:'Nirma',
      itemDay:'18',
      itemMonth:'June',
      itemYear:'1998'
    },
    {
      itemName:'Surf excle',
      itemDay:'13',
      itemMonth:'August',
      itemYear:'1998'
    },
    {
      itemName:'Ghari',
      itemDay:'19',
      itemMonth:'Nomber',
      itemYear:'1989'
    },
    {
      itemName:'Wheel',
      itemDay:'23',
      itemMonth:'Decmber',
      itemYear:'1984'
    },
    {
      itemName:'Tide',
      itemDay:'25',
      itemMonth:'July',
      itemYear:'1986'
    },
  ];


  return (
    <div className="App">
      <ItemBox items={response}></ItemBox>      
    </div>
  );
}

export default App;
