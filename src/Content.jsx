
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Content=(props)=>{
    const [containerdata,setcontainerdata]=useState({})
    const [productdata,setproductdata]=useState([])
    let {id}=useParams()
    const loadContent=async()=>{
        const containerlink=await fetch(`${props.url}api/containers/${id}`)
        const containerjson=await containerlink.json()
        setcontainerdata(containerjson.data.doc)
        
        const productlink=await fetch(`${props.url}api/products`)
        const productjson=await productlink.json()
        let productHolder=[]

        productjson.data.doc.forEach((product)=>{
                if(product.productContainer===containerjson.data.doc._id){
                    productHolder.push(product)
                }
        })

        setproductdata(productHolder)
        
        
    }
    useEffect(()=>{
        loadContent();
        document.querySelector('.navbar').classList.add('sticky2');
        document.querySelector('.cat').setAttribute("href","/category");
        document.querySelector('.abt').setAttribute("href","/about");
        
    },[])
    
    return(
                <div className="top-list-content">
                {Object.keys(containerdata).length !==0 ? 
                    <>
                    <div className="title">
                        <h1 className="page-title">{ containerdata.cName }</h1>
                        <div className="title-div">
                            
                            <p className="title-description">{containerdata.containerDescription}</p>
                        
                        
                        </div>
                    </div>
                <div className="items">
                    {productdata.map((product,i)=>{
                        return(
                        <div class="item0">
                            <h1 className="item-title">{i+1}.{product.productName}</h1>
                            <div className="item-pilot-bar">
                               <div className='image-container'>
                                 <img src={`img/products/${product.images[0]}`} className="item-image" alt=""></img>
                               </div>
                                
                                
                               
                                <div className="item-details">
                                    <div className="container">
                                        <h3 className="item-author">Stars: <span>{product.stars}</span></h3>
                                        <h3 className="item-rating">Forked By: <span>{product.forked}</span></h3>
                                        
                                    </div>
                                    
                                    <a href={product.repo_url} className="item-link">Check out the repo!</a>
                                </div>
                            </div>
                        
                            <p className="item-description">{product.description}</p>
                            
                        </div>)
                    })}
                    
                </div>
                </>
                : null}
                
            
                </div>
            
        
            
    )
}

export default Content