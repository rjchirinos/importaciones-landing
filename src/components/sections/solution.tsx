import Image from "next/image";

export function Solution() {
  return (
    <section id="solution" className="border-b border-border/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center">
            <Image
              src="/illustrations/data_report_bi6l.svg"
              alt="Reporte de datos automatizado"
              width={400}
              height={400}
              className="h-auto w-full max-w-md"
              unoptimized
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Vesta Compliance resuelve el caos documental
            </h2>
            <p className="text-lg text-muted-foreground">
              Un sistema de inteligencia artificial que procesa cada Gaceta
              Oficial en tiempo real, clasifica tus productos automáticamente y
              genera trazabilidad jurídica completa del resultado.
            </p>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 text-primary">&#x2713;</span>
                Monitoreo automático de cada publicación oficial
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 text-primary">&#x2713;</span>
                Clasificación con código arancelario preciso
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 text-primary">&#x2713;</span>
                Informes con base legal y justificación jurídica
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 text-primary">&#x2713;</span>
                Cálculo de landed cost con todos los componentes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
