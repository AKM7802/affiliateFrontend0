import { useState,useEffect } from "react"

const Category=(props)=>{
    const url=props.url
    const [contents,setcontents]=useState([])
    const loadContent=async()=>{
        
        const containerlink=await fetch(`${props.url}api/containers`)
        const containerjson=await containerlink.json()
        
        setcontents(containerjson.data.doc)
    }

    useEffect(()=>{
        loadContent();

        
    },[])

    return (
        
        <div className="category-content " id="category">
            <h1 className="content-block-heading cat-head">CATEGORY</h1>
            <div className="category-block">
                {contents.map((content)=>{
                    return(
                        
                        <div className="category-file">
                            <a href={`/${content.slug}`}>
                                <img src={`img/containers/${content.images[0]}`} className="file-image"></img>
                                <h2 className="file-image-header">{content.cName}</h2>
                            
                            <div className="trans"></div>
                            </a>
                        </div>
                        
                    )
                })
                }
                
               
            </div>
        </div>
    )
}
   
export default Category
    
    
    
