// @ts-ignore
import { EmployeeInfo } from "./Card.ts";
// @ts-ignore
import { Info } from "./Context.ts";
import React, { useContext } from 'react'

export function ComponenteThree(){

   

    const {ID, name, position, email, phone, img, qr, joined, expire, dob} = useContext<EmployeeInfo>(Info)

    return(
        <div className='card'>

            <div className='header-card'>
                <div className='employee-img'>
                    <img src={img} alt='employee profile'/>
                </div>
                
                <div className='employee-name'>
                    <p>{name}</p>
                    <p>{position}</p>
                </div>

            </div>
            <div className='body-card'>
                <div className='column'>
                    <label>ID</label>
                    <p>{ID}</p>
                    <label>D.O.B.</label>
                    
                </div>
                <div className='center-column'>
                    <label>Joined Date</label>
                    
                    <label>Expire Date</label>
                    
                </div>
                <div className='column'>
                    <label>Email</label>
                    <p>{email}</p>
                    <label>Phone number</label>
                    <p>{phone}</p>
                </div>
            </div>
            
        </div>
    )
}

export default ComponenteThree