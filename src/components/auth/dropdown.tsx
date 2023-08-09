'use client'

import { Avatar, Button, Dropdown } from 'flowbite-react'
import { useRouter } from 'next/navigation'

export function AuthDropdown({ user }: { user: object }) {
  const router = useRouter()

  return (
    <div className="flex items-center">
      <Dropdown
        inline
        arrowIcon={false}
        label={
          <Avatar
            size={'sm'}
            className="cursor-pointer"
            bordered
            status="online"
            stacked
            statusPosition="top-right"
            placeholderInitials={user?.admin?.nome[0].toUpperCase()}
          />
        }
      >
        <Dropdown.Item>Perfil</Dropdown.Item>
        <Dropdown.Item onClick={() => router.push('/meus-produtos')}>
          Meus productos
        </Dropdown.Item>
        <Dropdown.Item>
          <Button type="button" size="sm" className="w-full" rounded="lg" onClick={() => router.push('/Sair')}>
            Sair
          </Button>
        </Dropdown.Item>
      </Dropdown>
    </div>
  )
}
