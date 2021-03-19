import React from 'react'

import Template from './Template'

import { Project, projects } from '@/constants/projects'

import List from '@/components/ui/List'

export default function Project(): JSX.Element {
  return (
    <div className="other my-10">
      <Template
        title="My Projects"
        icon={<span>💻 </span>}
        content="My whole project that i have done before and publish to everyone."
      />
      <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((p: Project) => (
          <List key={p.id} {...p} />
        ))}
      </div>
    </div>
  )
}
