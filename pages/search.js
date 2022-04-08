import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits, RefinementList  }
    from "react-instantsearch-dom";

    const searchClient = algoliasearch(
      'VN3BCP1RCW',
      'e4190f9c2f41083cf64ec16c723fbe5b',
    );
    
// export default function SearchBar() {
//     return (
//       <>
//         <InstantSearch 
//           searchClient={searchClient} 
//           indexName="shopify_devpocproducts">
    
//           {/* Adding Search Box */}
//           <SearchBox />
//           <RefinementList attribute="Title" />
//           {/* Adding Data */}
//           <Hits />
//         </InstantSearch>
//       </>
//     );
//   }

export default function SearchBar() {

    const Hit = ({ hit }) => {
      return (
        <HitContainer>
          <span>{hit.type}</span>
          <h2><a href={hit.path}>{hit.title}</a></h2>
          {
            hit.content &&
              <p>{ `${hit.content.substring(0,150)} ...` }</p>
          }
          <hr />
        </HitContainer>
      )
    }
  
    return (
      <>
          <InstantSearch
            searchClient={ searchClient } 
            indexName="shopify_devpocproducts" >
            
            <CustomSearchBox 
              translations={{
                submitTitle: 'Submit your search query.',
                resetTitle: 'Clear your search query.',
                placeholder: 'What are you looking for?',
              }}
            />
            <HitsAndFilters>
              <AllFilters>
                <h3>Topics</h3>
                <FilterMenu
                  attribute="topics" 
                  limit={5}
                  showMore
                />
                <h3>Tags</h3>
                <FilterMenu
                  attribute="tags" 
                  limit={5}
                  showMore
                />
              </AllFilters>
              <AllHits hitComponent={Hit} />
            </HitsAndFilters>
          </InstantSearch>
        </>
      )
    }