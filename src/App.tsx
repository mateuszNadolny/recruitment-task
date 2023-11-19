import Header from './components/Header/Header';
import Searchbar from './components/Searchbar/Searchbar';
import DropdownSection from './components/Dropdown/DropdownSection';
import CardSection from './components/Card/CardSection';

import { FilterProvider } from './contexts/FilterContext';
function App() {
  return (
    <>
      <Header />
      <FilterProvider>
        <Searchbar />
        <DropdownSection />
        <CardSection />
      </FilterProvider>
    </>
  );
}

export default App;
