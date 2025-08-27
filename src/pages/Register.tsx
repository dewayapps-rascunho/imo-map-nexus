import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GradientBackground } from "@/components/ui/gradient-background";
import { AssistedPasswordConfirmation } from "@/components/ui/assisted-password-confirmation";
import { MapPin, Building2, User } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    cnpj: "",
    companyName: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e: React.FormEvent, type: 'individual' | 'company') => {
    e.preventDefault();
    console.log("Register attempt:", { type, formData });
  };

  return (
    <GradientBackground>
      <div className="w-full max-w-md p-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-primary-foreground">IMO MAP</h1>
          </div>
          <p className="text-primary-foreground/80">Cadastre-se e anuncie seus imóveis</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <h2 className="text-2xl font-bold text-center">Criar Conta</h2>
            <p className="text-muted-foreground text-center">
              Escolha o tipo de cadastro
            </p>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="individual" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="individual" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Pessoa Física
                </TabsTrigger>
                <TabsTrigger value="company" className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Imobiliária
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="individual">
                <form onSubmit={(e) => handleRegister(e, 'individual')} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Mínimo 8 caracteres"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <AssistedPasswordConfirmation
                    password={formData.password}
                    value={formData.confirmPassword}
                    onChange={(value) => setFormData({ ...formData, confirmPassword: value })}
                    name="confirmPassword"
                    id="confirmPassword"
                    required
                  />
                  <Button type="submit" className="w-full" variant="gradient">
                    Criar Conta
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="company">
                <form onSubmit={(e) => handleRegister(e, 'company')} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Nome da Imobiliária</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      type="text"
                      placeholder="Nome da empresa"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cnpj">CNPJ</Label>
                    <Input
                      id="cnpj"
                      name="cnpj"
                      type="text"
                      placeholder="00.000.000/0000-00"
                      value={formData.cnpj}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-email">E-mail</Label>
                    <Input
                      id="company-email"
                      name="email"
                      type="email"
                      placeholder="contato@imobiliaria.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-phone">Telefone</Label>
                    <Input
                      id="company-phone"
                      name="phone"
                      type="tel"
                      placeholder="(11) 3333-3333"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-password">Senha</Label>
                    <Input
                      id="company-password"
                      name="password"
                      type="password"
                      placeholder="Mínimo 8 caracteres"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <AssistedPasswordConfirmation
                    password={formData.password}
                    value={formData.confirmPassword}
                    onChange={(value) => setFormData({ ...formData, confirmPassword: value })}
                    name="confirmPassword"
                    id="company-confirmPassword"
                    required
                  />
                  <Button type="submit" className="w-full" variant="gradient">
                    Criar Conta da Imobiliária
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <p className="text-sm text-muted-foreground">
              Já tem uma conta?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Fazer login
              </Link>
            </p>
            <Link 
              to="/" 
              className="text-sm text-primary hover:underline"
            >
              Voltar ao mapa
            </Link>
          </CardFooter>
        </Card>
      </div>
    </GradientBackground>
  );
};

export default Register;