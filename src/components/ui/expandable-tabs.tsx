import * as React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface TabItem {
  title?: string;
  icon?: LucideIcon;
  type?: "separator";
  onClick?: () => void;
}

interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  orientation?: "vertical" | "horizontal";
}

export function ExpandableTabs({ 
  tabs, 
  className,
  orientation = "vertical" 
}: ExpandableTabsProps) {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const handleTabClick = (index: number, tab: TabItem) => {
    if (tab.type === "separator") return;
    
    setExpandedIndex(expandedIndex === index ? null : index);
    tab.onClick?.();
  };

  return (
    <div className={cn(
      "flex",
      orientation === "vertical" ? "flex-col" : "flex-row",
      className
    )}>
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return (
            <Separator 
              key={`separator-${index}`}
              className={cn(
                "my-2",
                orientation === "horizontal" && "mx-2 h-8 w-px"
              )}
              orientation={orientation === "horizontal" ? "vertical" : "horizontal"}
            />
          );
        }

        const IconComponent = tab.icon;
        const isExpanded = expandedIndex === index;

        return (
          <Button
            key={index}
            variant={isExpanded ? "secondary" : "ghost"}
            className={cn(
              "justify-start gap-3 px-4 py-3 h-auto",
              orientation === "horizontal" && "flex-col gap-1 px-2 py-2 min-w-[80px]"
            )}
            onClick={() => handleTabClick(index, tab)}
          >
            {IconComponent && (
              <IconComponent className={cn(
                "h-5 w-5 shrink-0",
                isExpanded && "text-primary"
              )} />
            )}
            {tab.title && (
              <span className={cn(
                "font-medium",
                orientation === "horizontal" && "text-xs",
                isExpanded && "text-primary"
              )}>
                {tab.title}
              </span>
            )}
          </Button>
        );
      })}
    </div>
  );
}