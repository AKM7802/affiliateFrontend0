
const Banner=()=>{
  
    return(
        <div className='banner'>
            <div className='banner-content'>
                <img className='banner-image' src="/img/banner/banner01.jpg" alt=""></img>
                <div className='banner-overlay'></div>
                <h2 className='banner-heading'>EXPLORE</h2>
                <a href='#content'><div className='banner-btn'><i class="fa-solid fa-angles-down"></i></div></a>
            </div>
        </div>
    )
}

export default Banner;