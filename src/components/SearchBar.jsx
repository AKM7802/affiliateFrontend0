const SearchBar=({changeHandler,searchElement,searchdata,shead})=>{
    return(
        <>
            <div className='searchbarInnerContainer'>
                <input type="search" id="searchbar" onChange={changeHandler} value={searchElement} className={`searchbar ${shead && "headercss" }`} placeholder="SEARCH FOR PROGRAMS"></input>
                <i class="fa-solid fa-magnifying-glass search-icon"></i>                            
                            
            </div>
            <div className={`searchData hide ${shead && "headercsscontainer"}`}>
                {searchdata.length !== 0 ? searchdata.map(item=>{
                        return <a  href={`/algo/${item.slug}`}><p className='searchList'>{item.programName}</p></a>
                }) : <p className="searchErr">No Results Found</p>}
            </div>
        </>
    )
}

export default SearchBar