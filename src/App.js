import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
    return (
       <div>
           <NavBar />
           <ItemListContainer greeting="bienvenido usuario!"/>
       </div>
    );
}

export default App;