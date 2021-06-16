import React, {useState , useEffect} from 'react';
import {WorkSection , WorkTitle , WorkPart , Imegs , PartTitle , Line , Span , PartDesc ,Mg} from './style.js';
import axios from 'axios';
import Data from '../../data.json';


function MyPrograms () {

     
    const [ myprograms , setMyprograms] = useState([])
    
    useEffect ( () => {
        axios.get('./data.json').then( res => { setMyprograms(res.data.MyPrograms)})
    }, [] )    
    
    const MyProgramslist = Data.MyPrograms.map( (myprograms) => {
        console.log(myprograms.image);
        return (
            
            <WorkPart first={myprograms.id} key={myprograms.id} >
                
                <Imegs  src={myprograms.image} ></Imegs>
                
                <PartTitle>{myprograms.title}</PartTitle> 
                
            </WorkPart>
            
            
        )
        
    })
        
        return (
            <Mg id="Work" >
            <WorkSection>
            <div  className="container">
                <WorkTitle><Span>My</Span> programs and features</WorkTitle>
                {MyProgramslist}
            </div>
        </WorkSection>
        </Mg>
        )
}

export default MyPrograms;
