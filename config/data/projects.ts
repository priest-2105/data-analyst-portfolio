export interface Project {
    id: number
    title: string
    description: string
    images: string[]
    technologies: string[]
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A modern online shopping experience built with React and Node.js. This platform offers a seamless user interface, robust backend, and integration with various payment gateways.",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description:
        "A centralized platform for managing multiple social media accounts. This dashboard provides real-time analytics, scheduled posting, and engagement tracking across various social networks.",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png",
      ],
      technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      description:
        "A mobile application for tracking workouts and nutrition goals. Users can log exercises, monitor calorie intake, and view progress over time with intuitive charts and graphs.",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png",
      ],
      technologies: ["React Native", "Firebase", "Redux", "D3.js"],
    },
    {
      id: 4,
      title: "AI-powered Chatbot",
      description:
        "An intelligent chatbot for customer support automation. This bot uses natural language processing to understand and respond to customer queries, improving response times and reducing support workload.",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png",
      ],
      technologies: ["Python", "TensorFlow", "Flask", "Docker"],
    },
    {
      id: 5,
      title: "Virtual Reality Game",
      description:
        "An immersive VR experience built with Unity and C#. This game transports players to a fantastical world where they can interact with the environment and solve puzzles using VR controllers.",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png",
      ],
      technologies: ["Unity", "C#", "Oculus SDK", "Blender"],
    },
    {
      id: 6,
      title: "Blockchain Wallet",
      description:
        "A secure cryptocurrency wallet with multi-chain support. This wallet allows users to store, send, and receive various cryptocurrencies while maintaining full control of their private keys.",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png",
      ],
      technologies: ["React", "Web3.js", "Solidity", "Ethereum"],
    },
  ]
  
  