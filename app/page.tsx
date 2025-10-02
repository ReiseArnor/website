"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Server, Code, Cpu, Database } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

function AnimatedSection({ children, id, className }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0F0F1A] bg-neon-grid bg-neon-grid text-white">
      <header className="sticky top-0 z-10 w-full border-b border-[#B026FF]/30 bg-[#0F0F1A]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0F0F1A]/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <Server className="h-6 w-6 text-[#B026FF]" />
              <span className="font-bold text-white">Odanis Esquea Núñez</span>
            </Link>
          </div>
          <nav className="flex flex-1 items-center justify-end space-x-4 text-sm font-medium">
            <Link
              href="#about"
              className="text-[#C8C8FF] hover:text-[#B026FF] hover:drop-shadow-[0_0_8px_#B026FF] transition-all"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-[#C8C8FF] hover:text-[#B026FF] hover:drop-shadow-[0_0_8px_#B026FF] transition-all"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-[#C8C8FF] hover:text-[#B026FF] hover:drop-shadow-[0_0_8px_#B026FF] transition-all"
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="text-[#C8C8FF] hover:text-[#B026FF] hover:drop-shadow-[0_0_8px_#B026FF] transition-all"
            >
              Experience
            </Link>
            <Link
              href="#education"
              className="text-[#C8C8FF] hover:text-[#B026FF] hover:drop-shadow-[0_0_8px_#B026FF] transition-all"
            >
              Education
            </Link>
            <Link
              href="#contact"
              className="text-[#C8C8FF] hover:text-[#B026FF] hover:drop-shadow-[0_0_8px_#B026FF] transition-all"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-6 md:py-12">
        {/* Hero Section */}
        <motion.section
          className="mx-auto flex max-w-[980px] flex-col items-start gap-2 py-8 md:py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-[#B026FF] drop-shadow-[0_0_8px_#B026FF] animate-pulse-neon">Software</span>{" "}
            <span className="text-[#D580FF] drop-shadow-[0_0_8px_#D580FF]">Engineer</span>
          </motion.h1>
          <motion.p
            className="max-w-[750px] text-lg text-[#C8C8FF] sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Versatile Software Engineer with expertise in backend development, cloud infrastructure, and modern web
            technologies.
          </motion.p>
          <motion.div
            className="flex gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button
              variant="outline"
              className="text-[#B026FF] border-[#B026FF] hover:bg-[#B026FF]/10 shadow-[0_0_10px_rgba(176,38,255,0.5)] hover:shadow-[0_0_15px_rgba(176,38,255,0.7)] transition-all"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button
              variant="outline"
              className="text-[#D580FF] border-[#D580FF] hover:bg-[#D580FF]/10 shadow-[0_0_10px_rgba(213,128,255,0.5)] hover:shadow-[0_0_15px_rgba(213,128,255,0.7)] transition-all"
            >
              <Link href="#projects">View Projects</Link>
            </Button>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <AnimatedSection id="about" className="mx-auto max-w-[980px] py-8 md:py-12">
          <motion.h2
            className="mb-6 text-2xl font-bold md:text-3xl text-[#B026FF] drop-shadow-[0_0_8px_#B026FF]"
            variants={fadeInUp}
          >
            About Me
          </motion.h2>
          <motion.div className="grid gap-6 md:grid-cols-2" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <p className="mb-4 leading-7 text-white">
                Passionate about building scalable and efficient systems using NestJS, TypeScript, and PostgreSQL.
                Experienced in cloud-native solutions, containerization, and API integrations.
              </p>
              <p className="leading-7 text-white">
                Skilled in C++ programming and scripting languages for automation and development workflows. Proficient
                in DevOps practices, CI/CD pipelines, and infrastructure management using AWS and Docker.
              </p>
            </motion.div>
            <motion.div className="flex flex-col gap-4" variants={staggerContainer}>
              <motion.div
                className="rounded-lg border p-4 border-[#B026FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(176,38,255,0.3)]"
                variants={fadeInUp}
              >
                <h3 className="mb-2 font-semibold text-[#B026FF] drop-shadow-[0_0_8px_#B026FF]">Location</h3>
                <p className="text-sm text-[#C8C8FF]">Dominican Republic, La Vega</p>
              </motion.div>
              <motion.div
                className="rounded-lg border p-4 border-[#D580FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(213,128,255,0.3)]"
                variants={fadeInUp}
              >
                <h3 className="mb-2 font-semibold text-[#D580FF] drop-shadow-[0_0_8px_#D580FF]">Languages</h3>
                <p className="text-sm text-[#C8C8FF]">Spanish (Native), English (Professional)</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection id="skills" className="mx-auto max-w-[980px] py-8 md:py-12">
          <motion.h2
            className="mb-6 text-2xl font-bold md:text-3xl text-[#D580FF] drop-shadow-[0_0_8px_#D580FF]"
            variants={fadeInUp}
          >
            Technical Skills
          </motion.h2>
          <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Card className="border-[#B026FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(176,38,255,0.3)]">
                <CardHeader>
                  <CardTitle className="text-[#B026FF] drop-shadow-[0_0_8px_#B026FF] flex items-center gap-2">
                    <Code className="h-5 w-5" /> Web Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">NestJS</Badge>
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">Express.js</Badge>
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">TypeScript</Badge>
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">Prisma</Badge>
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">TypeORM</Badge>
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">React</Badge>
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">Next.js</Badge>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="border-[#D580FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(213,128,255,0.3)]">
                <CardHeader>
                  <CardTitle className="text-[#D580FF] drop-shadow-[0_0_8px_#D580FF] flex items-center gap-2">
                    <Database className="h-5 w-5" /> Databases
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-[#D580FF] text-black shadow-[0_0_5px_rgba(213,128,255,0.7)]">PostgreSQL</Badge>
                  <Badge className="bg-[#D580FF] text-black shadow-[0_0_5px_rgba(213,128,255,0.7)]">
                    MariaDB/MySQL
                  </Badge>
                  <Badge className="bg-[#D580FF] text-black shadow-[0_0_5px_rgba(213,128,255,0.7)]">MongoDB</Badge>
                  <Badge className="bg-[#D580FF] text-black shadow-[0_0_5px_rgba(213,128,255,0.7)]">Redis</Badge>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="border-[#B026FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(176,38,255,0.3)]">
                <CardHeader>
                  <CardTitle className="text-[#B026FF] drop-shadow-[0_0_8px_#B026FF] flex items-center gap-2">
                    <Cpu className="h-5 w-5" /> Cloud & DevOps
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">AWS</Badge>
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">OCI</Badge>
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">Docker</Badge>
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">
                    Docker Compose
                  </Badge>
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">Nginx</Badge>
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">Certbot</Badge>
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">Coolify</Badge>
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">CI/CD</Badge>
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">Turborepo</Badge>
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">Cloudflare</Badge>
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">
                    GitHub Actions
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="border-[#D580FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(213,128,255,0.3)]">
                <CardHeader>
                  <CardTitle className="text-[#D580FF] drop-shadow-[0_0_8px_#D580FF]">
                    Programming & Scripting
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-[#D580FF] text-black shadow-[0_0_5px_rgba(213,128,255,0.7)]">JavaScript</Badge>
                  <Badge className="bg-[#D580FF] text-black shadow-[0_0_5px_rgba(213,128,255,0.7)]">TypeScript</Badge>
                  <Badge className="bg-[#D580FF] text-black shadow-[0_0_5px_rgba(213,128,255,0.7)]">Python</Badge>
                  <Badge className="bg-[#D580FF] text-black shadow-[0_0_5px_rgba(213,128,255,0.7)]">Lua</Badge>
                  <Badge className="bg-[#D580FF] text-black shadow-[0_0_5px_rgba(213,128,255,0.7)]">Bash</Badge>
                  <Badge className="bg-[#D580FF] text-black shadow-[0_0_5px_rgba(213,128,255,0.7)]">C++</Badge>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="border-[#B026FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(176,38,255,0.3)]">
                <CardHeader>
                  <CardTitle className="text-[#B026FF] drop-shadow-[0_0_8px_#B026FF]">
                    Testing & Documentation
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">Jest</Badge>
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">
                    Swagger/OpenAPI
                  </Badge>
                  <Badge className="bg-[#B026FF] text-white shadow-[0_0_5px_rgba(176,38,255,0.7)]">Catch2</Badge>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="border-[#D580FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(213,128,255,0.3)]">
                <CardHeader>
                  <CardTitle className="text-[#D580FF] drop-shadow-[0_0_8px_#D580FF]">Other Skills</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-[#D580FF] text-black shadow-[0_0_5px_rgba(213,128,255,0.7)]">
                    Linux/Unix Administration
                  </Badge>
                  <Badge className="bg-[#D580FF] text-black shadow-[0_0_5px_rgba(213,128,255,0.7)]">TDD</Badge>
                  <Badge className="bg-[#D580FF] text-black shadow-[0_0_5px_rgba(213,128,255,0.7)]">REST APIs</Badge>
                  <Badge className="bg-[#D580FF] text-black shadow-[0_0_5px_rgba(213,128,255,0.7)]">GraphQL</Badge>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="projects" className="mx-auto max-w-[980px] py-8 md:py-12">
          <motion.h2
            className="mb-6 text-2xl font-bold md:text-3xl text-[#B026FF] drop-shadow-[0_0_8px_#B026FF]"
            variants={fadeInUp}
          >
            Featured Projects
          </motion.h2>
          <motion.div className="grid gap-6 md:grid-cols-2" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Card className="border-[#B026FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(176,38,255,0.3)]">
                <CardHeader>
                  <CardTitle className="text-[#B026FF] drop-shadow-[0_0_8px_#B026FF]">
                    BigCommerce-NetSuite Integration
                  </CardTitle>
                  <CardDescription className="text-[#C8C8FF]">
                    Cloud-based e-commerce integration solution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#C8C8FF]">
                    Developed and deployed a NestJS-based integration between BigCommerce and NetSuite using AWS
                    infrastructure. Implemented secure data synchronization and automated workflows between platforms.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="text-[#B026FF] border-[#B026FF] shadow-[0_0_5px_rgba(176,38,255,0.3)]"
                    >
                      NestJS
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[#B026FF] border-[#B026FF] shadow-[0_0_5px_rgba(176,38,255,0.3)]"
                    >
                      TypeScript
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[#B026FF] border-[#B026FF] shadow-[0_0_5px_rgba(176,38,255,0.3)]"
                    >
                      AWS
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[#B026FF] border-[#B026FF] shadow-[0_0_5px_rgba(176,38,255,0.3)]"
                    >
                      Docker
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[#B026FF] border-[#B026FF] shadow-[0_0_5px_rgba(176,38,255,0.3)]"
                    >
                      PostgreSQL
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#B026FF] border-[#B026FF] hover:bg-[#B026FF]/10 shadow-[0_0_5px_rgba(176,38,255,0.3)] hover:shadow-[0_0_10px_rgba(176,38,255,0.5)]"
                  >
                    <Link href="#">View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="border-[#D580FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(213,128,255,0.3)]">
                <CardHeader>
                  <CardTitle className="text-[#D580FF] drop-shadow-[0_0_8px_#D580FF]">
                    BigCommerce App Extensions
                  </CardTitle>
                  <CardDescription className="text-[#C8C8FF]">Custom e-commerce platform extensions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#C8C8FF]">
                    Created and deployed BigCommerce App Extensions, facilitating seamless e-commerce integrations.
                    Built with NestJS and TypeScript, providing enhanced functionality for online stores.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="text-[#D580FF] border-[#D580FF] shadow-[0_0_5px_rgba(213,128,255,0.3)]"
                    >
                      NestJS
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[#D580FF] border-[#D580FF] shadow-[0_0_5px_rgba(213,128,255,0.3)]"
                    >
                      TypeScript
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[#D580FF] border-[#D580FF] shadow-[0_0_5px_rgba(213,128,255,0.3)]"
                    >
                      BigCommerce API
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[#D580FF] border-[#D580FF] shadow-[0_0_5px_rgba(213,128,255,0.3)]"
                    >
                      Prisma
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[#D580FF] border-[#D580FF] shadow-[0_0_5px_rgba(213,128,255,0.3)]"
                    >
                      PostgreSQL
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#D580FF] border-[#D580FF] hover:bg-[#D580FF]/10 shadow-[0_0_5px_rgba(213,128,255,0.3)] hover:shadow-[0_0_10px_rgba(213,128,255,0.5)]"
                  >
                    <Link href="#">View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="border-[#B026FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(176,38,255,0.3)]">
                <CardHeader>
                  <CardTitle className="text-[#B026FF] drop-shadow-[0_0_8px_#B026FF]">
                    AI Integration Services
                  </CardTitle>
                  <CardDescription className="text-[#C8C8FF]">Cloud-based AI service integrations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#C8C8FF]">
                    Integrated cloud-based services, including Amazon Rekognition and OpenAI, into backend applications.
                    Implemented image recognition and AI-powered features for enhanced user experiences.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="text-[#B026FF] border-[#B026FF] shadow-[0_0_5px_rgba(176,38,255,0.3)]"
                    >
                      NestJS
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[#B026FF] border-[#B026FF] shadow-[0_0_5px_rgba(176,38,255,0.3)]"
                    >
                      TypeScript
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[#B026FF] border-[#B026FF] shadow-[0_0_5px_rgba(176,38,255,0.3)]"
                    >
                      AWS Rekognition
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[#B026FF] border-[#B026FF] shadow-[0_0_5px_rgba(176,38,255,0.3)]"
                    >
                      OpenAI
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[#B026FF] border-[#B026FF] shadow-[0_0_5px_rgba(176,38,255,0.3)]"
                    >
                      REST APIs
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#B026FF] border-[#B026FF] hover:bg-[#B026FF]/10 shadow-[0_0_5px_rgba(176,38,255,0.3)] hover:shadow-[0_0_10px_rgba(176,38,255,0.5)]"
                  >
                    <Link href="#">View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="border-[#D580FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(213,128,255,0.3)]">
                <CardHeader>
                  <CardTitle className="text-[#D580FF] drop-shadow-[0_0_8px_#D580FF]">Monorepo Architecture</CardTitle>
                  <CardDescription className="text-[#C8C8FF]">Efficient package management system</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#C8C8FF]">
                    Implemented monorepo architecture using Turborepo for efficient package management. Streamlined
                    development workflows and improved code sharing across multiple projects.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="text-[#D580FF] border-[#D580FF] shadow-[0_0_5px_rgba(213,128,255,0.3)]"
                    >
                      Turborepo
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[#D580FF] border-[#D580FF] shadow-[0_0_5px_rgba(213,128,255,0.3)]"
                    >
                      TypeScript
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[#D580FF] border-[#D580FF] shadow-[0_0_5px_rgba(213,128,255,0.3)]"
                    >
                      Node.js
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[#D580FF] border-[#D580FF] shadow-[0_0_5px_rgba(213,128,255,0.3)]"
                    >
                      CI/CD
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[#D580FF] border-[#D580FF] shadow-[0_0_5px_rgba(213,128,255,0.3)]"
                    >
                      GitHub Actions
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#D580FF] border-[#D580FF] hover:bg-[#D580FF]/10 shadow-[0_0_5px_rgba(213,128,255,0.3)] hover:shadow-[0_0_10px_rgba(213,128,255,0.5)]"
                  >
                    <Link href="#">View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection id="experience" className="mx-auto max-w-[980px] py-8 md:py-12">
          <motion.h2
            className="mb-6 text-2xl font-bold md:text-3xl text-[#B026FF] drop-shadow-[0_0_8px_#B026FF]"
            variants={fadeInUp}
          >
            Work Experience
          </motion.h2>
          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.div
              className="rounded-lg border p-6 border-[#B026FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(176,38,255,0.3)]"
              variants={fadeInUp}
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row">
                <div>
                  <h3 className="font-bold text-[#B026FF] drop-shadow-[0_0_8px_#B026FF]">Backend Engineer</h3>
                  <p className="text-[#C8C8FF]">Minnek Digital Studio</p>
                </div>
                <p className="text-sm text-[#C8C8FF]">Nov 2023 - Present</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white">
                <li>• Developed and maintained scalable REST and GraphQL APIs using NestJS and TypeScript</li>
                <li>
                  • Integrated cloud-based services, including Amazon Rekognition and OpenAI, into backend applications
                </li>
                <li>
                  • Created and deployed BigCommerce App Extensions, facilitating seamless e-commerce integrations
                </li>
                <li>• Designed and implemented database schemas using PostgreSQL and Prisma ORM</li>
                <li>• Built and deployed containerized applications using Docker and Docker Compose</li>
                <li>• Automated API documentation using Swagger/OpenAPI</li>
                <li>• Followed Test-Driven Development (TDD) practices with Jest</li>
                <li>
                  • Developed and deployed a NestJS-based integration between BigCommerce and NetSuite using AWS
                  infrastructure
                </li>
                <li>• Configured AWS services such as S3, CloudFront, and EC2 to support scalable applications</li>
                <li>• Deployed applications using Docker Compose and Nginx with SSL via Certbot</li>
                <li>• Managed domain and DNS configurations through Porkbun and Cloudflare</li>
                <li>• Set up Coolify for streamlined application deployment</li>
                <li>• Implemented monorepo architecture using Turborepo for efficient package management</li>
              </ul>
            </motion.div>
            <motion.div
              className="rounded-lg border p-6 border-[#D580FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(213,128,255,0.3)]"
              variants={fadeInUp}
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row">
                <div>
                  <h3 className="font-bold text-[#D580FF] drop-shadow-[0_0_8px_#D580FF]">
                    Technical Support and Infrastructure Intern
                  </h3>
                  <p className="text-[#C8C8FF]">Palacio de Justicia de La Vega</p>
                </div>
                <p className="text-sm text-[#C8C8FF]">Jun 2022 - Jul 2023</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white">
                <li>• Provided IT support, troubleshooting hardware and software issues</li>
                <li>
                  • Maintained and installed network infrastructure, including switches, routers, and structured cabling
                </li>
                <li>• Assisted in the deployment of new IT equipment and software</li>
              </ul>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection id="education" className="mx-auto max-w-[980px] py-8 md:py-12">
          <motion.h2
            className="mb-6 text-2xl font-bold md:text-3xl text-[#D580FF] drop-shadow-[0_0_8px_#D580FF]"
            variants={fadeInUp}
          >
            Education & Certificates
          </motion.h2>
          <motion.div className="grid gap-6 md:grid-cols-2" variants={staggerContainer}>
            <motion.div className="space-y-6" variants={staggerContainer}>
              <motion.div
                className="rounded-lg border p-6 border-[#D580FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(213,128,255,0.3)]"
                variants={fadeInUp}
              >
                <h3 className="font-bold text-[#D580FF] drop-shadow-[0_0_8px_#D580FF]">Computer Systems Engineering</h3>
                <p className="text-[#C8C8FF]">Universidad Católica del Cibao</p>
              </motion.div>
              <motion.div
                className="rounded-lg border p-6 border-[#D580FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(213,128,255,0.3)]"
                variants={fadeInUp}
              >
                <h3 className="font-bold text-[#D580FF] drop-shadow-[0_0_8px_#D580FF]">
                  Technical Baccalaureate in Tax Administration
                </h3>
                <p className="text-[#C8C8FF]">Colegio Eugenio María de Hostos</p>
              </motion.div>
            </motion.div>
            <motion.div className="space-y-4" variants={staggerContainer}>
              <motion.h3 className="font-bold text-[#D580FF] drop-shadow-[0_0_8px_#D580FF]" variants={fadeInUp}>
                Certificates
              </motion.h3>
              <motion.div
                className="rounded-lg border p-4 border-[#D580FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(213,128,255,0.3)]"
                variants={fadeInUp}
              >
                <p className="text-sm text-white">CCNA: Switching, Routing, and Wireless Essentials (Jan 2023)</p>
              </motion.div>
              <motion.div
                className="rounded-lg border p-4 border-[#D580FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(213,128,255,0.3)]"
                variants={fadeInUp}
              >
                <p className="text-sm text-white">Docker Certification (Jun 2020)</p>
              </motion.div>
              <motion.div
                className="rounded-lg border p-4 border-[#D580FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(213,128,255,0.3)]"
                variants={fadeInUp}
              >
                <p className="text-sm text-white">Object-Oriented Programming and Algorithms with Python (Oct 2020)</p>
              </motion.div>
              <motion.div
                className="rounded-lg border p-4 border-[#D580FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(213,128,255,0.3)]"
                variants={fadeInUp}
              >
                <p className="text-sm text-white">Programming Language Development: Interpreters (Feb 2021)</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="mx-auto max-w-[980px] py-8 md:py-12">
          <motion.h2
            className="mb-6 text-2xl font-bold md:text-3xl text-[#B026FF] drop-shadow-[0_0_8px_#B026FF]"
            variants={fadeInUp}
          >
            Get In Touch
          </motion.h2>
          <motion.div className="grid gap-6 md:grid-cols-2" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Card className="border-[#B026FF]/30 bg-[#1A1A2E] shadow-[0_0_10px_rgba(176,38,255,0.3)]">
                <CardHeader>
                  <CardTitle className="text-[#B026FF] drop-shadow-[0_0_8px_#B026FF]">Contact Information</CardTitle>
                  <CardDescription className="text-[#C8C8FF]">
                    Feel free to reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#B026FF]" />
                    <p className="text-white">odanisdejesus@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-[#B026FF]" />
                    <Link
                      href="https://linkedin.com/in/odanisesquea"
                      className="text-white hover:text-[#B026FF] hover:drop-shadow-[0_0_8px_#B026FF] transition-all"
                    >
                      LinkedIn
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-[#B026FF]" />
                    <Link
                      href="https://github.com/reisearnor"
                      className="text-white hover:text-[#B026FF] hover:drop-shadow-[0_0_8px_#B026FF] transition-all"
                    >
                      GitHub
                    </Link>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-[#C8C8FF]">
                    I'm currently open to new opportunities and interesting projects.
                  </p>
                </CardFooter>
              </Card>
            </motion.div>
            <motion.div className="flex flex-col justify-center" variants={fadeInUp}>
              <p className="mb-4 text-white">
                Looking for a software engineer who can build robust, scalable systems? I'd love to discuss how my
                skills and experience can contribute to your team's success.
              </p>
              <p className="mb-6 text-white">
                Whether you have a specific project in mind or just want to connect, don't hesitate to reach out.
              </p>
              <Button
                className="w-full sm:w-auto bg-[#B026FF] hover:bg-[#B026FF]/90 text-white shadow-[0_0_15px_rgba(176,38,255,0.7)] hover:shadow-[0_0_20px_rgba(176,38,255,0.9)] transition-all"
                size="lg"
                asChild
              >
                <Link href="mailto:odanisdejesus@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Send Email
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </main>

      <footer className="border-t py-6 md:py-0 border-[#B026FF]/30">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-[#C8C8FF] md:text-left">
            © {new Date().getFullYear()} Odanis Esquea Núñez. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/reisearnor" aria-label="Github">
              <Github className="h-5 w-5 text-[#B026FF] hover:text-[#B026FF] hover:drop-shadow-[0_0_8px_#B026FF] transition-all" />
            </Link>
            <Link href="https://linkedin.com/in/odanisesquea" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-[#D580FF] hover:text-[#D580FF] hover:drop-shadow-[0_0_8px_#D580FF] transition-all" />
            </Link>
            <Link href="mailto:odanisdejesus@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5 text-[#B026FF] hover:text-[#B026FF] hover:drop-shadow-[0_0_8px_#B026FF] transition-all" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
