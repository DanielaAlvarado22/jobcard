import React from "react";
// @ts-ignore
import {EmployeeInfo} from "./Card.ts"
// @ts-ignore
import {Info} from "./Context.ts"
// @ts-ignore
import ComponenteTwo from "./ComponenteTwo.tsx";

export function ComponenteOne(){

    const emp: EmployeeInfo = {
        ID: '15209494',
        name:'Daniela Alvarado',
        position:'Software Engineer',
        email:'15209494@modelo.edu.mx',
        phone: '9992380243',
        img:'',
        joined:'2020-09-26',
        expire: '2024-07-15',
        dob: '25-03-2002',

    }

    return(
        <Info.Provider value={emp}>
            <ComponenteTwo/>
        </Info.Provider>
    )
}

export default ComponenteOne


