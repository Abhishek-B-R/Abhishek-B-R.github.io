import { Link } from "react-router-dom"
import {
  Route,
  Heart,
  Shield,
  TrendingUp,
  MapPin,
  Brain,
  UserMinus,
  BarChart3,
  Zap,
  Target,
  Cpu,
  Database,
  Globe,
  Tag,
  Car,
  Utensils,
} from "lucide-react"

export default function WhyZomato() {
const caseStudies = [
  {
    to: "/case1",
    title: "Delivery Route Optimization",
    icon: <Route className="h-8 w-8" />,
    description:
      "Advanced graph algorithms and machine learning to optimize delivery routes, reducing fuel costs by 30% and improving delivery times through intelligent pathfinding.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    to: "/case2",
    title: "Personalized Recommendations",
    icon: <Heart className="h-8 w-8" />,
    description:
      "AI-powered recommendation engine using collaborative filtering and deep learning to suggest personalized food choices, increasing user engagement by 45%.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    to: "/case3",
    title: "Fraud Detection in Orders",
    icon: <Shield className="h-8 w-8" />,
    description:
      "Real-time anomaly detection system using ensemble methods and behavioral analysis to identify fraudulent transactions with 99.2% accuracy.",
    gradient: "from-red-500 to-orange-500",
  },
  {
    to: "/case4",
    title: "Customer Churn Prediction",
    icon: <UserMinus className="h-8 w-8" />,
    description:
      "Predictive analytics model combining customer behavior patterns and transaction history to identify at-risk customers and improve retention rates by 25%.",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    to: "/case5",
    title: "Real-Time Demand Forecasting",
    icon: <BarChart3 className="h-8 w-8" />,
    description:
      "Time-series forecasting system using LSTM networks and seasonal decomposition to predict food demand patterns, reducing waste by 35%.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    to: "/case6",
    title: "Restaurant Table Allocation",
    icon: <Utensils className="h-8 w-8" />,
    description:
      "Dynamic table allocation system using constraint satisfaction algorithms to optimize seating arrangements and reduce customer wait times by 40%.",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    to: "/case7",
    title: "Driver–Order Matching",
    icon: <Car className="h-8 w-8" />,
    description:
      "Intelligent matching algorithm using bipartite graph optimization and real-time location data to pair drivers with orders for maximum efficiency.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    to: "/case8",
    title: "Coupon Allocation Optimization",
    icon: <Tag className="h-8 w-8" />,
    description:
      "Strategic coupon distribution system using customer segmentation and ROI optimization to maximize promotional effectiveness and increase conversion rates by 28%.",
    gradient: "from-violet-500 to-purple-500",
  },
]

  const objectives = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-400" />,
      text: "Showcase real-world application of graph and optimization algorithms",
    },
    {
      icon: <Brain className="h-6 w-6 text-purple-400" />,
      text: "Illustrate end-to-end ML workflows for personalization and forecasting",
    },
    {
      icon: <Database className="h-6 w-6 text-green-400" />,
      text: "Highlight design of streaming data pipelines for real-time analytics",
    },
    {
      icon: <Globe className="h-6 w-6 text-cyan-400" />,
      text: "Demonstrate full-stack implementation using modern front-end (React)",
    },
    {
      icon: <Target className="h-6 w-6 text-orange-400" />,
      text: "Connect technical solutions to business impact and KPIs",
    },
  ]

  return (
    <section className="max-w-6xl mx-auto p-8 text-white mt-40">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Why I Chose
          <strong className="main-name"> Zomato </strong>
          as My Tech Focus
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8"></div>
        <p className="mb-8 text-xl leading-relaxed max-w-4xl mx-auto text-gray-300">
          <strong className="main-name">Zomato</strong> stands out as a leader in the
          <strong className="main-name"> food-tech industry </strong> due to its data-driven approach,{" "}
          <strong className="main-name">real-time systems</strong>, and rapid scaling capabilities. By focusing on{" "}
          <strong className="main-name">Zomato</strong>, I can demonstrate how complex
          <strong className="main-name">algorithms</strong> and
          <strong className="main-name"> data structures </strong> power world-class applications that millions use
          daily. Its engineering challenges—from <strong className="main-name">routing</strong> and
          <strong className="main-name">recommendations</strong> to{" "}
          <strong className="main-name">fraud detection</strong> and{" "}
          <strong className="main-name">demand forecasting</strong>—perfectly align with my interest in building{" "}
          <strong className="main-name">high-performance, scalable solutions</strong>.
        </p>
      </div>

      {/* Objectives Section */}
      <div className="mb-16">
        <div className="flex items-center justify-center mb-8">
          <Cpu className="h-8 w-8 text-blue-400 mr-4" />
          <h2 className="text-3xl font-semibold">
            Objectives Behind Choosing
            <strong className="main-name"> Zomato</strong>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-2 bg-gray-800/50 rounded-lg">{objective.icon}</div>
                <p className="text-gray-300 leading-relaxed">{objective.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="mb-16">
        <div className="flex items-center justify-center mb-12">
          <BarChart3 className="h-8 w-8 text-green-400 mr-4" />
          <h2 className="text-3xl font-semibold">
            Explore
            <strong className="main-name"> Case Studies</strong>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Link
              key={index}
              to={study.to}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${study.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{study.icon}</div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl mb-3 text-white group-hover:text-gray-100 transition-colors duration-300">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {study.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center mt-6 text-gray-500 group-hover:text-white transition-colors duration-300">
                  <span className="text-sm font-medium mr-2">Explore</span>
                  <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  )
}
