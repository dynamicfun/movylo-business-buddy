import { useState } from "react";
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
  Building2,
  MoreHorizontal
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
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "My Customers", url: "/customers", icon: Users },
  { title: "Messages & offers", url: "/messages", icon: MessageSquare },
  { title: "My business", url: "/business", icon: Store },
];

// Secondary navigation - business tools (grouped, quieter)
const businessToolsItems = [
  { title: "Business details", url: "/business-details", icon: Building2 },
  { title: "Reports", url: "/reports", icon: BarChart3 },
];

// More section - advanced tools
const moreItems = [
  { title: "Products / Services", url: "/products", icon: Package },
  { title: "AI tools", url: "/ai-tools", icon: Sparkles },
  { title: "Mobile app", url: "/mobile-app", icon: Smartphone },
  { title: "Preferences", url: "/preferences", icon: Settings },
];

const bottomMenuItems = [
  { title: "My Account", url: "/account", icon: User },
  { title: "Language", url: "/language", icon: Globe },
];

export function AppSidebar() {
  const [businessToolsOpen, setBusinessToolsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <Sidebar className="border-r border-border">
      <SidebarContent className="pt-4">
        {/* Logo/Brand area */}
        <div className="px-4 mb-6">
          <h2 className="text-lg font-bold text-foreground">MyBusiness</h2>
        </div>

        {/* Primary navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {primaryItems.map((item) => (
                <SidebarMenuItem key={item.title}>
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
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="my-3" />

        {/* Business tools - collapsible, quieter */}
        <SidebarGroup>
          <Collapsible open={businessToolsOpen} onOpenChange={setBusinessToolsOpen}>
            <CollapsibleTrigger asChild>
              <SidebarGroupLabel className="cursor-pointer hover:bg-muted/30 rounded-md px-3 py-1.5 flex items-center justify-between text-xs font-medium text-muted-foreground uppercase tracking-wide">
                <span>Business tools</span>
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

        {/* More section - collapsible */}
        <SidebarGroup>
          <Collapsible open={moreOpen} onOpenChange={setMoreOpen}>
            <CollapsibleTrigger asChild>
              <SidebarGroupLabel className="cursor-pointer hover:bg-muted/30 rounded-md px-3 py-1.5 flex items-center justify-between text-xs font-medium text-muted-foreground uppercase tracking-wide">
                <div className="flex items-center gap-2">
                  <MoreHorizontal className="h-3 w-3" />
                  <span>More</span>
                </div>
                <ChevronDown className={`h-3 w-3 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
              </SidebarGroupLabel>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {moreItems.map((item) => (
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
