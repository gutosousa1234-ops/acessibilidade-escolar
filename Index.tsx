import { useState } from "react";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import { Header } from "@/components/accessibility/Header";
import { SchoolMap } from "@/components/accessibility/SchoolMap";
import { ResourcesList } from "@/components/accessibility/ResourcesList";
import { BarrierReportForm, Report } from "@/components/accessibility/BarrierReportForm";
import { Statistics } from "@/components/accessibility/Statistics";
import { AccessibilitySettings } from "@/components/accessibility/AccessibilitySettings";
import { EmergencyButton } from "@/components/accessibility/EmergencyButton";
import { Footer } from "@/components/accessibility/Footer";

const Index = () => {
  const [reports, setReports] = useState<Report[]>([]);

  const handleAddReport = (report: Report) => {
    setReports((prev) => [report, ...prev]);
  };

  return (
    <AccessibilityProvider>
      <div className="min-h-screen bg-background">
        {/* Skip Link for Keyboard Navigation */}
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>

        <Header />

        <main id="main-content" className="container py-8">
          <div className="mb-8 animate-fade-in">
            <h1 className="sr-only">Aplicativo de Acessibilidade Escolar</h1>
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 sm:p-8">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Bem-vindo ao Portal de Acessibilidade
              </h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Navegue pela escola com facilidade. Encontre rotas acessíveis, recursos adaptados e 
                contribua para melhorar a acessibilidade para todos.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <SchoolMap />
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <ResourcesList />
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <BarrierReportForm onSubmit={handleAddReport} reports={reports} />
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Statistics reports={reports} />
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <AccessibilitySettings />
            </div>
          </div>
        </main>

        <EmergencyButton />
        <Footer />
      </div>
    </AccessibilityProvider>
  );
};

export default Index;
