import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const {login, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault();


    setError("")

    const user = {
      email,
      password
    }

    const res = await login(user)

    console.log(res);
  }

  useEffect(() => {

    if(authError) {
      setError(authError)
    }
  }, [authError])


  return (
    <div>
        <center>
      <h1>Faça Seu Login</h1>
      <p>Que bom ver seu retorno logue-se e prossiga nas postagens</p>
      </center>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input type="email" name="email" required placeholder='Email do Usuário' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>

        <label>
          <span>Senha:</span>
          <input type="password" name="password" required placeholder='Senha do Usuário' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>

        {!loading && <button className='btn'>Cadastrar</button>}
        {loading && <button className='btn' disabled>Aguarde...</button>}
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default Login