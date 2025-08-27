import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GradientBackground } from "@/components/ui/gradient-background";
import { ThemeToggle } from "@/components/theme-toggle";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { SlideButton } from "@/components/ui/slide-button";
import { SlidingCTAButton } from "@/components/ui/sliding-cta-button";
import { SmartCombobox } from "@/components/ui/smart-combo-box";
import { 
  MapPin, 
  Search, 
  Star, 
  Building2,
  Heart,
  TrendingUp,
  ArrowRight,
  User,
  MessageCircle,
  Home,
  Building,
  Bed,
  Bath
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
  const [searchValue, setSearchValue] = useState<string | null>(null);
  
  const propertyOptions = [
    { id: "apartamento", label: "Apartamento", group: "Tipo", icon: <Building className="size-4" /> },
    { id: "casa", label: "Casa", group: "Tipo", icon: <Home className="size-4" /> },
    { id: "cobertura", label: "Cobertura", group: "Tipo", icon: <Building2 className="size-4" /> },
    { id: "aldeota", label: "Aldeota", group: "Bairro", icon: <MapPin className="size-4" /> },
    { id: "meireles", label: "Meireles", group: "Bairro", icon: <MapPin className="size-4" /> },
    { id: "praia-futuro", label: "Praia do Futuro", group: "Bairro", icon: <MapPin className="size-4" /> },
    { id: "centro", label: "Centro", group: "Bairro", icon: <MapPin className="size-4" /> },
  ];

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
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Logo */}
            <div className="inline-flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold">IMO MAP</h1>
            </div>
            
            <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              A plataforma mais completa para encontrar, anunciar e gerenciar imóveis em Fortaleza
            </p>
          </div>
        </div>
        
        {/* Floating Action Buttons */}
        <div className="absolute top-4 md:top-6 right-4 md:right-6 flex flex-col sm:flex-row gap-2 md:gap-3">
          <ThemeToggle />
          <Link to="/login">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm text-sm md:text-base">
              <User className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Entrar
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-white text-primary hover:bg-white/90 text-sm md:text-base">
              <Building2 className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Cadastrar
            </Button>
          </Link>
        </div>
      </GradientBackground>

      {/* Search Section */}
      <section className="py-8 md:py-12 -mt-6 md:-mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <SmartCombobox
              placeholder="Busque por tipo, bairro ou características..."
              options={propertyOptions}
              value={searchValue}
              onValueChange={(value) => setSearchValue(typeof value === 'string' ? value : null)}
              header={<span>Encontre seu imóvel ideal</span>}
              footer={<span>Digite para buscar por localização, tipo ou características</span>}
              emptyState={<span>Nenhum resultado encontrado. Tente outra busca.</span>}
            />
          </div>
          
          {/* Announce Button */}
          <div className="max-w-xs mx-auto mt-6 md:mt-8">
            <SlidingCTAButton />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-1" />
              Destaques
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Imóveis em Destaque</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto px-4">
              Descubra os melhores imóveis selecionados especialmente para você em Fortaleza
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="relative h-40 md:h-48 bg-muted">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 md:top-3 left-2 md:left-3 bg-primary/90 backdrop-blur-sm text-xs">
                    <Heart className="w-3 h-3 mr-1" />
                    Destaque
                  </Badge>
                </div>
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
                    <span className="text-xs md:text-sm text-muted-foreground">{property.location}</span>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors text-sm md:text-base">
                    {property.title}
                  </h3>
                  <div className="text-lg md:text-2xl font-bold text-primary mb-3 md:mb-4">{property.price}</div>
                  <div className="flex justify-between text-xs md:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Bed className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{property.beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{property.baths}</span>
                    </div>
                    <span>{property.area}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <InteractiveHoverButton 
              text="Ver Todos" 
              className="bg-background border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-4 md:py-6 w-auto min-w-[140px] md:min-w-[160px] text-sm md:text-base"
            />
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="w-4 h-4 mr-1" />
              Explorar no Mapa
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Visualize Imóveis em Fortaleza</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto px-4">
              Navegue pelo mapa interativo e encontre imóveis nos melhores bairros da cidade
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden border-0 bg-background/50 backdrop-blur-sm p-4 md:p-8">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-primary" />
                <p className="text-base md:text-lg">Mapa interativo em desenvolvimento</p>
                <p className="text-xs md:text-sm">Visualize imóveis em Fortaleza em breve!</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <TrendingUp className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 opacity-80" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Pronto para encontrar seu novo lar?</h2>
            <p className="text-base md:text-xl text-primary-foreground/80 mb-6 md:mb-8 px-4">
              Junte-se a milhares de pessoas que já encontraram o imóvel dos seus sonhos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <SlideButton className="bg-white text-primary hover:bg-white/90" />
              <Link to="/register">
                <InteractiveHoverButton 
                  text="Anunciar Grátis" 
                  className="border-white text-white hover:bg-white hover:text-primary px-4 md:px-6 py-3 w-auto min-w-[160px] md:min-w-[180px] text-sm md:text-base"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="col-span-1 sm:col-span-2 md:col-span-1 text-center sm:text-left">
              <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                <span className="font-bold text-base md:text-lg">IMO MAP</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Conectando pessoas aos seus imóveis ideais em Fortaleza.
              </p>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Plataforma</h4>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-primary">Buscar</Link></li>
                <li><Link to="#" className="hover:text-primary">Anunciar</Link></li>
                <li><Link to="#" className="hover:text-primary">Favoritos</Link></li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Suporte</h4>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-primary">Ajuda</Link></li>
                <li><Link to="#" className="hover:text-primary">Contato</Link></li>
                <li><Link to="#" className="hover:text-primary">FAQ</Link></li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Contato</h4>
              <div className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                  <span>(85) 99999-9999</span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                  <span>Fortaleza, CE</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
            <p>&copy; 2024 IMO MAP. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;