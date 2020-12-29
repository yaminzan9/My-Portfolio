import React, {useState , useEffect} from 'react';
import {WorkSection , WorkTitle , WorkPart , Imegs , PartTitle , Line , Span , PartDesc} from './style.js';
import axios from 'axios';
import Data from '../../data.json';


function Work () {

    
    const [ works , setWorks] = useState([])
    
    useEffect ( () => {
        axios.get('./data.json').then( res => { setWorks(res.data.works)})
    }, [] )    
    
    const workslist = Data.works.map( (worksItem) => {
        
        return (
            
            <WorkPart first={worksItem.id} key={worksItem.id} >
                <Imegs  src={worksItem.image} ></Imegs>
                <PartTitle>{worksItem.title}</PartTitle>
                <Line/>
                <PartDesc>
                    {worksItem.body}
                </PartDesc>
            </WorkPart>
            
        )
    })
        
        return (
            <div id="Work" >
            <WorkSection>
            <div  className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {workslist}
            </div>
        </WorkSection>
        </div>
        )
}

export default Work;
