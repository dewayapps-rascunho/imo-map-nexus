import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  ArrowLeft, 
  Bed, 
  Bath, 
  Car,
  Ruler,
  Phone,
  MessageSquare,
  Navigation,
  Heart,
  Share2,
  Camera
} from "lucide-react";

const PropertyDetails = () => {
  const { id } = useParams();
  
  // Mock property data - In real app this would come from API
  const property = {
    id: id,
    title: "Apartamento 3 Quartos - Vila Madalena",
    price: "R$ 850.000",
    address: "Rua Harmonia, 123 - Vila Madalena, São Paulo - SP",
    type: "Apartamento",
    purpose: "Venda",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: 120,
    description: `Apartamento moderno e bem localizado na Vila Madalena. 
    Com 3 quartos sendo 1 suíte, sala ampla com sacada, cozinha planejada e 2 vagas de garagem.
    
    Características:
    - Prédio com portaria 24h
    - Salão de festas
    - Academia
    - Piscina
    - Churrasqueira
    
    Localização privilegiada próximo ao metrô, comércio e restaurantes.`,
    images: [
      "/lovable-uploads/property-1.jpg",
      "/lovable-uploads/property-2.jpg",
      "/lovable-uploads/property-3.jpg"
    ],
    owner: {
      name: "João Silva",
      phone: "(11) 99999-9999",
      whatsapp: "5511999999999",
      isRealEstate: false
    },
    coordinates: {
      lat: -23.5505,
      lng: -46.6333
    },
    createdAt: "2024-01-15",
    views: 124
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no imóvel: ${property.title} - ${property.price}`
    );
    window.open(`https://wa.me/${property.owner.whatsapp}?text=${message}`, '_blank');
  };

  const handlePhoneContact = () => {
    window.open(`tel:${property.owner.phone}`, '_self');
  };

  const handleDirections = () => {
    const query = encodeURIComponent(property.address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${query}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar ao mapa
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-semibold">IMO MAP</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Favoritar
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/9e5ac0b0-8ad7-4e6f-bfbe-7b405bac39ae.png" 
                    alt="Foto principal do imóvel"
                    className="w-full h-96 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-background/90 text-foreground">
                      <Camera className="w-4 h-4 mr-2" />
                      1 de 3 fotos
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Info */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline">{property.type}</Badge>
                      <Badge variant="outline">{property.purpose}</Badge>
                    </div>
                    <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                    <p className="text-4xl font-bold text-primary mb-4">{property.price}</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{property.address}</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Features */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Bed className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{property.bedrooms}</p>
                        <p className="text-sm text-muted-foreground">Quartos</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Bath className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{property.bathrooms}</p>
                        <p className="text-sm text-muted-foreground">Banheiros</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Car className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{property.parking}</p>
                        <p className="text-sm text-muted-foreground">Vagas</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Ruler className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{property.area}m²</p>
                        <p className="text-sm text-muted-foreground">Área</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Descrição</h3>
                    <div className="text-muted-foreground whitespace-pre-line">
                      {property.description}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Map */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Localização</h3>
                <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Mapa interativo será implementado aqui
                  </p>
                </div>
                <div className="mt-4">
                  <Button onClick={handleDirections} className="w-full" variant="gradient">
                    <Navigation className="w-4 h-4 mr-2" />
                    Como Chegar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Entre em Contato</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground font-semibold">
                            {property.owner.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <p className="font-semibold">{property.owner.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {property.owner.isRealEstate ? 'Imobiliária' : 'Proprietário'}
                      </p>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                  <Button 
                    onClick={handleWhatsAppContact}
                    variant="success"
                    className="w-full"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                      <Button 
                        onClick={handlePhoneContact}
                        variant="outline"
                        className="w-full"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Ligar: {property.owner.phone}
                      </Button>
                    </div>

                    <div className="text-center pt-4">
                      <p className="text-xs text-muted-foreground">
                        Anunciado em {property.createdAt} • {property.views} visualizações
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Informações Rápidas</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Código:</span>
                      <span>#{property.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tipo:</span>
                      <span>{property.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Finalidade:</span>
                      <span>{property.purpose}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Área:</span>
                      <span>{property.area}m²</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;