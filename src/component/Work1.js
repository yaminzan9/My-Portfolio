import React, {component} from "react";
import Data from "../data.json";

var DataList = Data.works ;

class Work1 extends component{
    render(){
        return(
            <ul>
                {
                    DataList.map((s)=>{
                        return(
                            <div>
                                <div>
                                    <div key={s.id}>
                                        <div>{s.title}</div>
                                        <div>{s.body}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </ul>
        )
    }
}

export default Work1