import React, {useState , useEffect} from 'react';
import {MyProgramsSection , MyProgramsTitle , MyProgramsPart , Imegs , PartTitle , Line , Span , PartDesc ,Mg} from './style.js';
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
            
            <MyProgramsPart first={myprograms.id} key={myprograms.id} >
                
                <Imegs  src={myprograms.image} ></Imegs>
                
                <PartTitle>{myprograms.title}</PartTitle> 
                
            </MyProgramsPart>
            
            
        )
        
    })
        
        return (
            <Mg id="MyPrograms" >
            <MyProgramsSection>
            <div  className="container">
                <MyProgramsTitle><Span>My</Span> programs and features</MyProgramsTitle>
                {MyProgramslist}
            </div>
        </MyProgramsSection>
        </Mg>
        )
}

export default MyPrograms;
