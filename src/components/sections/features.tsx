import {
  Brain,
  FileText,
  AlertTriangle,
  Calculator,
  Scale,
  History,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "Clasificación Automática",
    description:
      "IA entrenada en nomenclatura arancelaria que clasifica productos al instante desde la factura del proveedor.",
  },
  {
    icon: FileText,
    title: "Monitoreo Gaceta Oficial",
    description:
      "Detección en tiempo real de cambios normativos, nuevos decretos de exoneración y modificaciones legales.",
  },
  {
    icon: AlertTriangle,
    title: "Alertas de Riesgo",
    description:
      "Memory Puerto te advierte sobre criterios disidentes de funcionarios y riesgos de revalorización antes de declarar.",
  },
  {
    icon: Calculator,
    title: "Cálculo Landed Cost",
    description:
      "Costo real de importación con todos los componentes: aranceles, tasas, fletes, seguros e impuestos.",
  },
  {
    icon: Scale,
    title: "Justificación Jurídica",
    description:
      "Cada clasificación incluye trazabilidad legal completa con referencia a la Gaceta Oficial correspondiente.",
  },
  {
    icon: History,
    title: "Memoria Técnica",
    description:
      "Base de conocimientos de casos borde históricos para evitar multas por errores de interpretación recurrentes.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="border-b border-border/40 bg-muted/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Todo lo que necesitas para importar con confianza
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Seis funcionalidades diseñadas para eliminar la incertidumbre en la
            clasificación arancelaria.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/50">
              <CardHeader>
                <feature.icon className="size-8 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
