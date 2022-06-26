import './App.css';
import Title from './Title.js'

function App() {
  const names = ['Pedro', 'Juan', 'German']
  return (
    <div>
      {names.map(name => 
        <Title name = {name} />
      )};
    </div>
  );
}

export default App;
