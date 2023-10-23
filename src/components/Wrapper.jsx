import React from 'react'
import { Container, Row } from 'reactstrap'

const Wrapper = ({children, path}) => {
  return (
    <Container fluid className={`${path === "/survey-submitted" ? 'full-wrapper' : "wrapper"} py-4 px-4`}  >
        {children}
    </Container>
  )
}

export default Wrapper