import React from 'react'
import { Container, Row } from 'reactstrap'

const Wrapper = ({children}) => {
  return (
    <Container fluid className='wrapper py-4 px-4'  >
        {children}
    </Container>
  )
}

export default Wrapper