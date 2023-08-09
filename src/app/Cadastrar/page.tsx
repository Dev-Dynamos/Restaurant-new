'use client'
import { redirect, useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { api } from "@/services";
import { useEffect, useState } from "react";
import { GetUser } from "../Entrar/actions";

interface FormValues {
  nome: string;
  email: string;
  password: string;
  confirmarSenha: string;
  telefone: string;
}

const Cadastrar = () => {
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
    nome: yup.string().required("Este campo é obrigatório"),
    password: yup.string().required("Este campo é obrigatório"),
    confirmarSenha: yup
      .string()
      .oneOf([yup.ref("password"), ''], "As senhas precisam coincidir")
      .required("Este campo é obrigatório"),
    telefone: yup.string().required("Este campo é obrigatório"),
  });

  // Initialize the form using useFormik hook
  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
      nome: "",
      confirmarSenha: "",
      telefone: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try{
        const data = await api.post("/client", {
          email: values.email,
          nome: values.nome,
          password: values.password,
          telefone: values.telefone
        })
        if(data.data){
          toast.success("Cadastro feito com sucesso")
          formik.resetForm()
          router.push("/Entrar")
        }
      }catch(err){
        toast.error(err?.response?.data?.error)
      }
      console.log(values);  
    },
  });

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="w-96 px-5 py-10 bg-gray-500 rounded-md  flex gap-3 flex-col"
        >
            <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="text-white">Nome</label>
            <input
              id="nome"
              name="nome"
              type="text"
              className="p-3 rounded-md outline-none"
              placeholder="Digite o seu nome"
              value={formik.values.nome}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.nome && formik.errors.nome ? (
              <div className="text-red-600">{formik.errors.nome}</div>
            ) : null}
          </div>
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
              <div className="text-red-600">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="senha"  className="text-white">Senha</label>
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
              <div className="text-red-600">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmarSenha"  className="text-white">Confirmar Senha</label>
            <input
              id="confirmarSenha"
              name="confirmarSenha"
              type="password"
              className="p-3 rounded-md outline-none"
              placeholder="Digite a sua senha novamente"
              value={formik.values.confirmarSenha}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmarSenha && formik.errors.confirmarSenha ? (
              <div className="text-red-600">{formik.errors.confirmarSenha}</div>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="telefone"  className="text-white">Telefone</label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              className="p-3 rounded-md outline-none"
              placeholder="Digite o seu número de telefone"
              value={formik.values.telefone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.telefone && formik.errors.telefone ? (
              <div className="text-red-600">{formik.errors.telefone}</div>
            ) : null}
          </div>
          <button type="submit" className="bg-[#E6B45E] h-10 text-white rounded-md">
            Cadastrar-se
          </button>
          <span className="text-white">
            Já tens uma conta?{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => router.push("/Entrar")}
            >
              Entrar
            </span>
          </span>
        </form>
      </div>
    </>
  );
};

export default Cadastrar;
