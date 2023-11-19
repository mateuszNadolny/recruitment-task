import Header from './components/Header/Header';
import Searchbar from './components/Searchbar/Searchbar';
import DropdownSection from './components/Dropdown/DropdownSection';
import CardSection from './components/Card/CardSection';

import { FilterProvider } from './contexts/FilterContext';
import { SortProvider } from './contexts/SortContext';

function App() {
  return (
    <>
      <Header />
      <FilterProvider>
        <SortProvider>
          <Searchbar />
          <DropdownSection />
          <CardSection />
        </SortProvider>
      </FilterProvider>
    </>
  );
}

export default App;
