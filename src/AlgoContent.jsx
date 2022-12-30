import { useEffect } from "react"
import { useState } from "react"

const AlgoContent=(props)=>{
    const [programdata,setprogramdata]=useState([])

    const loadPrograms=async()=>{
        const programlink=await fetch(`${props.url}api/programs`)
        const programjson=await programlink.json()
        
        setprogramdata(programjson.data.doc)
    }

    useEffect(()=>{
        loadPrograms();
    },[])

    return(
        <div className="algo-content-page">
            <h2 className="page-heading">ALGO & PRGM</h2>
            <div className="program-page-container">
                {programdata.map((programs)=>{
                        return(
                                <a href={`/algo/${programs.slug}`}>
                                    <div class="program-home-card">
                                        <div><span className='program-home-name'>{programs.programName}</span></div>
                                    </div>
                                </a>
                        )
                    })}
            </div>
        </div>
    ) 
}

export default AlgoContent