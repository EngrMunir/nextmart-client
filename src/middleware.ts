import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService"

const authRoutes =["/login","/register"]

export const middleware = async (request:NextRequest)=>{
    const { pathName } = request.nextUrl;
    const userInfo = await getCurrentUser();
    if(!userInfo){
        if(authRoutes.includes(pathName)){
            return NextResponse.next();
        }else{
            return NextResponse.redirect( new URL(
                `http:localhost:3000/login?redirectPath=${pathName}`, 
                request.url
            ))
        }
    }
}

export const config ={
    matcher:[ "/login", "/create-shop"]
}