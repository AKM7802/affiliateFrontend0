import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router,Routes,Route,useLocation} from "react-router-dom"
import Header from './Header'
import Banner from './Banner'
import Home from './Home'
import Content from './Content';
import Category from './Category';
import About from './About'
import Contact from './Contact';
import { Fragment, useEffect} from 'react';


function App() {
  //const url="https://sheltered-ocean-62008.herokuapp.com/"
  //const url="http://localhost:8080/"
  const url="fywo/"
  useEffect(()=>{
        // const header=document.querySelector('.banner') 
      
        // const navHeight=document.querySelector('.navbar').getBoundingClientRect().height;
       
        const sectionAll=document.querySelectorAll('.section')

        const stickyNav=function(entries){
            const entry=entries[0]  //Since there is only one threshold we do not need to loop over entries

            
            if(!entry.isIntersecting){
            
            document.querySelector('.navbar').classList.add('sticky');
            }

            else {
            document.querySelector('.navbar').classList.remove('sticky');
            
            }
        }

        

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
          <Header/>
          <Routes>
              <Route path="/" element={
                <Fragment>
                  <Banner/>
                  <Home url={url}/>
                  
                  <About/>
                  <Category url={url}/>
                  
                </Fragment>}>
              </Route>
              <Route path="/:id" element={<Content url={url}/>}></Route>
              <Route path="/category" element={<Category url={url}/>}></Route>
              <Route path="/about" element={<About url={url}/>}></Route>
          </Routes>
          <Contact/>
      </Router>
      

    </div>
  );
}

export default App;
