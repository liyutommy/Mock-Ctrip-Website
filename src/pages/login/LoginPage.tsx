import React from 'react'
import { UserLayout } from '../../layouts/userLayout'
import { LoginForm } from './LoginForm'

export const LoginPage: React.FC = () => {
  return (
    <UserLayout>
      <LoginForm />
    </UserLayout>
  )
}

