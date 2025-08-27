import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Users, 
  Home, 
  AlertTriangle, 
  CreditCard,
  Search,
  Eye,
  Trash2,
  Ban,
  CheckCircle,
  XCircle,
  Shield,
  Settings,
  FileText,
  Bell
} from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

const AdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock data for admin
  const stats = {
    totalProperties: 1250,
    totalUsers: 890,
    pendingReports: 23,
    monthlyRevenue: 45000
  };

  const properties = [
    {
      id: 1,
      title: "Apartamento 3 Quartos - Vila Madalena",
      price: "R$ 850.000",
      owner: "João Silva",
      ownerEmail: "joao@email.com",
      status: "active",
      reports: 0,
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      title: "Casa 4 Quartos - Morumbi",
      price: "R$ 1.200.000",
      owner: "Maria Santos",
      ownerEmail: "maria@email.com", 
      status: "pending",
      reports: 2,
      createdAt: "2024-01-20"
    }
  ];

  const users = [
    {
      id: 1,
      name: "João Silva",
      email: "joao@email.com",
      type: "Pessoa Física",
      status: "active",
      propertiesCount: 2,
      isPaid: false,
      joinDate: "2024-01-10"
    },
    {
      id: 2,
      name: "Imobiliária Premium",
      email: "contato@premium.com",
      type: "Imobiliária", 
      status: "active",
      propertiesCount: 15,
      isPaid: true,
      joinDate: "2023-12-05"
    }
  ];

  const reports = [
    {
      id: 1,
      propertyTitle: "Apartamento 3 Quartos - Vila Madalena",
      reporterEmail: "usuario@email.com",
      reason: "Informações falsas",
      description: "O imóvel não corresponde às fotos anunciadas",
      status: "pending",
      createdAt: "2024-01-22"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold">IMO MAP - Admin</h1>
            </div>
            <Button variant="outline" size="sm">
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Painel Administrativo</h2>
          <p className="text-muted-foreground">
            Gerencie usuários, propriedades e moderação da plataforma
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total de Imóveis
                  </p>
                  <p className="text-2xl font-bold">{stats.totalProperties}</p>
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
                    Usuários Cadastrados
                  </p>
                  <p className="text-2xl font-bold">{stats.totalUsers}</p>
                </div>
                <Users className="w-8 h-8 text-info" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Denúncias Pendentes
                  </p>
                  <p className="text-2xl font-bold">{stats.pendingReports}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Receita Mensal
                  </p>
                  <p className="text-2xl font-bold">R$ {stats.monthlyRevenue.toLocaleString()}</p>
                </div>
                <CreditCard className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Exemplo do ExpandableTabs conforme instruções */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Navegação Rápida</h3>
          <ExpandableTabs 
            tabs={[
              { title: "Dashboard", icon: Home },
              { title: "Notificações", icon: Bell },
              { type: "separator" },
              { title: "Configurações", icon: Settings },
              { title: "Relatórios", icon: FileText },
              { title: "Segurança", icon: Shield },
            ]}
          />
        </div>

        <Tabs defaultValue="properties" className="space-y-6">
          <TabsList>
            <TabsTrigger value="properties">Propriedades</TabsTrigger>
            <TabsTrigger value="users">Usuários</TabsTrigger>
            <TabsTrigger value="reports">Denúncias</TabsTrigger>
            <TabsTrigger value="payments">Pagamentos</TabsTrigger>
          </TabsList>

          <TabsContent value="properties" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Gerenciar Propriedades</h3>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                  <Input
                    placeholder="Buscar propriedades..."
                    className="pl-10 w-72"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {properties.map((property) => (
                <Card key={property.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">{property.title}</h4>
                          <Badge variant={property.status === 'active' ? 'default' : 'secondary'}>
                            {property.status === 'active' ? 'Ativo' : 'Pendente'}
                          </Badge>
                          {property.reports > 0 && (
                            <Badge variant="destructive">
                              {property.reports} denúncia{property.reports > 1 ? 's' : ''}
                            </Badge>
                          )}
                        </div>
                        <p className="text-lg font-bold text-primary mb-2">{property.price}</p>
                        <div className="text-sm text-muted-foreground">
                          <p>Proprietário: {property.owner} ({property.ownerEmail})</p>
                          <p>Criado em: {property.createdAt}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          Ver
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Excluir
                        </Button>
                        <Button variant="destructive" size="sm">
                          <Ban className="w-4 h-4 mr-2" />
                          Banir Usuário
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Gerenciar Usuários</h3>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                <Input
                  placeholder="Buscar usuários..."
                  className="pl-10 w-72"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              {users.map((user) => (
                <Card key={user.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">{user.name}</h4>
                          <Badge variant="outline">{user.type}</Badge>
                          {user.isPaid && (
                            <Badge className="bg-success text-success-foreground">
                              Plano Pago
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <p>E-mail: {user.email}</p>
                          <p>Propriedades ativas: {user.propertiesCount}</p>
                          <p>Membro desde: {user.joinDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          Ver Perfil
                        </Button>
                        {user.status === 'active' ? (
                          <Button variant="destructive" size="sm">
                            <Ban className="w-4 h-4 mr-2" />
                            Banir
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Ativar
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <h3 className="text-xl font-semibold">Gerenciar Denúncias</h3>

            <div className="grid gap-4">
              {reports.map((report) => (
                <Card key={report.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">Denúncia #{report.id}</h4>
                          <Badge variant="secondary">Pendente</Badge>
                        </div>
                        <p className="font-medium mb-2">Propriedade: {report.propertyTitle}</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Denunciante: {report.reporterEmail}
                        </p>
                        <p className="text-sm mb-2">
                          <span className="font-medium">Motivo:</span> {report.reason}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {report.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Criado em: {report.createdAt}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Aprovar
                        </Button>
                        <Button variant="destructive" size="sm">
                          <XCircle className="w-4 h-4 mr-2" />
                          Rejeitar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gestão de Pagamentos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sistema de faturamento e controle de pagamentos será implementado aqui.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;