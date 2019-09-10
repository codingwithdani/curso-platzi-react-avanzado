import React, { useContext, Fragment } from 'react'
import { SubmitButton } from '../components/SubmitButton'
import { Context } from '../Context'
export const User = () => {
  const { removeAuth } = useContext(Context)
  return <Fragment>
    <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
  </Fragment>
}
