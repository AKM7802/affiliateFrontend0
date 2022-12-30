import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import hljs from "highlight.js/lib/core";
import c from "highlight.js/lib/languages/c"
hljs.registerLanguage('c', c);



const Programpage=(props)=>{
     const [programData,setprogramData]=useState({});
     const {id}=useParams()

    const loadProgram=async()=>{
       
        const programlink=await fetch(`${props.url}api/programs/${id}`)
        const programjson=await programlink.json()
        setprogramData(programjson.data.doc)
        hljs.highlightAll()
        
    }   
    
    const copyFunction=()=>{
        navigator.clipboard.writeText(document.querySelector('.program').textContent)
        document.querySelector('.copy-btn').innerHTML='<i class="fa-solid fa-check"></i>'
    }

    useEffect(()=>{
       loadProgram();
      
       
    },[])
    return(
        <div className="program-page">
           
            <h2 className="program-title">{programData.programName}</h2>
            <p className="program-description">{programData.description}</p>
            <h3 className="algorithm-title">ALGORITHM</h3>
            <div className="algorithm-container">
                {programData.algorithm?.map((res)=>{
                    return(
                        <p className="algorithm-step" style={{marginLeft:`${(res[0].split('.').length-1)*2}rem`}}>{res[0].split('.').length-1<3 ? `Step ${res[0]}:`:" "} {res[1]}</p>
                    )
                })}
               
                
            </div>
            <h3 className="program-heading">PROGRAM</h3>
            <div className="program-encloser">
                <button className="copy-btn" onClick={copyFunction}><i class="fa-regular fa-clipboard"></i></button>
                <pre><code className="language-c code-bg program" dangerouslySetInnerHTML={{__html:programData.program}}></code></pre>

                
               
            </div>
            <h3 className="program-heading">OUTPUT</h3>
            <pre><code className="language-c code-bg program" dangerouslySetInnerHTML={{__html:programData.output}}></code></pre>   
            
        </div>
    )
}

export default Programpage          