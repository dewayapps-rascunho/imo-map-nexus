import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GradientBackground } from "@/components/ui/gradient-background";
import { MapPin, Building2, User } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for login will be implemented with backend integration
    console.log("Login attempt:", { email, password });
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
          <p className="text-primary-foreground/80">Encontre seu imóvel ideal</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <h2 className="text-2xl font-bold text-center">Fazer Login</h2>
            <p className="text-muted-foreground text-center">
              Entre na sua conta para continuar
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
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" variant="gradient">
                    Entrar
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="company">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-email">E-mail da Imobiliária</Label>
                    <Input
                      id="company-email"
                      type="email"
                      placeholder="contato@imobiliaria.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-password">Senha</Label>
                    <Input
                      id="company-password"
                      type="password"
                      placeholder="Senha da empresa"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" variant="gradient">
                    Entrar como Imobiliária
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <p className="text-sm text-muted-foreground">
              Não tem uma conta?{" "}
              <Link to="/register" className="text-primary hover:underline">
                Cadastre-se
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

export default Login;