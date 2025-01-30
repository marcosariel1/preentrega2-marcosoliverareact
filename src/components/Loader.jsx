import React from 'react'
import { SpinnerCircularFixed } from 'spinners-react'

export default function Loader() {
  return (
    <SpinnerCircularFixed size={55} thickness={180} speed={143} color="rgba(172, 57, 59, 1)" secondaryColor="rgba(172, 57, 59, 0.22)" />
  )
}
