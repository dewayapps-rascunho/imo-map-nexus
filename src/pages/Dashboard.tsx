import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Home, 
  MapPin, 
  Eye, 
  Edit, 
  Trash2, 
  Star,
  BarChart3,
  Settings,
  LogOut
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("properties");
  
  // Mock data for properties
  const properties = [
    {
      id: 1,
      title: "Apartamento 3 Quartos - Vila Madalena",
      price: "R$ 850.000",
      status: "active",
      views: 124,
      type: "Apartamento",
      bedrooms: 3,
      bathrooms: 2
    },
    {
      id: 2,
      title: "Casa 4 Quartos com Piscina - Morumbi",
      price: "R$ 1.200.000",
      status: "pending",
      views: 89,
      type: "Casa",
      bedrooms: 4,
      bathrooms: 3
    },
    {
      id: 3,
      title: "Studio Moderno - Pinheiros",
      price: "R$ 450.000",
      status: "active",
      views: 67,
      type: "Studio",
      bedrooms: 1,
      bathrooms: 1
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-property-available text-success-foreground';
      case 'pending':
        return 'bg-warning text-warning-foreground';
      case 'sold':
        return 'bg-property-sold text-destructive-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Ativo';
      case 'pending':
        return 'Pendente';
      case 'sold':
        return 'Vendido';
      default:
        return 'Inativo';
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold">IMO MAP</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Dashboard</h2>
          <p className="text-muted-foreground">
            Gerencie seus anúncios e acompanhe o desempenho
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Anúncios Ativos
                  </p>
                  <p className="text-2xl font-bold">2/3</p>
                </div>
                <Home className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total de Visualizações
                  </p>
                  <p className="text-2xl font-bold">280</p>
                </div>
                <Eye className="w-8 h-8 text-info" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Destacados
                  </p>
                  <p className="text-2xl font-bold">1</p>
                </div>
                <Star className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Plano Atual
                  </p>
                  <p className="text-lg font-bold">Grátis</p>
                </div>
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="properties">Meus Imóveis</TabsTrigger>
            <TabsTrigger value="add-property">Adicionar Imóvel</TabsTrigger>
            <TabsTrigger value="analytics">Estatísticas</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
          </TabsList>

          <TabsContent value="properties" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Meus Anúncios</h3>
              <Button 
                className=""
                variant="gradient"
                onClick={() => setActiveTab("add-property")}
              >
                <Plus className="w-4 h-4 mr-2" />
                Novo Anúncio
              </Button>
            </div>

            <div className="grid gap-6">
              {properties.map((property) => (
                <Card key={property.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-lg">{property.title}</h4>
                          <Badge className={getStatusColor(property.status)}>
                            {getStatusText(property.status)}
                          </Badge>
                        </div>
                        <p className="text-2xl font-bold text-primary mb-2">
                          {property.price}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{property.type}</span>
                          <span>{property.bedrooms} quartos</span>
                          <span>{property.bathrooms} banheiros</span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {property.views} visualizações
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          Ver
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4 mr-2" />
                          Editar
                        </Button>
                        <Button variant="outline" size="sm">
                          <Star className="w-4 h-4 mr-2" />
                          Destacar
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Excluir
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Free plan limit notice */}
            <Card className="border-accent/20 bg-accent/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">
                      Plano Gratuito - 2 de 3 anúncios utilizados
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Você ainda pode adicionar 1 anúncio gratuito. 
                      Para mais anúncios, considere nossos planos pagos.
                    </p>
                  </div>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Ver Planos
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="add-property">
            <Card>
              <CardHeader>
                <CardTitle>Adicionar Novo Imóvel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Formulário de cadastro de imóvel será implementado aqui.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Estatísticas dos Anúncios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gráficos e análises de performance serão implementados aqui.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Configurações da Conta</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Configurações do usuário serão implementadas aqui.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;