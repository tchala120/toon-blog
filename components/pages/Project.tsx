import React from 'react'
import Template from './Template'

import { projects } from '../../constants/projects'
import List from '../ui/List'

export default function Project(): JSX.Element {
  return (
    <div className="other">
      <Template
        title="My Projects"
        icon={<span>💻 </span>}
        content="My whole project that i have done before and publish to everyone."
      />
      <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((p) => (
          <List key={p.id} {...p} />
        ))}
      </div>
    </div>
  )
}
