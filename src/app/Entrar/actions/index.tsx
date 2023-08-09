'use server'
import { cookies } from 'next/headers'
import { Router, useRouter } from 'next/router'



export async function putToken(token: object){
  cookies().set({
    name: "makenda",
    value: JSON.stringify(token),
    httpOnly: true,
    secure: true,
    expires: new Date(2147483647 * 1000),
  })
}

export const GetUser = async () => {
  const isAuthenticated = cookies().get('makenda')?.value
  if(!isAuthenticated) return false
  return JSON?.parse(isAuthenticated)
}

export async function LogOut(){
  const data = await cookies().delete("makenda")
  if(data) return true
  return false
}