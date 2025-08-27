import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GradientBackground } from "@/components/ui/gradient-background";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  MapPin, 
  Search, 
  Star, 
  Building2,
  Heart,
  TrendingUp,
  ArrowRight,
  User,
  MessageCircle
} from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { SlideButton } from "@/components/ui/slide-button";

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
      title: "Apartamento Moderno em Meireles",
      price: "R$ 450.000",
      location: "Meireles, Fortaleza",
      image: "/public/lovable-uploads/9e5ac0b0-8ad7-4e6f-bfbe-7b405bac39ae.png",
      beds: 3,
      baths: 2,
      area: "120m²",
      featured: true
    },
    {
      id: 2,
      title: "Casa com Piscina na Aldeota",
      price: "R$ 680.000",
      location: "Aldeota, Fortaleza",
      image: "/public/lovable-uploads/9e5ac0b0-8ad7-4e6f-bfbe-7b405bac39ae.png",
      beds: 4,
      baths: 3,
      area: "200m²",
      featured: true
    },
    {
      id: 3,
      title: "Cobertura Vista Mar",
      price: "R$ 1.200.000",
      location: "Praia de Iracema, Fortaleza",
      image: "/public/lovable-uploads/9e5ac0b0-8ad7-4e6f-bfbe-7b405bac39ae.png",
      beds: 5,
      baths: 4,
      area: "350m²",
      featured: true
    }
  ];

  // Sample markers for Fortaleza map
  const mapMarkers = [
    {
      id: 1,
      position: [-3.7319, -38.5267],
      popup: {
        title: "Centro de Fortaleza",
        content: "Região histórica da cidade"
      }
    },
    {
      id: 2,
      position: [-3.7200, -38.5100],
      popup: {
        title: "Meireles",
        content: "Bairro nobre com vista para o mar"
      }
    },
    {
      id: 3,
      position: [-3.7350, -38.5200],
      popup: {
        title: "Aldeota",
        content: "Centro comercial e residencial"
      }
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
              A plataforma mais completa para encontrar, anunciar e gerenciar imóveis em Fortaleza
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <InteractiveHoverButton 
                text="Buscar" 
                className="bg-white text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 w-auto min-w-[160px]"
              />
              <Link to="/register">
                <InteractiveHoverButton 
                  text="Anunciar" 
                  className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 w-auto min-w-[160px]"
                />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Action Buttons */}
        <div className="absolute top-6 right-6 flex gap-3">
          <ThemeToggle />
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
              Descubra os melhores imóveis selecionados especialmente para você em Fortaleza
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
            <InteractiveHoverButton 
              text="Ver Todos" 
              className="bg-background border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 w-auto min-w-[160px]"
            />
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="w-4 h-4 mr-1" />
              Explorar no Mapa
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Visualize Imóveis em Fortaleza</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Navegue pelo mapa interativo e encontre imóveis nos melhores bairros da cidade
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden border-0 bg-background/50 backdrop-blur-sm p-8">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
                <p className="text-lg">Mapa interativo em desenvolvimento</p>
                <p className="text-sm">Visualize imóveis em Fortaleza em breve!</p>
              </div>
            </Card>
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
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <SlideButton className="bg-white text-primary hover:bg-white/90" />
              <Link to="/register">
                <InteractiveHoverButton 
                  text="Anunciar Grátis" 
                  className="border-white text-white hover:bg-white hover:text-primary px-6 py-3 w-auto min-w-[180px]"
                />
              </Link>
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
                Conectando pessoas aos seus imóveis ideais em Fortaleza.
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
                  <span>Fortaleza, CE</span>
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