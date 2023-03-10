
// @ts-ignore
import { EmployeeInfo } from "./Card.ts";
// @ts-ignore
import { Info } from "./Context.ts";
import React, { useContext } from "react";



export function ComponenteThree() {
  const { ID, name, position, email, phone, img,joined, expire, dob } =
    useContext<EmployeeInfo>(Info);

    

  return (
    <div className="card">
      <div className="txt-conteiner">
      <div className="imgPos">
            <img className="img" src={img} alt="" />
          </div>
        <div>
          <div>
            <p>{name}</p>
            <p>{position}</p>
            <label>ID</label>
            <p>{ID}</p>
            <label>Birthday</label>
            <p>{dob}</p>
          </div>
        </div>
        <div>
          <label>Joined Date</label>
          <p>{joined}</p>
          <label>Expire Date</label>
          <p>{expire}</p>
          <label>Email</label>
          <p>{email}</p>
          <label>Phone number</label>
          <p>{phone}</p>
        </div>
        <div>
          <label>QR</label>
          <br></br>
          <img className='img'src="/images/qr.png" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default ComponenteThree;
