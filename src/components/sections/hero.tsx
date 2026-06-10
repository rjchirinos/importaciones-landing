import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Badge variant="outline" className="w-fit">
              Monitoreo en tiempo real de Gacetas Oficiales
            </Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Clasificación arancelaria{" "}
              <span className="text-primary">con IA</span> en tiempo real
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              Procesamos facturas de proveedores y listados de productos para
              clasificarlos automáticamente con su código arancelario, tarifa
              ad-valoren, régimen legal y justificación jurídica. Calcula tu
              landed cost antes de que la carga toque aduana.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href="#waitlist">Solicitar Acceso Anticipado</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#how-it-works">Cómo Funciona</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/illustrations/analysis_4jis.svg"
              alt="Análisis de documentos con IA"
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
