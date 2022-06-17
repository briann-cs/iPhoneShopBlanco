import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
    return (
        <> 
        <NavBar />
        <br/>
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row">
                <ItemListContainer/>
                </div>
            </div>
        </div>
        </>
    );
}

export default App;