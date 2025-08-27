import { Bell, Home, HelpCircle, Settings, Shield, Mail, User, FileText, Lock } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

// Exemplo de uso conforme as instruções do usuário
function DefaultDemo() {
  const tabs = [
    { title: "Dashboard", icon: Home },
    { title: "Notifications", icon: Bell },
    { type: "separator" as const },
    { title: "Settings", icon: Settings },
    { title: "Support", icon: HelpCircle },
    { title: "Security", icon: Shield },
  ];

  return (
    <div className="flex flex-col gap-4">
      <ExpandableTabs tabs={tabs} />
    </div>
  );
}

// Exemplo adicional com mais ícones
function AdminDemo() {
  const adminTabs = [
    { title: "Dashboard", icon: Home },
    { title: "Users", icon: User },
    { title: "Messages", icon: Mail },
    { type: "separator" as const },
    { title: "Documents", icon: FileText },
    { title: "Security", icon: Lock },
    { title: "Settings", icon: Settings },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Admin Panel Navigation</h3>
      <ExpandableTabs tabs={adminTabs} />
    </div>
  );
}

export { DefaultDemo, AdminDemo };