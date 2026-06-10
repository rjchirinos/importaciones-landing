export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Vesta Compliance</span> &mdash;
          Clasificación arancelaria con inteligencia artificial
        </p>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Vesta Compliance. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
