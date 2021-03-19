import { Status } from '@/components/ui/List'

export interface Project {
  id: number
  img: string
  name: string
  description: string
  status: Status
  url: string
}

export const projects: Project[] = [
  {
    id: 0,
    img: 'https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/discord.svg',
    name: 'Tconomy',
    description: 'A discord bot about economy',
    status: Status.NOT_FINISH,
    url: 'https://github.com/tchala120/discord_bot',
  },
  {
    id: 1,
    img: '/assets/tcoin_icon.svg',
    name: 'Tcoin',
    description: 'A simple cryptocurrency',
    status: Status.ONLINE,
    url: 'https://github.com/tchala120/simple-blockchain',
  },
  {
    id: 2,
    img: '/assets/graphql-auth.svg',
    name: 'T-Core',
    description: 'An authentication api with jwt',
    status: Status.ONLINE,
    url: 'https://github.com/tchala120/t-core',
  },
]
