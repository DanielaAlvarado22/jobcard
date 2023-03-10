// @ts-ignore
import { EmployeeInfo } from "./Card.ts";
import { createContext } from "react";

export const Info = createContext<EmployeeInfo>({
    ID: '',
    name: '',
    position: '',
    email: '',
    phone: '',
    img:'',
    qr: '',
    joined: new Date(),
    expire: new Date(),
    dob: new Date()
})