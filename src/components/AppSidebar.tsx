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
  CreditCard,
  Check
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLanguage } from "@/contexts/LanguageContext";

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
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function AppSidebar() {
  const [businessToolsOpen, setBusinessToolsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const location = useLocation();
  const { currentLanguage, setLanguage, t, languages } = useLanguage();

  // Build navigation items using translations
  const primaryItems = [
    { id: "home", title: t.home, url: "/", icon: Home },
    { id: "profile", title: t.myProfile, url: "/business-info/profile", icon: Building2 },
    { 
      id: "customers",
      title: t.myCustomers, 
      url: "/customers", 
      icon: Users,
      submenu: [
        { title: t.customerList, url: "/customers/list" },
        { title: t.signUpPage, url: "/customers/signup" },
        { title: t.loyaltyProgram, url: "/customers/loyalty" },
      ]
    },
    { 
      id: "messages",
      title: t.activity, 
      url: "/messages", 
      icon: MessageSquare,
      submenu: [
        { title: t.autopilot, url: "/autopilot" },
        { title: t.createPromo, url: "/messages/create-promo" },
        { title: t.createNewsletter, url: "/messages/newsletter" },
        { title: t.createSocialPost, url: "/messages/social" },
        { title: t.scheduleCampaigns, url: "/messages/scheduler" },
      ]
    },
    { 
      id: "sales",
      title: t.mySales, 
      url: "/sales", 
      icon: Store,
      submenu: [
        { title: t.productsServices, url: "/products" },
        { title: "Digital Menu", url: "/sales/menu" },
        { title: t.reservations, url: "/sales/reservations" },
        { title: "Sell Online / Payments", url: "/sales/sell-online" },
      ]
    },
    { id: "reports", title: t.reports, url: "/reports", icon: BarChart3 },
  ];


  const businessToolsItems = [
    { title: t.aiAssistant, url: "/ai-assistant", icon: Sparkles },
    { title: t.mobileApp, url: "/mobile-app", icon: Smartphone },
    { title: t.preferences, url: "/preferences", icon: Settings },
  ];

  const accountActions = [
    { title: t.upgradePlan, url: "/upgrade", icon: ArrowUpCircle, highlight: true },
    { title: t.topUpSms, url: "/topup", icon: CreditCard, highlight: true },
  ];

  const bottomMenuItems = [
    { title: t.myAccount, url: "/account", icon: User },
  ];
  
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

  const handleLanguageChange = (langCode: typeof currentLanguage) => {
    setLanguage(langCode);
    setLanguageOpen(false);
  };

  const selectedLanguage = languages.find(l => l.code === currentLanguage);

  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarContent className="pt-2">
        {/* Logo + Sidebar Toggle */}
        <div className="px-3 mb-2 flex items-center justify-between overflow-hidden">
          <img 
            src={movyloLogo} 
            alt="Movylo" 
            className={isCollapsed ? "h-8 w-8 object-contain object-left" : "h-12 w-auto"}
          />
          <SidebarTrigger className="text-muted-foreground hover:text-foreground h-7 w-7" />
        </div>

        {/* Primary navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {primaryItems.map((item) => (
                <SidebarMenuItem key={item.id || item.title}>
                  {item.submenu ? (
                    isCollapsed ? (
                      <SidebarMenuButton asChild tooltip={item.title}>
                        <NavLink 
                          to={item.submenu[0].url}
                          className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted/50 transition-colors"
                          activeClassName="bg-muted text-primary font-medium"
                        >
                          <item.icon className="h-4 w-4" />
                        </NavLink>
                      </SidebarMenuButton>
                    ) : (
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
                    )
                  ) : (
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <NavLink 
                        to={item.url}
                        end={item.url === "/"}
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted/50 transition-colors"
                        activeClassName="bg-muted text-primary font-medium"
                      >
                        <item.icon className="h-4 w-4" />
                        {!isCollapsed && <span>{item.title}</span>}
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
          {isCollapsed ? (
            <SidebarGroupContent>
              <SidebarMenu>
                {businessToolsItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <NavLink 
                        to={item.url}
                        className="flex items-center gap-3 px-3 py-1.5 rounded-md hover:bg-muted/50 transition-colors text-sm text-muted-foreground"
                        activeClassName="bg-muted text-primary font-medium"
                      >
                        <item.icon className="h-4 w-4" />
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          ) : (
            <Collapsible open={businessToolsOpen} onOpenChange={setBusinessToolsOpen}>
              <CollapsibleTrigger asChild>
                <SidebarGroupLabel className="cursor-pointer hover:bg-muted/30 rounded-md px-3 py-1.5 flex items-center justify-between text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  <span>{t.businessTools}</span>
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
          )}
        </SidebarGroup>

      </SidebarContent>

      {/* Bottom menu */}
      <SidebarFooter className="border-t border-border pt-2">
        <SidebarMenu>
          {/* Upgrade and Top Up actions */}
          {accountActions.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <NavLink 
                  to={item.url}
                  className="flex items-center gap-3 px-3 py-1.5 hover:bg-primary/10 text-sm text-primary font-medium"
                  activeClassName="bg-primary/20 text-primary font-medium"
                >
                  <item.icon className="h-4 w-4" />
                  {!isCollapsed && <span>{item.title}</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          
          <SidebarSeparator className="my-1" />
          
          {bottomMenuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <NavLink 
                  to={item.url}
                  className="flex items-center gap-3 px-3 py-1.5 hover:bg-muted/50 text-sm text-muted-foreground"
                  activeClassName="bg-muted text-primary font-medium"
                >
                  <item.icon className="h-4 w-4" />
                  {!isCollapsed && <span>{item.title}</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          
          {/* Language Selector */}
          <SidebarMenuItem>
            <Popover open={languageOpen} onOpenChange={setLanguageOpen}>
              <PopoverTrigger asChild>
                <SidebarMenuButton className="flex items-center justify-between w-full px-3 py-1.5 hover:bg-muted/50 text-sm text-muted-foreground cursor-pointer" tooltip={t.language}>
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4" />
                    {!isCollapsed && <span>{t.language}</span>}
                  </div>
                  {!isCollapsed && <span className="text-xs">{selectedLanguage?.flag} {selectedLanguage?.code.toUpperCase()}</span>}
                </SidebarMenuButton>
              </PopoverTrigger>
              <PopoverContent 
                side="right" 
                align="end" 
                className="w-48 p-1 bg-popover border border-border shadow-lg z-50"
              >
                <div className="flex flex-col">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="flex items-center justify-between px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors text-left"
                    >
                      <div className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </div>
                      {currentLanguage === lang.code && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
