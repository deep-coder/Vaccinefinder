import React, { useState } from 'react'
import Input from '../../components/TextInput'
import { useMutation, gql } from '@apollo/client'
import { Button } from '../../components/Button/Button'

interface authform {
  login: boolean
  email: string
  password: string
  name: string
}

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password }) {
      token
    }
  }
`
const Login: React.FC = () => {
  const [formState, setFormState] = useState<authform>({
    login: true,
    email: '',
    password: '',
    name: '',
  })
  const [loginUser, { data }] = useMutation(LOGIN_USER)
  const handleLogin = (): void => {
    loginUser({ variables: { email: formState.email, password: formState.password } })
  }
  return (
    <div>
      <Input
        name="Login"
        label="Login"
        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
        type="text"
        value={formState.email}
      />
      <Input
        name="password"
        label="password"
        onChange={(e) => setFormState({ ...formState, password: e.target.value })}
        type="password"
      />
      <Button onClick={() => handleLogin()}>Login</Button>
    </div>
  )
}

export default Login
