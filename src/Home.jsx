import { useState,useEffect } from 'react'


const Home=(props)=>{
    const [containerdata,setcontainerdata]=useState([])
    const [productdata,setproductdata]=useState([])
    let index=0;
    const loadContent=async()=>{
        
        const containerlink=await fetch(`${props.url}api/containers`)
        const containerjson=await containerlink.json()
        
        setcontainerdata(containerjson.data.doc)
        
        const productlink=await fetch(`${props.url}api/products`)
        const productjson=await productlink.json()
        
        setproductdata(productjson.data.doc)

        

    }
   
    useEffect(()=>{
        loadContent();
    },[])

    return(
    <div class="content" id="content">
        <div class="home-content-block">
            {containerdata.map((container)=>{
                index=0;
                return(<>
                    <h1 class="content-block-heading"><a href={`/${container.slug}`}>{container.cName} <i class="fa-solid fa-chevron-right"></i> </a></h1>
                    
                    <div class="content-card-collection">
                        {productdata.map((product,i)=>{
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
    )
}

export default Home