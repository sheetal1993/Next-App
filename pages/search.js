import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits, RefinementList  }
    from "react-instantsearch-dom";

    const searchClient = algoliasearch(
      'VN3BCP1RCW',
      'e4190f9c2f41083cf64ec16c723fbe5b',
    );
    
export default function SearchBar() {
    return (
      <>
        <InstantSearch 
          searchClient={searchClient} 
          indexName="shopify_devpocproducts">
    
          {/* Adding Search Box */}
          <SearchBox />
          <RefinementList attribute="Title" />
          <RefinementList attribute="Tags" />
          <RefinementList attribute="TagFilters" />
          <RefinementList attribute="NumericFilters" />
          {/* Adding Data */}
          <Hits />
        </InstantSearch>
      </>
    );
  }