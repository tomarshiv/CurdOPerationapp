import React from 'react'
import './Style.css'
const Temp = () => {
    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input
                        placeholder='search...'
                        autoFocus
                        id='search'
                        className='searchTerm'
                    />
                    <button className='searchButton' type='button'>
                        Search
                    </button>
                </div>
                </div>

                <article className='widget'>
                    <div className='weatherIcon'>
                    <i className="wi wi-day-sunny"></i>
                    </div>



                    <div className='weatherInfo'>
                    <div className='temperature'>
                    <span>45.7&deg;</span>
                    </div>
                    <div style={{marginBottom:6,fontSize:32,marginLeft:43,marginBottom: '42px'}}>Sunny</div>
                        <span style={{marginBottom: '-25px', fontSize: "15px",
marginLeft: "-32px",
    marginBottom: "-14px"
}}>shivani</span>
                       <span style={{marginBottom: '-25px', fontSize: "15px",
marginLeft: "-96px",
    marginBottom: "-14px"
}}>aman</span>
                    
                    </div>
                    <div style={{background:'skyblue',width:172,height:72,marginTop:-7
                    }}>
                    <span style={{fontSize:22,color:'#fff',fontWeight:'bold',textAlign:'center',marginLeft:32}}>16/4/2023</span>
                  <div style={{fontSize:22,color:'#fff',fontWeight:'bold',textAlign:'center'}}>6:30:02</div>
                    </div>
                   


                   
<div style={{backgroundColor:'red',width:54,height:30}}>
    <span>hello</span>
</div>

                    
                </article>

                
        </>

    )
}




export default Temp
