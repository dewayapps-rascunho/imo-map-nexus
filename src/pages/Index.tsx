import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Search, 
  Filter,
  User,
  Menu,
  Bed,
  Bath,
  Car,
  Heart,
  Phone,
  MessageSquare,
  X,
  Home,
  Building2
} from "lucide-react";

const Index = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    neighborhood: "",
    type: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: ""
  });
  const [showFilters, setShowFilters] = useState(false);

  // Mock property data
  const properties = [
    {
      id: 1,
      title: "Apartamento 3 Quartos - Vila Madalena",
      price: "R$ 850.000",
      type: "Apartamento",
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
      area: 120,
      neighborhood: "Vila Madalena",
      image: "/lovable-uploads/9e5ac0b0-8ad7-4e6f-bfbe-7b405bac39ae.png",
      coordinates: { lat: -23.5505, lng: -46.6333 },
      owner: {
        name: "João Silva",
        phone: "(11) 99999-9999"
      }
    },
    {
      id: 2,
      title: "Casa 4 Quartos com Piscina - Morumbi",
      price: "R$ 1.200.000",
      type: "Casa",
      bedrooms: 4,
      bathrooms: 3,
      parking: 3,
      area: 250,
      neighborhood: "Morumbi",
      image: "/lovable-uploads/9e5ac0b0-8ad7-4e6f-bfbe-7b405bac39ae.png",
      coordinates: { lat: -23.5629, lng: -46.7208 },
      owner: {
        name: "Maria Santos",
        phone: "(11) 88888-8888"
      }
    },
    {
      id: 3,
      title: "Studio Moderno - Pinheiros",
      price: "R$ 450.000",
      type: "Studio",
      bedrooms: 1,
      bathrooms: 1,
      parking: 1,
      area: 45,
      neighborhood: "Pinheiros",
      image: "/lovable-uploads/9e5ac0b0-8ad7-4e6f-bfbe-7b405bac39ae.png",
      coordinates: { lat: -23.5629, lng: -46.7011 },
      owner: {
        name: "Carlos Lima",
        phone: "(11) 77777-7777"
      }
    }
  ];

  const handlePropertySelect = (property: any) => {
    setSelectedProperty(property);
  };

  const handleWhatsAppContact = (property: any) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no imóvel: ${property.title} - ${property.price}`
    );
    const phone = property.owner.phone.replace(/\D/g, '');
    window.open(`https://wa.me/55${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-background border-b shadow-sm z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-primary">IMO MAP</h1>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost">
                  <User className="w-4 h-4 mr-2" />
                  Entrar
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="gradient">
                  Anunciar Imóvel
                </Button>
              </Link>
            </div>

            <Button variant="ghost" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex relative">
        {/* Search and Filters Sidebar */}
        <div className="w-80 bg-background border-r shadow-sm overflow-y-auto">
          <div className="p-4 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
              <Input
                placeholder="Buscar por bairro, endereço..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4 mr-2" />
              Filtros Avançados
            </Button>

            {/* Advanced Filters */}
            {showFilters && (
              <Card>
                <CardContent className="p-4 space-y-4">
                  <Select value={filters.type} onValueChange={(value) => setFilters({ ...filters, type: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo de Imóvel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartamento">Apartamento</SelectItem>
                      <SelectItem value="casa">Casa</SelectItem>
                      <SelectItem value="studio">Studio</SelectItem>
                      <SelectItem value="terreno">Terreno</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={filters.bedrooms} onValueChange={(value) => setFilters({ ...filters, bedrooms: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Quartos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Quarto</SelectItem>
                      <SelectItem value="2">2 Quartos</SelectItem>
                      <SelectItem value="3">3 Quartos</SelectItem>
                      <SelectItem value="4">4+ Quartos</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      placeholder="Preço mín."
                      value={filters.minPrice}
                      onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                    />
                    <Input
                      placeholder="Preço máx."
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            <Separator />

            {/* Property List */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">
                Imóveis Encontrados ({properties.length})
              </h3>
              
              {properties.map((property) => (
                <Card 
                  key={property.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedProperty?.id === property.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => handlePropertySelect(property)}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <img 
                        src={property.image}
                        alt={property.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm line-clamp-2 mb-1">
                          {property.title}
                        </h4>
                        <p className="text-primary font-bold mb-2">
                          {property.price}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Bed className="w-3 h-3" />
                            {property.bedrooms}
                          </span>
                          <span className="flex items-center gap-1">
                            <Bath className="w-3 h-3" />
                            {property.bathrooms}
                          </span>
                          <span className="flex items-center gap-1">
                            <Car className="w-3 h-3" />
                            {property.parking}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 relative">
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Mapa Interativo</h2>
              <p className="text-muted-foreground mb-4">
                Integração com Google Maps será implementada aqui
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
                {properties.map((property) => (
                  <div key={property.id} className="relative">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all ${
                        selectedProperty?.id === property.id 
                          ? 'bg-accent text-accent-foreground transform scale-110' 
                          : 'bg-primary text-primary-foreground hover:bg-primary-dark'
                      }`}
                      onClick={() => handlePropertySelect(property)}
                    >
                      <Home className="w-4 h-4" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs">
                      {property.neighborhood}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Property Details Modal */}
          {selectedProperty && (
            <div className="absolute bottom-4 left-4 right-4 md:left-auto md:w-96">
              <Card className="shadow-lg">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={selectedProperty.image}
                      alt={selectedProperty.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2 w-8 h-8 p-0 bg-background/90"
                      onClick={() => setSelectedProperty(null)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 left-2 w-8 h-8 p-0 bg-background/90"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{selectedProperty.type}</Badge>
                    </div>
                    <h3 className="font-bold text-lg mb-1 line-clamp-2">
                      {selectedProperty.title}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-3">
                      {selectedProperty.price}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        {selectedProperty.bedrooms} quartos
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        {selectedProperty.bathrooms} banheiros
                      </span>
                      <span className="flex items-center gap-1">
                        <Car className="w-4 h-4" />
                        {selectedProperty.parking} vagas
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        onClick={() => handleWhatsAppContact(selectedProperty)}
                        variant="success"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                      <Link to={`/property/${selectedProperty.id}`}>
                        <Button variant="outline" className="w-full">
                          Ver Detalhes
                        </Button>
                      </Link>
                    </div>

                    <p className="text-xs text-muted-foreground text-center mt-3">
                      Anunciado por {selectedProperty.owner.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;