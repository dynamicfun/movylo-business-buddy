import { ReactNode } from "react";
import { ChevronLeft, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent } from "@/components/ui/card";

interface PreferencePageTemplateProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  helperText?: string;
  children: ReactNode;
}

export function PreferencePageTemplate({
  title,
  subtitle,
  icon: Icon,
  helperText,
  children,
}: PreferencePageTemplateProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 overflow-x-hidden">
          <div className="max-w-[1200px] mx-auto px-3 sm:px-6 py-4 sm:py-6">
            {/* Header */}
            <div className="mb-6">
              <Link
                to="/preferences"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-3"
              >
                <ChevronLeft className="w-4 h-4" />
                Preferences
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-foreground">{title}</h1>
                  <p className="text-sm text-muted-foreground">{subtitle}</p>
                  {helperText && (
                    <p className="text-xs text-muted-foreground/70 mt-1">{helperText}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {children}
            </motion.div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

interface PreferenceSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function PreferenceSection({ title, description, children }: PreferenceSectionProps) {
  return (
    <Card>
      <CardContent className="p-5 sm:p-6">
        <div className="mb-4">
          <h2 className="text-base font-semibold text-foreground">{title}</h2>
          {description && (
            <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
          )}
        </div>
        <div className="space-y-4">{children}</div>
      </CardContent>
    </Card>
  );
}
