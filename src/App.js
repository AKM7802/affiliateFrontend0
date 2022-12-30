import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from './Header'

import Home from './Home'
import Content from './Content';
import Category from './Category';
import About from './About'
import Contact from './Contact';
import Programpage from './Programpage';
import AlgoContent from './AlgoContent';
import { Fragment, useEffect, useState} from 'react';


function App() {
  //const url="https://sheltered-ocean-62008.herokuapp.com/"
  //const url="http://localhost:8080/"
  const url="fywo/"
 
  const [containerdata,setcontainerdata]=useState([])
  const [productdata,setproductdata]=useState([])
  const [programdata,setprogramdata]=useState([])
  const [searchdata,setSearchdata]=useState([])
  const [searchElement,setSearchElement]=useState('')

  let inputValue

  const loadContent=async()=>{
        
    const containerlink=await fetch(`${url}api/containers`)
    const containerjson=await containerlink.json()
    
    setcontainerdata(containerjson.data.doc)
    
    const productlink=await fetch(`${url}api/products`)
    const productjson=await productlink.json()
    
    setproductdata(productjson.data.doc)

    const programlink=await fetch(`${url}api/programs`)
    const programjson=await programlink.json()
    
    setprogramdata(programjson.data.doc)

    

  }

  const changeHandler=(event)=>{
    document.querySelector('.searchData').classList.remove('hide')
    inputValue=event.target.value
    
    if(inputValue===""){
        document.querySelector('.searchData').classList.add('hide')
        
    }  
    setSearchElement(inputValue)
    
    

    const newArray=programdata.filter((value)=>{
        return value.programName.toLowerCase().includes(inputValue.toLowerCase())
    })
    
    setSearchdata(newArray)

   
    
    
  }

  useEffect(()=>{
    loadContent()
  },[])
  useEffect(()=>{

     
        // const header=document.querySelector('.banner') 
      
        // const navHeight=document.querySelector('.navbar').getBoundingClientRect().height;
       
        const sectionAll=document.querySelectorAll('.section')

        // const stickyNav=function(entries){
        //     const entry=entries[0]  //Since there is only one threshold we do not need to loop over entries

            
        //     if(!entry.isIntersecting){
            
        //     document.querySelector('.navbar').classList.add('sticky');
        //     }

        //     else {
        //     document.querySelector('.navbar').classList.remove('sticky');
            
        //     }
        // }

        

        // const headerObserver=new IntersectionObserver(stickyNav,{
        //     root:null,
        //     threshold:0,
        //     //rootMargin: "-20px"
        //     rootMargin:`-${navHeight}px` //To make the nav appear at its exact height before reaching the specified position in threshold
        // })

        
        let lastScroll=0;

        window.addEventListener('scroll',()=>{
         // headerObserver.observe(header)
          const currentScroll=window.pageYOffset;

          if(currentScroll <=0 || currentScroll>lastScroll) document.querySelector('.navbar').classList.remove('sticky');
          
          else document.querySelector('.navbar').classList.add('sticky');

          lastScroll=currentScroll
          
        })

        const unhide=function(entries){
          const [entry]=entries;
          if(!entry.isIntersecting) return;
          entry.target.classList.remove('section-hidden')
          //entry.target.classList.toggle('section-hidden',!entry.isIntersecting)
        }
        const sectionObserver=new IntersectionObserver(unhide,{
          root:null,
          threshold:0.15,
  
      })

      sectionAll.forEach(individual=>{
        individual.classList.add('section-hidden')  
        sectionObserver.observe(individual)
        
        
    })

        
  })

  
  return (
    <div className="App">
      <Router>
      <Header changeHandler={changeHandler} searchElement={searchElement} searchdata={searchdata}/>
          <Routes>
              <Route path="/" element={
                <Fragment>
                  
                  <Home url={url} changeHandler={changeHandler} searchElement={searchElement} searchdata={searchdata} programdata={programdata} containerdata={containerdata} productdata={productdata}/>
                  
                  <About/>
                  <Category url={url}/>
                  
                </Fragment>}>
              </Route>
              
              <Route path="/:id" element={<Content url={url}/>}></Route>
              <Route path="/algo/:id" element={<Programpage url={url}/>}></Route>
              <Route path="/category" element={<Category url={url}/>}></Route>
              <Route path="/about" element={<About url={url}/>}></Route>
              <Route path="/algo-content" element={<AlgoContent url={url}/>}></Route>
              
          </Routes>
          <Contact/>
      </Router>
      

    </div>
  );
}

export default App;
