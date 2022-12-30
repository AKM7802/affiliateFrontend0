import { useEffect,useState } from "react"


import { useLocation } from "react-router-dom"
import SearchBar from "./components/SearchBar"

const Header=({changeHandler,searchElement,searchdata})=>{
    const location=useLocation()
    const [enableSearch,setEnableSearch]=useState(false)
    
    useEffect(()=>{
        
        if(location.pathname !== "/"){
            document.querySelector('.cat').setAttribute("href","/category");
            document.querySelector('.navbar').classList.add('sticky2')
            setEnableSearch(true)
            
        }else setEnableSearch(false)
    },[location])
    

    return(
        <nav class="navbar navbar-expand-lg header">
            <div class="container-fluid">
                        <a class="navbar-brand" href="/">FindYourWayOnline.com</a>
                   
                    
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fa-solid fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-list">
                                <li class="nav-item">
                                    <a class="nav-link hom" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link cat" href="#category">Category</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link abt" href="/algo-content">Algorithms</a>
                                </li>
                                
                                
                                
                            </ul>
                            {
                                enableSearch===true && 
                                <div className="searchHeaderContainer">
                                    <SearchBar changeHandler={changeHandler} searchElement={searchElement} searchdata={searchdata} shead={true}/> 
                                </div>

                            }
                            
                        </div>
                    
                     
               
                
                    
                
            </div>
        </nav>
    )
}

export default Header