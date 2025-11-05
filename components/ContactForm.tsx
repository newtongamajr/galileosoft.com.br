"use client"

import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"

import Input from "./Input"
import SecundaryHeading from "./SecundaryHeading";
import SecundaryText from "./SecundaryText";
import PrimaryText from "./PrimaryText";
import Link from "next/link";
import { MdPhone, MdWhatsapp } from "react-icons/md";
import Card from "./Card";
import ButtonPurple from "./ButtonPurple";
import ButtonOrange from "./ButtonOrange";
import ButtonGreen from "./ButtonGreen";

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  message: string;
}


export default function ContactForm() {
  const [isFormSubmittedSuccessfully, setIsFormSubmittedSuccessfully] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    message: ""
  })

  const inputs = [
    {
      id: "1",
      name: "name",
      type: "text",
      placeholder: "Ex: Gustavo Almeida",
      label: "Nome completo (obrigatório)",
      errorMessage: "O nome deve ter pelo menos 3 caracteres.",
      pattern: "^[A-Za-zÀ-ÿ ]{3,50}$",
      required: true
    },
    {
      id: "2",
      name: "email",
      type: "email",
      placeholder: "Ex: nome.sobrenome@thealmeida.online",
      label: "Email profissional (obrigatório)",
      errorMessage: "Deve ser um email válido.",
      required: true
    },
    {
      id: "3",
      name: "phone",
      type: "text",
      placeholder: "Ex: (44) 91234-5678",
      label: "Celular/Whatsapp (obrigatório)",
      errorMessage: "O telefone deve conter apenas números e lembre-se de adicionar o DDD, ex: 44999776655",
      pattern: "^[0-9]{10,25}$",
      required: true
    },
    {
      id: "4",
      name: "companyName",
      type: "text",
      placeholder: "Ex: GalileoSoft",
      label: "Nome da empresa",
      errorMessage: "O nome da empresa deve ter entre 3-16 caracteres."
    },
    {
      id: "5",
      name: "message",
      type: "text",
      placeholder: "Ex: Gostaria de saber mais sobre como vocês trabalham",
      label: "Mensagem"
    },
  ]

  const sendEmail = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    const loadingToast = toast.loading('Enviando mensagem...');

    try {
      await axios.post("/api/contato", {
        messageBody: `Nome: ${values.name} \nEmail: ${values.email} \nPhone: ${values.phone} \nEmpresa: ${values.companyName} \nMensagem: ${values.message}`
      });

      toast.success('Email enviado com sucesso! Em breve entraremos em contato.', { id: loadingToast });
      setIsFormSubmittedSuccessfully(true);
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Por favor, tente pelos canais alternativos.', { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendEmail(formValues)
  }

  const formatPhone = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    return numbers;
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Aplicar máscara apenas para telefone
    if (e.target.name === 'phone') {
      value = formatPhone(value);
    }

    setFormValues({ ...formValues, [e.target.name]: value })
  }

  return (
    <>
      {isFormSubmittedSuccessfully ? (
        <>
          <SecundaryHeading className="text-purple-950 text-center lg:text-left mb-5"> 🎉 Já recebemos sua mensagem!</SecundaryHeading>
          <PrimaryText className="text-purple-950 text-center lg:text-left font-semibold mb-3">
            Muito obrigado por confiar na GalileoSoft para a revolução tecnológica da sua empresa.
          </PrimaryText>
          <SecundaryText className="text-purple-950 text-center lg:text-left mb-5">
            Nosso tempo médio de resposta para contatos nesse formulário é de 6 horas. Caso deseje uma resposta mais rápida também estamos disponíveis no WhatsApp a via ligação basta clicar em um dos botões abaixo:
          </SecundaryText>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <ButtonGreen
              href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1%20GalileoSoft,%20"
              target="_blank"
              className="cursor-pointer hover:scale-110 hover:underline hover:underline-offset-4 transform transition duration-500 w-full"
            >
              Enviar mensagem!
            </ButtonGreen>
            <ButtonOrange
              target="_blank"
              href="tel:+5544997530950"
              className="cursor-pointer hover:scale-110 hover:underline hover:underline-offset-4 transform transition duration-500 w-full"
            >
              Ligar agora!
            </ButtonOrange>
          </div>
        </>
      ) : (
        <>
          <SecundaryHeading className="text-purple-950 text-center lg:text-left">Seja um case de sucesso!</SecundaryHeading>
          <SecundaryText className="text-purple-950 text-center lg:text-left font-semibold">
            Cadastre-se para descobrir como a tecnologia vai revolucionar sua gestão.
          </SecundaryText>
          <form onSubmit={handleSubmit} className="flex flex-col text-black">
            {
              inputs.map((input) => (
                <Input
                  key={input.id}
                  {...input}
                  value={formValues[input.name as keyof ContactFormValues]}
                  onChange={onChange}
                />
              ))
            }

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white text-center text-lg font-bold rounded-lg mt-2 px-6 py-3 bg-gradient-to-br from-galileoGreen-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </>
      )}
    </>
  )
}
