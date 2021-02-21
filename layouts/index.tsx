import React, { ReactNode } from 'react'

export interface MetaProp {
  title: string
  author: string
}

function Base(meta: MetaProp, children: ReactNode): JSX.Element {
  return (
    <div>
      {JSON.stringify(meta, null, '\t')}
      {children}
    </div>
  )
}

export default Base
