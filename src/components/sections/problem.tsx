import Image from "next/image";

export function Problem() {
  return (
    <section
      id="problem"
      className="border-b border-border/40 bg-muted/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center md:order-2">
            <Image
              src="/illustrations/filing_system_b5d2.svg"
              alt="Búsqueda manual en archivos"
              width={400}
              height={400}
              className="h-auto w-full max-w-md"
              unoptimized
            />
          </div>
          <div className="flex flex-col gap-4 md:order-1">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Horas perdidas buscando en Gacetas, PDFs y Excel
            </h2>
            <p className="text-lg text-muted-foreground">
              Los agentes de aduana e importadores venezolanos invierten horas
              revisando manualmente cada Gaceta Oficial, buscando
              clasificaciones arancelarias, exoneraciones vigentes y regímenes
              legales aplicables.
            </p>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 text-destructive">&#x2715;</span>
                Riesgo constante de multas por errores de clasificación
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 text-destructive">&#x2715;</span>
                Criterios inconsistentes entre funcionarios en distintos puertos
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 text-destructive">&#x2715;</span>
                Revalorización inesperada que afecta el landed cost
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
