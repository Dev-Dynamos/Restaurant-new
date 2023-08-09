'use client'
import { useEffect, useState } from "react"
import { GetUser, LogOut } from "../Entrar/actions"
import { redirect, useRouter } from "next/navigation"
import { Router } from "next/router"

export default function Sair(){
  const router = useRouter()
  const [data, setData] = useState(null)

  async function Logoo(){
    const data = await LogOut()
    if(!data) window.location.href = "/"
  }
  useEffect(()=>{
    Logoo()
  }, [])
  return(
    <>
    </>
  )
}