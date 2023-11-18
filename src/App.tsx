import Header from './components/Header/Header';
import Searchbar from './components/Searchbar/Searchbar';
import DropdownSection from './components/Dropdown/DropdownSection';
import CardSection from './components/Card/CardSection';
function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <DropdownSection />
      <CardSection />
    </div>
  );
}

export default App;
