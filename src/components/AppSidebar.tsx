import { useState } from "react";
import { 
  Users, 
  Package, 
  Megaphone, 
  Sparkles, 
  BarChart3, 
  Settings, 
  Smartphone,
  User,
  Globe,
  ChevronDown,
  LayoutDashboard,
  FileText
} from "lucide-react";
import { NavLink } from "@/components/NavLink";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
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

const mainMenuItems = [
  { 
    title: "My Customers", 
    icon: Users,
    submenu: [
      { title: "CRM", url: "/crm" },
      { title: "Sign up page", url: "/signup-page" },
    ]
  },
  { title: "My Products/Services", url: "/products", icon: Package },
  { title: "Promote", url: "/promote", icon: Megaphone },
  { title: "AI Tools", url: "/ai-tools", icon: Sparkles },
  { title: "Reports", url: "/reports", icon: BarChart3 },
  { title: "Preferences", url: "/preferences", icon: Settings },
  { title: "Mobile App", url: "/mobile-app", icon: Smartphone },
];

const bottomMenuItems = [
  { title: "My Account", url: "/account", icon: User },
  { title: "Language", url: "/language", icon: Globe },
];

export function AppSidebar() {
  const [customersOpen, setCustomersOpen] = useState(false);

  return (
    <Sidebar className="border-r border-border">
      <SidebarContent className="pt-4">
        {/* Logo/Brand area */}
        <div className="px-4 mb-6">
          <h2 className="text-lg font-bold text-foreground">MyBusiness</h2>
        </div>

        {/* Dashboard link */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink 
                    to="/" 
                    end 
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted/50 transition-colors"
                    activeClassName="bg-muted text-primary font-medium"
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Dashboard</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="my-2" />

        {/* Main menu */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.submenu ? (
                    <Collapsible open={customersOpen} onOpenChange={setCustomersOpen}>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="w-full justify-between">
                          <div className="flex items-center gap-3">
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </div>
                          <ChevronDown className={`h-4 w-4 transition-transform ${customersOpen ? 'rotate-180' : ''}`} />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.submenu.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <NavLink 
                                  to={subItem.url} 
                                  className="hover:bg-muted/50"
                                  activeClassName="bg-muted text-primary font-medium"
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
                        to={item.url!} 
                        className="flex items-center gap-3 hover:bg-muted/50"
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
      </SidebarContent>

      {/* Bottom menu */}
      <SidebarFooter className="border-t border-border pt-2">
        <SidebarMenu>
          {bottomMenuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <NavLink 
                  to={item.url} 
                  className="flex items-center gap-3 hover:bg-muted/50"
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
