import React , {useState ,useEffect} from 'react';
import style from './style.css';
import axios from 'axios';
import Data from '../../data.json';


function Portoflio () {

    const [ images , setImages ] = useState([])

    useEffect ( () => {
        axios.get('data.json').then( res => { setImages(res.data.portfolio)})
    }, [])

    const PortfolioImages = Data.portfolio.map( (imageItem) => {
        return (
            <div className="box" >
                <div key={imageItem.id}>
                <img className="images" src={imageItem.image} />
                <p className="overlay" >
                    <span>Show Web</span>
                </p>
                </div>
            </div>
        )
    } )

    return (
        <div className="portfolio" id="Portfolio" >
        <div className='container'>
            
            <h1 className='title' ><span className="span" >My</span> Portfolio</h1>
            
            <div className="box">
            
               {PortfolioImages}
            
            </div>
            
        
        </div>
        </div>
    )
}

export default Portoflio 
