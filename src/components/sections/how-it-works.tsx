import Image from "next/image";
import { Upload, Cpu, FileSearch, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Sube la factura",
    description:
      "Carga la factura del proveedor o un listado de productos. Aceptamos PDF, Excel y formatos comunes.",
  },
  {
    icon: Cpu,
    title: "IA clasifica",
    description:
      "Nuestra inteligencia artificial identifica cada producto y lo clasifica con su código arancelario preciso.",
  },
  {
    icon: FileSearch,
    title: "Valida contra Gacetas",
    description:
      "El sistema cruza cada clasificación contra las Gacetas Oficiales vigentes, exoneraciones y regímenes legales.",
  },
  {
    icon: FileCheck,
    title: "Recibe el informe",
    description:
      "Obtén un informe completo con trazabilidad jurídica, landed cost y alertas de riesgo antes de declarar.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-b border-border/40 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Cómo funciona
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            De la factura al informe final en cuatro pasos simples.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="size-7 text-primary" />
              </div>
              <div className="mb-2 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {index + 1}
              </div>
              <h3 className="mb-2 font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Image
            src="/illustrations/setup_wizard_r6mr.svg"
            alt="Proceso guiado paso a paso"
            width={500}
            height={400}
            className="h-auto w-full max-w-lg"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
