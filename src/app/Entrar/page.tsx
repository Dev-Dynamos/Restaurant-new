'use client'
import { redirect, useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";
import { api } from "@/services";
import { toast } from "react-toastify";
import { GetUser, putToken } from "./actions";
import { useEffect, useState } from "react";


const Entrar = () => {
  const router = useRouter();
  const [data, setData] = useState(null)

  async function handleData(){
    const data = await GetUser()
    if(data) setData(data)
  }
  useEffect(()=>{
    handleData()
  }, [])

  if(data) redirect("/")

  const validationSchema = yup.object({
    email: yup.string().required("Este campo é obrigatório"),
    password: yup.string().required("Este campo é obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try{
        const data = await api.post("/auth", {
          email: values.email,
          password: values.password,
          status: "Cliente"
        })
        if(data.data){
          putToken(data.data)
          toast.success("Login feito com sucesso")
          window.location.href = "/"
        }
      }catch(err){
        toast.error(err?.response?.data?.error)        
      }
    },
  });

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="w-96 px-5 py-10 bg-gray-500 rounded-md flex gap-3 flex-col"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-white">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="p-3 rounded-md outline-none"
              placeholder="Digite o seu email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="senha" className="text-white">Senha</label>
            <input
              id="password"
              name="password"
              type="password"
              className="p-3 rounded-md outline-none"
              placeholder="Digite a sua senha"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit" className="bg-[#E6B45E] h-10 text-white rounded-md">
            Entrar
          </button>
          <span className="text-white">
            Não tens uma conta?{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => router.push("/Cadastrar")}
            >
              cadastra-se
            </span>
          </span>
        </form>
      </div>
    </>
  );
};

export default Entrar;
