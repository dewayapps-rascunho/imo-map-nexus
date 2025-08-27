import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GradientBackground } from "@/components/ui/gradient-background";
import { 
  MapPin, 
  Home, 
  Search, 
  Star, 
  Users,
  Building2,
  Shield,
  Zap,
  Heart,
  TrendingUp,
  ArrowRight,
  User,
  MessageCircle
} from "lucide-react";

const heroGradients = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
];

const Index = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  const featuredProperties = [
    {
      id: 1,
      title: "Apartamento Moderno em Copacabana",
      price: "R$ 850.000",
      location: "Copacabana, Rio de Janeiro",
      image: "/public/lovable-uploads/9e5ac0b0-8ad7-4e6f-bfbe-7b405bac39ae.png",
      beds: 3,
      baths: 2,
      area: "120m²",
      featured: true
    },
    {
      id: 2,
      title: "Casa com Piscina na Barra",
      price: "R$ 1.200.000",
      location: "Barra da Tijuca, Rio de Janeiro",
      image: "/public/lovable-uploads/9e5ac0b0-8ad7-4e6f-bfbe-7b405bac39ae.png",
      beds: 4,
      baths: 3,
      area: "200m²",
      featured: true
    },
    {
      id: 3,
      title: "Cobertura Vista Mar",
      price: "R$ 2.500.000",
      location: "Ipanema, Rio de Janeiro",
      image: "/public/lovable-uploads/9e5ac0b0-8ad7-4e6f-bfbe-7b405bac39ae.png",
      beds: 5,
      baths: 4,
      area: "350m²",
      featured: true
    }
  ];

  const stats = [
    { icon: Home, label: "Imóveis", value: "10.000+" },
    { icon: Users, label: "Clientes", value: "5.000+" },
    { icon: Building2, label: "Imobiliárias", value: "200+" },
    { icon: Star, label: "Avaliação", value: "4.9" }
  ];

  const features = [
    {
      icon: Search,
      title: "Busca Inteligente",
      description: "Encontre o imóvel perfeito com nossos filtros avançados"
    },
    {
      icon: MapPin,
      title: "Mapa Interativo", 
      description: "Visualize imóveis em um mapa completo da cidade"
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Transações seguras e verificadas"
    },
    {
      icon: Zap,
      title: "Resposta Rápida",
      description: "Connect-se diretamente com proprietários via WhatsApp"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <GradientBackground 
        gradients={heroGradients}
        animationDuration={12}
        className="relative overflow-hidden"
      >
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Logo */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold">IMO MAP</h1>
            </div>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              A plataforma mais completa para encontrar, anunciar e gerenciar imóveis no Rio de Janeiro
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                <Search className="w-5 h-5 mr-2" />
                Buscar Imóveis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                <Link to="/register" className="flex items-center">
                  <Building2 className="w-5 h-5 mr-2" />
                  Anunciar Imóvel
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-white/80" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Floating Action Buttons */}
        <div className="absolute top-6 right-6 flex gap-3">
          <Link to="/login">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm">
              <User className="w-4 h-4 mr-2" />
              Entrar
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-white text-primary hover:bg-white/90">
              <Building2 className="w-4 h-4 mr-2" />
              Cadastrar
            </Button>
          </Link>
        </div>
      </GradientBackground>

      {/* Featured Properties */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-1" />
              Destaques
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Imóveis em Destaque</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubra os melhores imóveis selecionados especialmente para você
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="relative h-48 bg-muted">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm">
                    <Heart className="w-3 h-3 mr-1" />
                    Destaque
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{property.location}</span>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {property.title}
                  </h3>
                  <div className="text-2xl font-bold text-primary mb-4">{property.price}</div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{property.beds} quartos</span>
                    <span>{property.baths} banheiros</span>
                    <span>{property.area}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="group">
              Ver Todos os Imóveis
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Zap className="w-4 h-4 mr-1" />
              Recursos
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Por que escolher o IMO MAP?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tecnologia de ponta para uma experiência única na busca do seu imóvel ideal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Pronto para encontrar seu novo lar?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Junte-se a milhares de pessoas que já encontraram o imóvel dos seus sonhos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Search className="w-5 h-5 mr-2" />
                Começar Busca
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/register" className="flex items-center">
                  <Building2 className="w-5 h-5 mr-2" />
                  Anunciar Grátis  
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="font-bold text-lg">IMO MAP</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Conectando pessoas aos seus imóveis ideais no Rio de Janeiro.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Plataforma</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-primary">Buscar</Link></li>
                <li><Link to="#" className="hover:text-primary">Anunciar</Link></li>
                <li><Link to="#" className="hover:text-primary">Favoritos</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-primary">Ajuda</Link></li>
                <li><Link to="#" className="hover:text-primary">Contato</Link></li>
                <li><Link to="#" className="hover:text-primary">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>(21) 99999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Rio de Janeiro, RJ</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 IMO MAP. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;