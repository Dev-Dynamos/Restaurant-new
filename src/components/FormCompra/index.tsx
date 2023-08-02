import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { mutate } from 'swr';
import React from 'react';
import { api } from '@/services';

type formProps = {
  onclose: () => void;
  item: object
};

export const FormCompra: React.FC<formProps> = ({item}) => {
  const formik = useFormik({
    initialValues: {
      nome: '',
      descricao: '',
      localizacao: '',
      produtoId: item?.id,
      email: '',
      telefone: '',
    },
    validationSchema: yup.object({
      nome: yup.string().required('Este campo é obrigatório'),
      descricao: yup.string().required('Este campo é obrigatório'),
      localizacao: yup.string().required('Este campo é obrigatório'),
      email: yup.string().required('Este campo é obrigatório').email('Email inválido'),
      telefone: yup.string().required('Este campo é obrigatório'),
    }),
    onSubmit: async (fields) => {
      console.log('====================================');
      console.log(fields);
      console.log('====================================');
      try {
        const resp = await api.post(`/client`, {
          nome: fields.nome,
          telefone: fields.telefone,
          email: fields.email
        })
        if(resp.data){
          const response = await api.post('/order', {
            localizacao: fields.localizacao,
            productoId: fields.produtoId,
            clienteId: resp?.data?.id,
            descricao: fields.descricao,
          });
          if (response.data) {
            mutate('/order');
            formik.resetForm();
            toast.success('Pedido feito com sucesso! aguarde a entrega');
          }
        }
      } catch (err: any) {
        toast.error(err?.error?.message);
      }
    },
  });

  return (
    <>
      <div className="flex w-full flex-col">
        <div className="rounded-sm bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <form onSubmit={formik.handleSubmit}>
            <div className="p-6.5">
              <div className="mb-2 flex flex-col gap-2">
                <div className="w-full ">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Insira um nome"
                    id="nome"
                    name="nome"
                    value={formik.values.nome}
                    onChange={formik.handleChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Insira um email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Telefone
                  </label>
                  <input
                    type="text"
                    placeholder="Insira um telefone"
                    id="telefone"
                    name="telefone"
                    value={formik.values.telefone}
                    onChange={formik.handleChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Descrição
                </label>
                <input
                  type="text"
                  placeholder="Insira uma descrição"
                  id="descricao"
                  name="descricao"
                  value={formik.values.descricao}
                  onChange={formik.handleChange}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Localização
                </label>
                <input
                  type="text"
                  placeholder="Insira uma localização"
                  id="localizacao"
                  name="localizacao"
                  value={formik.values.localizacao}
                  onChange={formik.handleChange}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
              >
                Fazer pedido
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormCompra;
