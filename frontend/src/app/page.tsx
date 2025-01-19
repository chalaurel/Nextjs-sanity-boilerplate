import React from 'react'

import BodyComponent from '@/components/BodyComponent'
import { FooterComponent } from '@/components'

function page() {
  return (
    <div className='scrollbar-hide mt-20'>
      <BodyComponent />
      <FooterComponent />
    </div>
  )
}

export default page