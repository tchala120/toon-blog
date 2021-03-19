import React from 'react'

import Template from './Template'

import { IProject, projects } from '@/constants/projects'

import ProjectCard from '@/components/ui/ProjectCard'

export default function Project(): JSX.Element {
  return (
    <div className="other my-10">
      <Template
        title="My Projects"
        icon={<span>💻 </span>}
        content="My whole project that i have done before and publish to everyone."
      />
      <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((p: IProject) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  )
}
