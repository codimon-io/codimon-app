import { Mail, Home, Zap } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home',
  },
  {
    id: 'secondPage',
    title: 'Second Page',
    icon: <Mail size={20} />,
    navLink: '/second-page',
  },
  {
    id: 'remoteControl',
    title: 'Remote Control',
    icon: <Zap size={20} />,
    navLink: '/remote-control',
  },
]
