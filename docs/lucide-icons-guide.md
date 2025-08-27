# Guia de Integração dos Ícones Lucide-React

## Objetivo
Este documento padroniza o uso da biblioteca `lucide-react` para todos os ícones da interface do projeto IMO MAP.

## Instalação
A biblioteca `lucide-react` já está instalada no projeto. Para verificar ou reinstalar:

```bash
npm install lucide-react
```

## Padrão de Importação
**SEMPRE** use importação nomeada (named imports) no início dos arquivos:

```tsx
import { Bell, Home, HelpCircle, Settings, Shield, Mail, User, FileText, Lock } from "lucide-react";
```

### ❌ Não faça:
```tsx
// Evite importação default
import Lucide from "lucide-react";

// Evite importação de ícones individuais
import Bell from "lucide-react/dist/esm/icons/bell";
```

### ✅ Faça:
```tsx
// Importe diretamente os ícones necessários
import { Bell, Home, Settings } from "lucide-react";
```

## Uso nos Componentes

### Exemplo Básico
```tsx
import { Home, Settings } from "lucide-react";

function Navigation() {
  return (
    <div>
      <button>
        <Home className="w-4 h-4 mr-2" />
        Dashboard
      </button>
      <button>
        <Settings className="w-4 h-4 mr-2" />
        Configurações
      </button>
    </div>
  );
}
```

### Exemplo com ExpandableTabs
```tsx
import { Bell, Home, HelpCircle, Settings, Shield } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

function NavigationTabs() {
  const tabs = [
    { title: "Dashboard", icon: Home },
    { title: "Notifications", icon: Bell },
    { type: "separator" },
    { title: "Settings", icon: Settings },
    { title: "Support", icon: HelpCircle },
    { title: "Security", icon: Shield },
  ];

  return <ExpandableTabs tabs={tabs} />;
}
```

## Padrões de Tamanho
Use as seguintes classes do Tailwind para consistência:

- **Ícones pequenos**: `w-4 h-4` (16px)
- **Ícones médios**: `w-5 h-5` (20px)  
- **Ícones grandes**: `w-6 h-6` (24px)
- **Ícones de destaque**: `w-8 h-8` (32px)

## Cores Semânticas
Sempre use as cores do design system:

```tsx
// Cores do tema
<Home className="w-4 h-4 text-primary" />
<Settings className="w-4 h-4 text-muted-foreground" />
<AlertTriangle className="w-4 h-4 text-warning" />
<CheckCircle className="w-4 h-4 text-success" />
```

## Ícones Comuns no Projeto

### Navegação
- `Home` - Dashboard/Início
- `MapPin` - Localização/Mapa
- `Search` - Busca
- `Settings` - Configurações
- `User` - Perfil/Usuário
- `Bell` - Notificações

### Propriedades
- `Home` - Imóveis
- `Bed` - Quartos
- `Bath` - Banheiros
- `Car` - Vagas de garagem
- `Ruler` - Área/Medidas
- `Eye` - Visualizações

### Ações
- `Plus` - Adicionar
- `Edit` - Editar
- `Trash2` - Excluir
- `Star` - Destacar/Favoritar
- `Share2` - Compartilhar
- `Heart` - Favoritos

### Comunicação
- `Phone` - Telefone
- `MessageSquare` - WhatsApp/Chat
- `Mail` - E-mail

### Status e Feedback
- `CheckCircle` - Sucesso/Aprovado
- `XCircle` - Erro/Rejeitado
- `AlertTriangle` - Aviso
- `Shield` - Segurança/Admin

## TypeScript
Para componentes que recebem ícones como props, use o tipo `LucideIcon`:

```tsx
import { LucideIcon } from "lucide-react";

interface TabItem {
  title: string;
  icon: LucideIcon;
}

function TabComponent({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon className="w-4 h-4" />;
}
```

## Componentes Implementados
- ✅ `ExpandableTabs` - Navegação expansível com ícones
- ✅ Todos os componentes UI seguem o padrão
- ✅ AdminPanel com exemplo de uso
- ✅ Dashboard com ícones padronizados
- ✅ PropertyDetails com ícones semânticos