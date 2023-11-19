import Header from './components/Header/Header';
import Searchbar from './components/Searchbar/Searchbar';
import DropdownSection from './components/Dropdown/DropdownSection';
import CardSection from './components/Card/CardSection';

import { FilterProvider } from './contexts/FilterContext';
import { SortProvider } from './contexts/SortContext';
import { SearchProvider } from './contexts/SearchContext';

function App() {
  return (
    <>
      <Header />
      <SearchProvider>
        <FilterProvider>
          <SortProvider>
            <Searchbar />
            <DropdownSection />
            <CardSection />
          </SortProvider>
        </FilterProvider>
      </SearchProvider>
    </>
  );
}

export default App;
