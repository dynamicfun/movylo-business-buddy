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
  LayoutDashboard,
  MessageSquare,
  Store,
  ShoppingBag
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

// Main navigation items
const mainItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { 
    title: "My Customers", 
    url: "/customers", 
    icon: Users,
    submenu: [
      { title: "CRM", url: "/customers/crm" },
      { title: "Sign up page", url: "/customers/signup" },
    ]
  },
  { title: "My Products/Services", url: "/products", icon: Package },
  { title: "Promote", url: "/promote", icon: MessageSquare },
  { title: "AI tools", url: "/ai-tools", icon: Sparkles },
  { title: "Reports", url: "/reports", icon: BarChart3 },
  { title: "Preferences", url: "/preferences", icon: Settings },
  { title: "Mobile App", url: "/mobile-app", icon: Smartphone },
];

const bottomMenuItems = [
  { title: "My Account", url: "/account", icon: User },
  { title: "Language", url: "/language", icon: Globe },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border">
      <SidebarContent className="pt-4">
        {/* Logo/Brand area */}
        <div className="px-4 mb-6">
          <h2 className="text-lg font-bold text-foreground">MyBusiness</h2>
        </div>

        {/* Main navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.submenu ? (
                    <Collapsible defaultOpen className="w-full">
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-3">
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </div>
                          <ChevronDown className="h-3 w-3" />
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
      </SidebarContent>

      {/* Bottom menu */}
      <SidebarFooter className="border-t border-border pt-2">
        <SidebarMenu>
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
