import React from 'react'
import withButton from '../hoc/withButton'

type Props = {}

const Heading = (props: Props) => {
  return (
    <div>ClickMe</div>
  )
}

export default withButton(Heading)