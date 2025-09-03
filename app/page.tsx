"use client"

import { CardDescription } from "@/components/ui/card"
import { CardContent } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ExternalLink,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Palette,
  BookOpen,
  Mic,
  Zap,
  ChevronLeft,
  ChevronRight,
  Home,
  Info,
  FolderOpen,
  Building,
  MessageSquare,
  Activity,
  FileText,
  UserCheck,
  Play,
} from "lucide-react"

export default function CaputUpacWebsite() {
  const [activeSection, setActiveSection] = useState(0)
  const [currentBannerImage, setCurrentBannerImage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const bannerImages = [
    "/desert-landscape-with-sunflowers-and-artistic-coll.png",
    "/marine-port-scene-with-fish-and-artistic-graffiti.png",
    "/mountain-hills-with-artistic-typography-and-collag.png",
    "/northern-chile-landscape-with-artistic-elements.png",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerImage((prev) => (prev + 1) % bannerImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [bannerImages.length])

  const sections = [
    { id: "inicio", label: "Inicio", icon: Home },
    { id: "somos", label: "Somos", icon: Info },
    { id: "proyectos", label: "Proyectos", icon: FolderOpen },
    { id: "residencias", label: "Residencias", icon: Building },
    { id: "charlas", label: "Charlas", icon: MessageSquare },
    { id: "acciones", label: "Acciones", icon: Activity },
    { id: "publicaciones", label: "Publicaciones", icon: FileText },
    { id: "artistas", label: "Artistas", icon: UserCheck },
    { id: "videos", label: "Videos", icon: Play },
  ]

  const projects = [
    {
      title: "Presión",
      year: "2023",
      location: "Iquique",
      theme: "Arte y territorio",
      description: "Exploración de las tensiones urbanas en el desierto de Atacama",
      image: "/urban-tensions-desert-atacama-artistic-interventio.png",
    },
    {
      title: "Agencia de Valores",
      year: "2022",
      location: "Putre",
      theme: "Economía comunitaria",
      description: "Reflexión sobre sistemas de intercambio alternativos",
      image: "/community-economy-alternative-exchange-systems-art.png",
    },
    {
      title: "Más quinoa menos arroz",
      year: "2021",
      location: "Norte de Chile",
      theme: "Soberanía alimentaria",
      description: "Proyecto sobre identidad culinaria y resistencia cultural",
      image: "/quinoa-food-sovereignty-cultural-resistance-chile.png",
    },
    {
      title: "Zona de Campamento",
      year: "2020",
      location: "Chillán",
      theme: "Memoria colectiva",
      description: "Intervención sobre espacios de habitabilidad precaria",
      image: "/camp-zone-precarious-housing-collective-memory.png",
    },
    {
      title: "Operaciones Sensibles",
      year: "2019",
      location: "Latinoamérica",
      theme: "Arte y ciencia",
      description: "Colaboración interdisciplinaria sobre percepción",
      image: "/sensitive-operations-art-science-perception-collab.png",
    },
    {
      title: "Carga Máxima",
      year: "2018",
      location: "Iquique",
      theme: "Gráfica popular",
      description: "Exploración de la comunicación visual urbana",
      image: "/maximum-load-popular-graphics-urban-visual-communi.png",
    },
  ]

  const residencies = [
    {
      title: "Residencia Colaborativa Chile",
      year: "2023",
      focus: "Arte y territorio",
      description: "Intercambio creativo en comunidades rurales",
    },
    {
      title: "Gráfica del Desierto - Guatemala",
      year: "2022",
      focus: "Mediación artística",
      description: "Talleres de serigrafía comunitaria",
    },
    {
      title: "Residencia Virtual México",
      year: "2021",
      focus: "Arte digital",
      description: "Exploración de nuevos medios durante pandemia",
    },
    {
      title: "Intercambio España",
      year: "2020",
      focus: "Gráfica experimental",
      description: "Colaboración con colectivos europeos",
    },
  ]

  const workshops = [
    {
      title: "Licuadora Gráfica",
      type: "Taller",
      description: "Técnicas de collage y composición experimental",
    },
    {
      title: "Errar es ganar",
      type: "Charla",
      description: "Reflexiones sobre el proceso creativo y el error",
    },
    {
      title: "NO ME ROMPAN LOS HUEVOS",
      type: "Performance",
      description: "Acción sobre límites y resistencia creativa",
    },
  ]

  const actions = [
    {
      title: "PLANETA PAPA",
      year: "2023",
      theme: "Medio ambiente",
      description: "Intervención sobre soberanía alimentaria",
    },
    {
      title: "Huajache",
      year: "2022",
      theme: "Migración",
      description: "Acción sobre fronteras y desplazamiento",
    },
    {
      title: "Movedizo",
      year: "2021",
      theme: "Arte comunitario",
      description: "Intervención en espacios públicos",
    },
    {
      title: "CALDO DE CABEZA",
      year: "2020",
      theme: "Memoria colectiva",
      description: "Performance sobre identidad y territorio",
    },
  ]

  const artists = [
    {
      name: "Ana Martínez",
      role: "Artista visual",
      portfolio: "https://anamartinez.art",
      image: "/artist-portrait-ana-martinez-visual-artist.png",
      social: {
        instagram: "@ana_martinez_art",
        twitter: "@anamartinez",
      },
    },
    {
      name: "Carlos Mendoza",
      role: "Diseñador gráfico",
      portfolio: "https://carlosmendoza.design",
      image: "/artist-portrait-carlos-mendoza-graphic-designer.png",
      social: {
        instagram: "@carlos_design",
        twitter: "@carlosmendoza",
      },
    },
    {
      name: "María Fernández",
      role: "Performer",
      portfolio: "https://mariafernandez.performance",
      image: "/artist-portrait-maria-fernandez-performer.png",
      social: {
        instagram: "@maria_performance",
        youtube: "@mariafernandez",
      },
    },
  ]

  const nextSection = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveSection((prev) => (prev + 1) % sections.length)
      setIsTransitioning(false)
    }, 150)
  }

  const prevSection = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveSection((prev) => (prev - 1 + sections.length) % sections.length)
      setIsTransitioning(false)
    }, 150)
  }

  const renderSection = () => {
    const currentSectionId = sections[activeSection].id

    switch (currentSectionId) {
      case "inicio":
        return (
          <div className="min-h-screen relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={bannerImages[currentBannerImage] || "/placeholder.svg"}
                alt="CAPUT UPAC Banner"
                className="w-full h-full object-cover transition-opacity duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
            </div>

            <div className="absolute top-20 left-10 w-32 h-32 opacity-40">
              <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
                <circle cx="50" cy="50" r="40" fill="currentColor" />
                <path d="M30 50 Q50 30 70 50 Q50 70 30 50" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
            </div>

            <div className="absolute bottom-20 right-10 w-24 h-24 opacity-50">
              <svg viewBox="0 0 100 100" className="w-full h-full text-muted">
                <polygon points="50,10 90,90 10,90" fill="currentColor" />
                <circle cx="50" cy="60" r="15" fill="white" />
              </svg>
            </div>

            <svg
              className="absolute top-32 right-32 w-20 h-20 text-accent opacity-70 animate-pulse"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1L13.5 2.5L16.17 5.17C15.24 5.06 14.32 5 13.4 5C10.3 5 7.4 5.69 5 7.23V9C7.4 7.69 10.3 7 13.4 7C16.5 7 19.4 7.69 21 9M21 11V13C19.4 14.31 16.5 15 13.4 15C10.3 15 7.4 14.31 5 13V11C7.4 12.31 10.3 13 13.4 13C16.5 13 19.4 12.31 21 11M5 15V17C7.4 18.31 10.3 19 13.4 19C16.5 19 19.4 18.31 21 17V15C19.4 16.31 16.5 17 13.4 17C10.3 17 7.4 16.31 5 15Z" />
            </svg>

            <svg
              className="absolute bottom-40 left-32 w-24 h-24 text-secondary opacity-60 animate-spin"
              style={{ animationDuration: "20s" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12,2A3,3 0 0,1 15,5V8.5A1.5,1.5 0 0,0 16.5,10A3,3 0 0,1 19.5,13A3,3 0 0,1 16.5,16A1.5,1.5 0 0,0 15,17.5V21A3,3 0 0,1 12,24A3,3 0 0,1 9,21V17.5A1.5,1.5 0 0,0 7.5,16A3,3 0 0,1 4.5,13A3,3 0 0,1 7.5,10A1.5,1.5 0 0,0 9,8.5V5A3,3 0 0,1 12,2M12,7A6,6 0 0,0 6,13A6,6 0 0,0 12,19A6,6 0 0,0 18,13A6,6 0 0,0 12,7M12,9A4,4 0 0,1 16,13A4,4 0 0,1 12,17A4,4 0 0,1 8,13A4,4 0 0,1 12,9Z" />
            </svg>

            <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
              <div className="text-center max-w-4xl">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
                  <span className="text-primary drop-shadow-lg">CAPUT</span>
                  <span className="text-secondary drop-shadow-lg">UPAC</span>
                </h1>
                <p className="text-2xl md:text-3xl font-semibold mb-8 text-accent drop-shadow-md">colectivo de arte</p>

                <div className="space-y-6 text-lg md:text-xl">
                  <p className="font-bold text-primary text-balance drop-shadow-md">"HACER ARTE CON TODO Y SIN NADA"</p>
                  <p className="text-foreground/90 text-balance drop-shadow-sm">destruir&construir</p>
                  <p className="font-bold text-secondary text-balance drop-shadow-md">CAPUT CAPUT CAPUT</p>
                </div>

                <div className="mt-12 max-w-2xl mx-auto">
                  <p className="text-lg text-foreground/80 leading-relaxed text-balance drop-shadow-sm">
                    Somos un colectivo de arte colaborativo, territorial y experimental, con enfoque social y educativo.
                    Trabajamos desde los territorios del norte de Chile, creando puentes entre el arte, la comunidad y
                    la transformación social.
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-border"
                    onClick={() => setActiveSection(2)}
                  >
                    Explorar Proyectos
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-border bg-background/80 hover:bg-background"
                    onClick={() => setActiveSection(1)}
                  >
                    Conocer el Colectivo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )

      case "somos":
        return (
          <div className="section-marine space-y-12 py-12">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-primary text-balance">Somos CAPUT UPAC</h2>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-pretty">
                    CAPUT UPAC es un colectivo de arte que nace desde la necesidad de crear, experimentar y transformar
                    territorios a través del arte colaborativo. Trabajamos desde una perspectiva territorial,
                    entendiendo el arte como una herramienta de mediación social y construcción comunitaria.
                  </p>

                  <p className="text-lg leading-relaxed text-pretty">
                    Nuestro trabajo se desarrolla principalmente en el norte de Chile, en ciudades como Iquique, Putre y
                    Chillán, pero también hemos expandido nuestras acciones a otros territorios latinoamericanos,
                    creando redes de colaboración y intercambio creativo.
                  </p>

                  <p className="text-lg leading-relaxed text-pretty">
                    Creemos en el arte como proceso de transformación social, donde la experimentación, el error y la
                    colaboración son fundamentales para generar nuevas formas de habitar y relacionarse con el
                    territorio.
                  </p>
                </div>

                <div className="space-y-8">
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-primary flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        Territorios
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Iquique</Badge>
                        <Badge variant="secondary">Putre</Badge>
                        <Badge variant="secondary">Chillán</Badge>
                        <Badge variant="secondary">Guatemala</Badge>
                        <Badge variant="secondary">México</Badge>
                        <Badge variant="secondary">España</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-secondary/20">
                    <CardHeader>
                      <CardTitle className="text-secondary flex items-center gap-2">
                        <Palette className="w-5 h-5" />
                        Enfoques
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Arte colaborativo y territorial</li>
                        <li>• Mediación artística comunitaria</li>
                        <li>• Experimentación gráfica</li>
                        <li>• Educación popular</li>
                        <li>• Transformación social</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )

      case "proyectos":
        return (
          <div className="section-desert space-y-12 py-12">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-4xl md:text-6xl font-bold mb-12 text-primary text-balance">Proyectos</h2>

              <div className="collage-grid md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <div key={index} className="artistic-overlay overflow-hidden border-2 border-border relative group">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="content absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent">
                      <div className="space-y-2">
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                            {project.year}
                          </Badge>
                          <Badge variant="outline" className="text-xs border-accent text-accent">
                            {project.location}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <p className="text-sm font-medium text-secondary">{project.theme}</p>
                        <p className="text-sm leading-relaxed text-white/90">{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case "residencias":
        return (
          <div className="section-port space-y-12 py-12">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-4xl md:text-6xl font-bold mb-12 text-primary text-balance">Residencias</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {residencies.map((residency, index) => (
                  <Card key={index} className="border-primary/20">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="outline">{residency.year}</Badge>
                        <Badge variant="secondary">{residency.focus}</Badge>
                      </div>
                      <CardTitle className="text-primary text-balance">{residency.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-pretty">{residency.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case "charlas":
        return (
          <div className="section-nature space-y-12 py-12">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-4xl md:text-6xl font-bold mb-12 text-primary text-balance">Charlas y Talleres</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workshops.map((workshop, index) => (
                  <Card key={index} className="border-primary/20">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        {workshop.type === "Taller" && <BookOpen className="w-4 h-4 text-secondary" />}
                        {workshop.type === "Charla" && <Mic className="w-4 h-4 text-secondary" />}
                        {workshop.type === "Performance" && <Zap className="w-4 h-4 text-secondary" />}
                        <Badge variant="secondary" className="text-xs">
                          {workshop.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-primary text-balance">{workshop.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-pretty">{workshop.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6 text-secondary">Participaciones Destacadas</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-secondary/20">
                    <CardContent className="pt-6">
                      <ul className="space-y-2 text-sm">
                        <li>• Congresos de educación artística</li>
                        <li>• Ferias del libro independiente</li>
                        <li>• Encuentros universitarios</li>
                        <li>• Festivales de arte comunitario</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-secondary/20">
                    <CardContent className="pt-6">
                      <ul className="space-y-2 text-sm">
                        <li>• Talleres de mediación artística</li>
                        <li>• Seminarios de gráfica popular</li>
                        <li>• Encuentros de arte territorial</li>
                        <li>• Residencias colaborativas</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )

      case "acciones":
        return (
          <div className="section-collective space-y-12 py-12">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-4xl md:text-6xl font-bold mb-12 text-primary text-balance">Acciones</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {actions.map((action, index) => (
                  <Card key={index} className="border-primary/20">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="outline">{action.year}</Badge>
                        <Badge variant="secondary">{action.theme}</Badge>
                      </div>
                      <CardTitle className="text-primary text-balance">{action.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-pretty">{action.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-16">
                <Card className="border-secondary/20">
                  <CardHeader>
                    <CardTitle className="text-secondary">Enfoques de Nuestras Acciones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Arte Comunitario</h4>
                        <p className="text-sm text-muted-foreground">
                          Intervenciones que involucran directamente a las comunidades en procesos de creación
                          colectiva.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Memoria Colectiva</h4>
                        <p className="text-sm text-muted-foreground">
                          Acciones que rescatan y visibilizan historias y saberes de los territorios.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Medio Ambiente</h4>
                        <p className="text-sm text-muted-foreground">
                          Reflexiones artísticas sobre la relación entre comunidad y ecosistema.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Migración</h4>
                        <p className="text-sm text-muted-foreground">
                          Intervenciones sobre fronteras, desplazamiento y construcción de identidad.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )

      case "publicaciones":
        return (
          <div className="section-marine space-y-12 py-12">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-4xl md:text-6xl font-bold mb-12 text-primary text-balance">Publicaciones</h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-secondary">CAPUT10</h3>
                  <Card className="border-primary/20">
                    <CardContent className="pt-6">
                      <p className="text-sm leading-relaxed mb-4 text-pretty">
                        Cuaderno de apuntes sobre una década de trabajo colaborativo. Una compilación de reflexiones,
                        procesos y aprendizajes del colectivo a lo largo de diez años de experimentación artística.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Autoedición</Badge>
                        <Badge variant="outline">Arte colaborativo</Badge>
                        <Badge variant="outline">Territorio</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 text-secondary">Participaciones Internacionales</h3>
                  <div className="space-y-4">
                    <Card className="border-secondary/20">
                      <CardContent className="pt-4">
                        <h4 className="font-semibold text-primary mb-2">Museo Reina Sofía</h4>
                        <p className="text-sm text-muted-foreground">
                          Participación en exposición colectiva sobre arte latinoamericano contemporáneo.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-secondary/20">
                      <CardContent className="pt-4">
                        <h4 className="font-semibold text-primary mb-2">Festival Periférica</h4>
                        <p className="text-sm text-muted-foreground">
                          Presentación de proyecto sobre gráfica popular y territorio.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-secondary/20">
                      <CardContent className="pt-4">
                        <h4 className="font-semibold text-primary mb-2">GutterFest</h4>
                        <p className="text-sm text-muted-foreground">
                          Participación en festival de publicaciones independientes.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6 text-secondary">Revistas y Medios</h3>
                <Card className="border-accent/20">
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Revistas Especializadas</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Arte y Territorio</li>
                          <li>• Gráfica Latinoamericana</li>
                          <li>• Mediación Artística</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Catálogos</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Bienal de Arte Joven</li>
                          <li>• Encuentro de Colectivos</li>
                          <li>• Festival de Arte Comunitario</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Libros Colectivos</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Arte y Transformación Social</li>
                          <li>• Prácticas Colaborativas</li>
                          <li>• Territorio y Comunidad</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )

      case "artistas":
        return (
          <div className="section-collective space-y-12 py-12">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-4xl md:text-6xl font-bold mb-12 text-primary text-balance">Artistas del Colectivo</h2>

              <div className="collage-grid md:grid-cols-2 lg:grid-cols-3">
                {artists.map((artist, index) => (
                  <div key={index} className="artistic-overlay overflow-hidden border-2 border-border relative group">
                    <img
                      src={artist.image || "/placeholder.svg"}
                      alt={artist.name}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="content absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{artist.name}</h3>
                          <p className="text-secondary font-medium">{artist.role}</p>
                        </div>

                        <Button
                          variant="secondary"
                          size="sm"
                          className="w-full bg-secondary text-secondary-foreground"
                          asChild
                        >
                          <a href={artist.portfolio} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Ver Portafolio
                          </a>
                        </Button>

                        <div className="flex flex-wrap gap-2">
                          {artist.social.instagram && (
                            <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80" asChild>
                              <a
                                href={`https://instagram.com/${artist.social.instagram.replace("@", "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Instagram className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                          {artist.social.twitter && (
                            <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80" asChild>
                              <a
                                href={`https://twitter.com/${artist.social.twitter.replace("@", "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Twitter className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                          {artist.social.youtube && (
                            <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80" asChild>
                              <a
                                href={`https://youtube.com/${artist.social.youtube.replace("@", "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Youtube className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case "videos":
        return (
          <div className="section-nature space-y-12 py-12">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-4xl md:text-6xl font-bold mb-12 text-primary text-balance">Videos</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Documental: "Territorio y Arte"</CardTitle>
                    <CardDescription>Proceso creativo en el desierto de Atacama</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                      <Youtube className="w-12 h-12 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground text-pretty">
                      Registro del proceso de creación colectiva en las comunidades del norte de Chile, explorando la
                      relación entre arte y territorio.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Performance: "PLANETA PAPA"</CardTitle>
                    <CardDescription>Acción sobre soberanía alimentaria</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                      <Youtube className="w-12 h-12 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground text-pretty">
                      Registro de la intervención artística sobre identidad culinaria y resistencia cultural en el
                      altiplano chileno.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Taller: "Licuadora Gráfica"</CardTitle>
                    <CardDescription>Técnicas de collage experimental</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                      <Youtube className="w-12 h-12 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground text-pretty">
                      Documentación del taller de técnicas de composición y collage desarrollado en diferentes
                      comunidades.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Residencia: "Gráfica del Desierto"</CardTitle>
                    <CardDescription>Intercambio creativo Guatemala-Chile</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                      <Youtube className="w-12 h-12 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground text-pretty">
                      Registro del intercambio artístico entre colectivos de Guatemala y Chile, explorando técnicas de
                      serigrafía comunitaria.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16">
                <Card className="border-secondary/20">
                  <CardHeader>
                    <CardTitle className="text-secondary">Canal de YouTube</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed mb-4 text-pretty">
                      Suscríbete a nuestro canal para ver más contenido sobre procesos creativos, talleres, residencias
                      y acciones del colectivo.
                    </p>
                    <Button className="bg-red-600 hover:bg-red-700 text-white" asChild>
                      <a href="https://youtube.com/@caputupac" target="_blank" rel="noopener noreferrer">
                        <Youtube className="w-4 h-4 mr-2" />
                        Ver Canal Completo
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-2xl text-primary">Sección en construcción...</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <nav className="sticky top-0 z-50 bg-sidebar backdrop-blur-sm border-b-2 border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold">
                <span className="text-sidebar-foreground">CAPUT</span>
                <span className="text-sidebar-accent">UPAC</span>
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {sections.map((section, index) => {
                const Icon = section.icon
                return (
                  <Button
                    key={section.id}
                    variant={activeSection === index ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveSection(index)}
                    className={
                      activeSection === index
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground hover:text-sidebar-accent"
                    }
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {section.label}
                  </Button>
                )
              })}
            </div>

            <div className="md:hidden flex items-center space-x-1">
              {sections.slice(0, 4).map((section, index) => {
                const Icon = section.icon
                return (
                  <Button
                    key={section.id}
                    variant={activeSection === index ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveSection(index)}
                    className={
                      activeSection === index
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground hover:text-sidebar-accent"
                    }
                  >
                    <Icon className="w-4 h-4" />
                  </Button>
                )
              })}
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-sidebar-foreground hover:text-sidebar-accent" asChild>
                <a href="mailto:contacto@caputupac.cl">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-sidebar-foreground hover:text-sidebar-accent" asChild>
                <a href="https://instagram.com/caputupac" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSection}
          className="sun-button bg-background/80 border-2 border-border hover:bg-background w-12 h-12 rounded-full p-0"
        >
          <ChevronLeft className="w-5 h-5 text-primary icon" />
        </Button>
      </div>

      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
        <Button
          variant="outline"
          size="sm"
          onClick={nextSection}
          className="sun-button bg-background/80 border-2 border-border hover:bg-background w-12 h-12 rounded-full p-0"
        >
          <ChevronRight className="w-5 h-5 text-primary icon" />
        </Button>
      </div>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex space-x-2">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`w-3 h-3 rounded-full border-2 border-border transition-colors ${
                activeSection === index ? "bg-primary" : "bg-background/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className={`section-transition ${isTransitioning ? "opacity-50 scale-95" : "opacity-100 scale-100"}`}>
        {renderSection()}
      </main>

      <footer className="bg-sidebar border-t-2 border-border py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-sidebar-foreground">CAPUT</span>
                <span className="text-sidebar-accent">UPAC</span>
              </h3>
              <p className="text-sm text-sidebar-foreground/80 leading-relaxed text-pretty">
                Colectivo de arte colaborativo, territorial y experimental. Trabajamos desde el norte de Chile creando
                puentes entre arte, comunidad y transformación social.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sidebar-foreground">Contacto</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2 text-sidebar-foreground/80">
                  <Mail className="w-4 h-4" />
                  contacto@caputupac.cl
                </p>
                <p className="flex items-center gap-2 text-sidebar-foreground/80">
                  <MapPin className="w-4 h-4" />
                  Norte de Chile
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sidebar-foreground">Síguenos</h4>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="text-sidebar-foreground hover:text-sidebar-accent" asChild>
                  <a href="https://instagram.com/caputupac" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-sidebar-foreground hover:text-sidebar-accent" asChild>
                  <a href="https://youtube.com/@caputupac" target="_blank" rel="noopener noreferrer">
                    <Youtube className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-sidebar-foreground hover:text-sidebar-accent" asChild>
                  <a href="https://twitter.com/caputupac" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-border" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-sidebar-foreground/80">
            <p>© 2024 CAPUT UPAC. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0 text-sidebar-accent font-bold">"HACER ARTE CON TODO Y SIN NADA"</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
