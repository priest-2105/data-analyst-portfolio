export interface Project {
    id: number
    title: string
    description: string
    imageUrl: string
    technologies: string[]
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A modern online shopping experience built with React and Node.js. This platform offers a seamless user interface, robust backend, and integration with various payment gateways.",
      imageUrl: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description:
        "A centralized platform for managing multiple social media accounts. This dashboard provides real-time analytics, scheduled posting, and engagement tracking across various social networks.",
      imageUrl: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      description:
        "A mobile application for tracking workouts and nutrition goals. Users can log exercises, monitor calorie intake, and view progress over time with intuitive charts and graphs.",
      imageUrl: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native", "Firebase", "Redux", "D3.js"],
    },
    {
      id: 4,
      title: "AI-powered Chatbot",
      description:
        "An intelligent chatbot for customer support automation. This bot uses natural language processing to understand and respond to customer queries, improving response times and reducing support workload.",
      imageUrl: "/placeholder.svg?height=300&width=400",
      technologies: ["Python", "TensorFlow", "Flask", "Docker"],
    },
    {
      id: 5,
      title: "Virtual Reality Game",
      description:
        "An immersive VR experience built with Unity and C#. This game transports players to a fantastical world where they can interact with the environment and solve puzzles using VR controllers.",
      imageUrl: "/placeholder.svg?height=300&width=400",
      technologies: ["Unity", "C#", "Oculus SDK", "Blender"],
    },
    {
      id: 6,
      title: "Blockchain Wallet",
      description:
        "A secure cryptocurrency wallet with multi-chain support. This wallet allows users to store, send, and receive various cryptocurrencies while maintaining full control of their private keys.",
      imageUrl: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Web3.js", "Solidity", "Ethereum"],
    },
  ]
  
  