import React, {useState , useEffect} from 'react';
import {WorkSection , WorkTitle , WorkPart , Imegs , PartTitle , Line , Span , PartDesc ,Mg} from './style.js';
import axios from 'axios';
import Data from '../../data.json';


function Work () {

    
    const [ works , setWorks] = useState([])
    
    useEffect ( () => {
        axios.get('./data.json').then( res => { setWorks(res.data.works)})
    }, [] )    
    
    const workslist = Data.works.map( (worksItem) => {
        console.log(worksItem.image);
        return (
            
            <WorkPart first={worksItem.id} key={worksItem.id} >
                
                <Imegs  src={worksItem.image} ></Imegs>
                
                <PartTitle>{worksItem.title}</PartTitle> 
                <Line/>
                <p><Imegs  src={worksItem.Downloade} ></Imegs></p>
                <PartDesc>
                    {worksItem.body}
                </PartDesc>
            </WorkPart>
            
            
        )
        
    })
        
        return (
            <Mg id="Work" >
            <WorkSection>
            <div  className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {workslist}
            </div>
        </WorkSection>
        </Mg>
        )
}

export default Work;
