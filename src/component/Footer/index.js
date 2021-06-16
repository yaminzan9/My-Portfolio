import React, {useState , useEffect} from 'react';
import {WorkSection , WorkTitle , WorkPart , Imegs , PartTitle , Line , Span , PartDesc ,Mg} from './style.js';
import axios from 'axios';
import Data from '../../data.json';


function MyPrograms () {

    
    const [ MyPrograms , setMyPrograms] = useState([])
    
    useEffect ( () => {
        axios.get('./data.json').then( res => { setMyPrograms(res.data.MyPrograms)})
    }, [] )    
    
    const MyProgramslist = Data.MyPrograms.map( (MyProgramsItem) => {
        console.log(MyProgramsItem.image);
        return (
            
            <WorkPart first={MyProgramsItem.id} key={MyProgramsItem.id} >
                
                <Imegs  src={MyProgramsItem.image} >yamin</Imegs>
                
                <PartTitle>{MyProgramsItem.title}</PartTitle> 
                <Line/>
                <p><Imegs  src={MyProgramsItem.Downloade} ></Imegs></p>
                <PartDesc>
                    {MyProgramsItem.body}
                </PartDesc> 
            </WorkPart>
            
            
        )
        
    })
        
        return (
            <Mg id="Work" >
            <WorkSection>
            <div  className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {MyProgramslist}
            </div>
        </WorkSection>
        </Mg>
        )
}

export default MyPrograms;
