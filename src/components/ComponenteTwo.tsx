// @ts-ignore
import { EmployeeInfo } from "./Card.ts";
// @ts-ignore
import { Info } from "./Context.ts";
import React, { useContext, useEffect, useState } from 'react'
// @ts-ignore
import ComponenteThree from './ComponenteThree.tsx'



export function ComponenteTwo(){
    const photo ="https://i.pinimg.com/564x/5e/1d/1d/5e1d1decc6437f2d9443e98da06659a9.jpg"

    const qrphoto = "https://i.pinimg.com/564x/dc/a4/91/dca4916aad71200e86aa2e0f7a9ba137.jpg"


    const {ID, name, position,email, phone, img,qr, joined, expire, dob} = useContext<EmployeeInfo>(Info)
    const [employee, setEmployee] = useState<EmployeeInfo>({
        ID, name, position, email, phone, img,qr, joined, expire, dob
    })

    useEffect(()=>{
        setEmployee({...employee, img:photo,qr:qrphoto})
    },[employee])

    return(
        <Info.Provider value={employee}>
            <ComponenteThree></ComponenteThree>
        </Info.Provider>
    )
}

export default ComponenteTwo