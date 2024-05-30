import Header from'./component/Header';
import Main from './component/Main';
import Basket from './component/Basket';

function App() {
  return (
    <div >
      <Header/>
      <div className='row'>
        <Main />
        <Basket/>
      </div>
    </div>
  );
}

export default App;
