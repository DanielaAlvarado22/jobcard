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
        position:'Software Engeniere',
        email:'15209494@modelo.edu.mx',
        phone: '9992380243',
        img:'',
        qr:'',
        joined: new Date("2019-01-16"),
        expire: new Date("2024-03-20"),
        dob: new Date("1995-02-15")

    }

    return(
        <Info.Provider value={emp}>
            <ComponenteTwo/>
        </Info.Provider>
    )
}

export default ComponenteOne


