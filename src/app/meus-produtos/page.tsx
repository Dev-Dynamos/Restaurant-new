'use client'

import useFetch from "@/hooks/useFetch"
import { Table } from "flowbite-react"
import { useState, useEffect } from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import { GetUser } from "../Entrar/actions"
import { api } from "@/services"
import { mutate } from "swr"
import { toast } from "react-toastify"

const MeusProdutos = () => {
  const [data, setData] = useState(null)

  async function handleData(){
    const data = await GetUser()
    if(data) setData(data)
  }
  useEffect(()=>{
    handleData()
  }, [])
  const {data: Product} = useFetch("/order")
  const Produtcs = Product?.filter((item) => item?.clienteId === data?.admin?.id)

  
  const openModalEdit = async (item) => {
    const resp = confirm(
      `Tens certeza que queres cancelar este pedido ${item?.produto?.nome}`
    );
    if (resp) {
      try {
        const response = await api.put(`/order/${item?.id}`, {status: "cancelado"});
        if (response) {
          mutate('/order');
          toast.success('Pedido cancelado com sucesso');
        }
      } catch (err: any) {
        toast.error(err?.response?.data?.error);
      }
    }
  };
  return(
    <>
    <div className="w-full h-screen px-10 flex flex-col gap-6">
      <h2 className="mt-10 text-2xl">Meus pedidos</h2>

      <Table>
      <Table.Head>
        <Table.HeadCell>
          Nome
        </Table.HeadCell>
        <Table.HeadCell>
          Preço
        </Table.HeadCell>
        <Table.HeadCell>
          Categoria
        </Table.HeadCell>
        <Table.HeadCell>
          Estado
        </Table.HeadCell>
        <Table.HeadCell>
          Acção
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {Produtcs?.map((item, idx) => (
          <>
          <Table.Row key={idx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {item?.produto?.nome}
          </Table.Cell>
          <Table.Cell>
            {item?.produto?.preco} kz
          </Table.Cell>
          <Table.Cell>
            {item?.produto?.categoria?.nome}
          </Table.Cell>
          <Table.Cell>
            {item?.status}
          </Table.Cell>
          <Table.Cell>
            <button onClick={()=> openModalEdit(item)}>
              <AiFillCloseCircle/>
            </button>
          </Table.Cell>
        </Table.Row>
          </>
        ))}
        
      </Table.Body>
    </Table>

    </div>
    </>
  )
}

export default MeusProdutos 