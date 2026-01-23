import { useState } from "react";
import movyloLogo from "@/assets/movylo-logo.png";
import { useLocation } from "react-router-dom";
import { 
  Users, 
  Package, 
  Sparkles, 
  BarChart3, 
  Settings, 
  Smartphone,
  User,
  Globe,
  ChevronDown,
  Home,
  MessageSquare,
  Store,
  Building2,
  ArrowUpCircle,
  CreditCard
} from "lucide-react";
import { NavLink } from "@/components/NavLink";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Primary navigation - mirrors dashboard story
const primaryItems = [
  { id: "home", title: "Home", url: "/", icon: Home },
  { 
    id: "business-info",
    title: "La Mia Attività", 
    url: "/business-info", 
    icon: Building2,
    submenu: [
      { title: "Il Mio Profilo", url: "/business-info/profile" },
    ]
  },
  { 
    id: "customers",
    title: "I Miei Clienti", 
    url: "/customers", 
    icon: Users,
    submenu: [
      { title: "Lista Clienti", url: "/customers/list" },
      { title: "Pagina di Iscrizione", url: "/customers/signup" },
      { title: "Programma Fedeltà", url: "/customers/loyalty" },
      { title: "Trova Nuovi Clienti", url: "/customers/find" },
    ]
  },
  { 
    id: "messages",
    title: "Messaggi e Offerte", 
    url: "/messages", 
    icon: MessageSquare,
    submenu: [
      { title: "Crea una Promo", url: "/messages/promo" },
      { title: "Crea una Newsletter", url: "/messages/newsletter" },
      { title: "Crea un post social", url: "/messages/social" },
      { title: "Pianifica Campagne", url: "/messages/scheduler" },
    ]
  },
  { 
    id: "sales",
    title: "Le Mie Vendite", 
    url: "/sales", 
    icon: Store,
    submenu: [
      { title: "I Miei Risultati", url: "/sales/results" },
      { title: "Vendite in Negozio", url: "/sales/in-store" },
      { title: "Vendite Online", url: "/sales/online" },
      { title: "Prenotazioni", url: "/sales/reservations" },
    ]
  },
];

// Secondary navigation - business tools (grouped, quieter)
const businessToolsItems = [
  { title: "Report", url: "/reports", icon: BarChart3 },
  { title: "Prodotti / Servizi", url: "/products", icon: Package },
  { title: "Strumenti AI", url: "/ai-tools", icon: Sparkles },
  { title: "App Mobile", url: "/mobile-app", icon: Smartphone },
  { title: "Preferenze", url: "/preferences", icon: Settings },
];

// Account actions
const accountActions = [
  { title: "Upgrade Piano", url: "/upgrade", icon: ArrowUpCircle, highlight: true },
  { title: "Ricarica SMS", url: "/topup", icon: CreditCard, highlight: true },
];

const bottomMenuItems = [
  { title: "Il Mio Account", url: "/account", icon: User },
  { title: "Lingua", url: "/language", icon: Globe },
];

export function AppSidebar() {
  const [businessToolsOpen, setBusinessToolsOpen] = useState(false);
  const location = useLocation();
  
  // Determine which group should be open based on current path
  const getInitialOpenGroup = () => {
    for (const item of primaryItems) {
      if (item.submenu) {
        if (item.submenu.some(sub => location.pathname.startsWith(sub.url))) {
          return item.id;
        }
      }
    }
    return null;
  };
  
  const [openGroupId, setOpenGroupId] = useState<string | null>(getInitialOpenGroup);

  const handleGroupToggle = (groupId: string, isOpen: boolean) => {
    // Accordion behavior: only one group open at a time
    setOpenGroupId(isOpen ? groupId : null);
  };

  return (
    <Sidebar className="border-r border-border">
      <SidebarContent className="pt-2">
        {/* Logo/Brand area */}
        <div className="px-4 mb-2">
          <img 
            src={movyloLogo} 
            alt="Movylo" 
            className="h-12 w-auto"
          />
        </div>

        {/* Primary navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {primaryItems.map((item) => (
                <SidebarMenuItem key={item.id || item.title}>
                  {item.submenu ? (
                    <Collapsible 
                      open={openGroupId === item.id} 
                      onOpenChange={(isOpen) => handleGroupToggle(item.id!, isOpen)}
                      className="w-full"
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-3">
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </div>
                          <ChevronDown className={`h-3 w-3 transition-transform ${openGroupId === item.id ? 'rotate-180' : ''}`} />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.submenu.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <NavLink 
                                  to={subItem.url}
                                  className="text-sm text-muted-foreground hover:text-foreground"
                                  activeClassName="text-primary font-medium"
                                >
                                  {subItem.title}
                                </NavLink>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url}
                        end={item.url === "/"}
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted/50 transition-colors"
                        activeClassName="bg-muted text-primary font-medium"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="my-1" />

        {/* Business tools - collapsible, quieter */}
        <SidebarGroup>
          <Collapsible open={businessToolsOpen} onOpenChange={setBusinessToolsOpen}>
            <CollapsibleTrigger asChild>
              <SidebarGroupLabel className="cursor-pointer hover:bg-muted/30 rounded-md px-3 py-1.5 flex items-center justify-between text-xs font-medium text-muted-foreground uppercase tracking-wide">
                <span>Strumenti Business</span>
                <ChevronDown className={`h-3 w-3 transition-transform ${businessToolsOpen ? 'rotate-180' : ''}`} />
              </SidebarGroupLabel>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {businessToolsItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <NavLink 
                          to={item.url}
                          className="flex items-center gap-3 px-3 py-1.5 rounded-md hover:bg-muted/50 transition-colors text-sm text-muted-foreground"
                          activeClassName="bg-muted text-primary font-medium"
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>

      </SidebarContent>

      {/* Bottom menu */}
      <SidebarFooter className="border-t border-border pt-2">
        <SidebarMenu>
          {/* Upgrade and Top Up actions */}
          {accountActions.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <NavLink 
                  to={item.url}
                  className="flex items-center gap-3 px-3 py-1.5 hover:bg-primary/10 text-sm text-primary font-medium"
                  activeClassName="bg-primary/20 text-primary font-medium"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          
          <SidebarSeparator className="my-1" />
          
          {bottomMenuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <NavLink 
                  to={item.url}
                  className="flex items-center gap-3 px-3 py-1.5 hover:bg-muted/50 text-sm text-muted-foreground"
                  activeClassName="bg-muted text-primary font-medium"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
