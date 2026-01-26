import { ReactNode } from "react";
import { ArrowLeft, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

interface InnerPageTemplateProps {
  title: string;
  subtitle: string;
  icon?: LucideIcon;
  backTo?: string;
  // Intro section props
  whyTitle?: string;
  whyDescription?: string;
  whatToExpectTitle?: string;
  whatToExpectItems?: string[];
  whatToDoTitle?: string;
  whatToDoDescription?: string;
  // Main content
  children: ReactNode;
}

export function InnerPageTemplate({
  title,
  subtitle,
  icon: Icon,
  backTo = "/",
  whyTitle = "Why this matters",
  whyDescription,
  whatToExpectTitle = "What to expect",
  whatToExpectItems,
  whatToDoTitle = "What to do",
  whatToDoDescription,
  children,
}: InnerPageTemplateProps) {
  const hasIntro = whyDescription || whatToExpectItems?.length || whatToDoDescription;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 overflow-x-hidden">
          <div className="max-w-[1200px] mx-auto px-3 sm:px-6 py-4 sm:py-6">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <Link to={backTo} className="text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div className="flex items-center gap-3">
                {Icon && (
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                )}
                <div>
                  <h1 className="text-xl font-bold text-foreground">{title}</h1>
                  <p className="text-sm text-muted-foreground">{subtitle}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Intro Section */}
              {hasIntro && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                    <CardContent className="p-6 space-y-4">
                      {/* Why this matters */}
                      {whyDescription && (
                        <div>
                          <h3 className="font-semibold text-sm text-primary mb-1">{whyTitle}</h3>
                          <p className="text-sm text-muted-foreground">{whyDescription}</p>
                        </div>
                      )}

                      {/* What to expect */}
                      {whatToExpectItems && whatToExpectItems.length > 0 && (
                        <div>
                          <h3 className="font-semibold text-sm text-primary mb-2">{whatToExpectTitle}</h3>
                          <ul className="space-y-1.5">
                            {whatToExpectItems.map((item, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-primary mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* What to do */}
                      {whatToDoDescription && (
                        <div>
                          <h3 className="font-semibold text-sm text-primary mb-1">{whatToDoTitle}</h3>
                          <p className="text-sm text-muted-foreground">{whatToDoDescription}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: hasIntro ? 0.1 : 0 }}
                className="space-y-6"
              >
                {children}
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
