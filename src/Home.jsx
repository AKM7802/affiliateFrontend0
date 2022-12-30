import { useState,useEffect } from 'react'


import SearchBar from './components/SearchBar'

const Home=(props)=>{
    
    let index=0;
    return(
    <>
        <div className='banner'>
                <div className='banner-content'>
                    <img className='banner-image' src="/img/banner/banner02.jpg" alt=""></img>
                    {/* <div className='banner-overlay'></div> */}
                    {/* <h2 className='banner-heading'>EXPLORE</h2> */}
                    <div className='searchbarContainer'>
                        <SearchBar changeHandler={props.changeHandler} searchElement={props.searchElement} searchdata={props.searchdata}/> 
                    </div>
                    {/* <button className="search-btn" onClick={submitHandler}> SEARCH</button> */}
                    <a href='#content'><div className='banner-btn'><i class="fa-solid fa-angles-down"></i></div></a>
                </div>
        </div>
        <div class="content" id="content">
            <div class="home-content-block">
                <h1 className='content-block-heading'><a href="/algo-content">ALGORITHMS & PROGRAMS <i class="fa-solid fa-chevron-right"></i></a></h1>
                <div class="content-card-collection">
                    { props.programdata.map((programs,i)=>{
                        if(i>10) return null
                        return(
                            <a href={`/algo/${programs.slug}`}>
                                <div class="program-home-card">
                                    <div><span className='program-home-name'>{programs.programName}</span></div>
                                </div>
                            </a>
                        )
                    })}
                    

                    
                </div>
                {props.containerdata.map((container)=>{
                    index=0;
                    return(<>
                        <h1 class="content-block-heading"><a href={`/${container.slug}`}>{container.cName} <i class="fa-solid fa-chevron-right"></i> </a></h1>
                        
                        <div class="content-card-collection">
                            {props.productdata.map((product,i)=>{
                                if(product.productContainer===container._id){
                                index++;
                                return(
                                    <a href={product.repo_url} class="content-card">
                                    <div >
                                        <div className='position'>{index}</div>
                                        <img class="product-pic" src={`img/products/${product.images[0]}`} alt=""></img>
                                        <div class="card-details">
                                            <h2 class="product-title">{product.productName}</h2>
                                            <h4 class="git-info">Stars: <span>{product.stars}</span></h4>
                                            <h4 class="git-info">Forked by: <span>{product.forked}</span></h4>
                                        
                                            
                                            <div class="buy-now">
                                                <button>Check Out The Repo!</button>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    </a>
                                )}else return null
                            })}
                        
                            

                            
                        
                        </div> 
                    
                    </>)
                })}
                    
                
                
                
            </div>

        </div>
    </>
    )
}

export default Home