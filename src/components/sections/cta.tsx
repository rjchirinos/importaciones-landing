import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          No te arriesgues a multas
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          &Uacute;nete a la lista de espera de Vesta Compliance y s&eacute; el primero
          en recibir acceso cuando lancemos. Transforma la incertidumbre
          aduanera en datos con respaldo legal.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <a href="#waitlist">Solicitar Acceso Anticipado</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
