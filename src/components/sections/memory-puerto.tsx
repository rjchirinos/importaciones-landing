import Image from "next/image";
import { AlertTriangle, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function MemoryPuerto() {
  return (
    <section
      id="memory-puerto"
      className="border-b border-border/40 bg-muted/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Badge variant="outline" className="w-fit">
              Funcionalidad exclusiva
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Memory Puerto: anticipa riesgos antes de que la carga toque aduana
            </h2>
            <p className="text-lg text-muted-foreground">
              ¿Un producto tiene historial de problemas de clasificación?
              &iquest;Los funcionarios aplican un criterio distinto al de la ley
              en ese puerto? Vesta Compliance te avisa antes de presentar la
              declaración.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-900 dark:bg-amber-950/20">
                <CardHeader>
                  <AlertTriangle className="size-6 text-amber-600 dark:text-amber-400" />
                  <CardTitle>Riesgos detectados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Identifica productos con criterios disidentes conocidos y
                    patrones de revalorización en puertos específicos.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-emerald-200 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-950/20">
                <CardHeader>
                  <ShieldCheck className="size-6 text-emerald-600 dark:text-emerald-400" />
                  <CardTitle>Sin sorpresas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Evita multas por errores de interpretación con alertas
                    tempranas y recomendaciones basadas en casos reales.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/illustrations/warning_cyit.svg"
              alt="Alerta de riesgo en aduana"
              width={400}
              height={400}
              className="h-auto w-full max-w-md"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
