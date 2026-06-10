# Plan — Landing Page Vesta Compliance

## Resumen

Landing page en español para **Vesta Compliance**, un sistema de IA que procesa Gacetas Oficiales de leyes aduaneras en tiempo real. Orientada a **agentes de aduana e importadores venezolanos**. Sin pricing, sin demo inmediata. El único CTA es **unirse a una lista de espera**.

---

## Stack

| Herramienta | Uso |
|---|---|
| Next.js 16 | Framework (RSC, Server Actions) |
| Tailwind CSS v4 | Estilos |
| shadcn/ui | Componentes base |
| Lucide React | Iconos |
| unDraw (SVG) | Ilustraciones gratuitas |

---

## Estructura de componentes

```
src/
├── components/
│   ├── ui/              (shadcn: button ✓, card, badge, input, textarea, separator)
│   ├── layout/
│   │   ├── header.tsx       — nav + CTA "Lista de Espera"
│   │   └── footer.tsx       — copyright
│   ├── sections/
│   │   ├── hero.tsx         — propuesta de valor principal
│   │   ├── problem.tsx      — el dolor: PDFs, Gacetas, Excel, multas
│   │   ├── solution.tsx     — Vesta Compliance: IA monitorea Gacetas + clasifica + justifica
│   │   ├── features.tsx     — grid de funcionalidades (6 cards)
│   │   ├── how-it-works.tsx — 4 pasos: factura → clasificación → validación → informe
│   │   ├── memory-puerto.tsx— feature estrella: alertas de riesgo antes de declarar
│   │   ├── waitlist-form.tsx— formulario: Nombre, Razón Social, Descripción
│   │   └── cta.tsx          — cierre con botón a waitlist
│   └── shared/
│       └── icons.tsx        — lucide icons centralizados
├── lib/
│   └── utils.ts             — ya existe (cn de shadcn)
├── public/
│   └── illustrations/       — SVGs de unDraw
└── app/
    ├── layout.tsx            — metadata actualizada (título "Vesta Compliance", lang="es")
    └── page.tsx              — orquesta secciones
```

---

## Secciones y copy

### Hero
> **Clasificación arancelaria con IA en tiempo real**
>
> Monitoreo automático de Gacetas Oficiales + clasificación de productos con código arancelario,
> tarifa ad-valoren, régimen legal y justificación jurídica. Calcula tu landed cost antes de que la carga toque aduana.

### Problem
> Horas perdidas buscando en Gacetas, PDFs y Excel. Riesgo de multas por errores de clasificación
> o revalorización. Criterios inconsistentes entre funcionarios.

### Solution
> Vesta Compliance procesa facturas de proveedores, clasifica productos y genera trazabilidad jurídica
> completa respaldada por las Gacetas Oficiales vigentes.

### Features (6 cards)
1. **Clasificación automática** — IA entrenada en nomenclatura arancelaria
2. **Monitoreo Gaceta Oficial** — Detección de cambios normativos en tiempo real
3. **Alertas de Riesgo** — Memory Puerto: criterios disidentes de funcionarios
4. **Cálculo Landed Cost** — Costo real con todos los componentes
5. **Informes con base legal** — Trazabilidad jurídica del resultado
6. **Memoria técnica** — Casos borde históricos para evitar multas

### How it works (4 pasos)
1. Sube la factura del proveedor o listado de productos
2. IA clasifica cada producto con código arancelario
3. Valida contra Gacetas Oficiales y exoneraciones vigentes
4. Recibe informe con trazabilidad jurídica y landed cost

### Memory Puerto
> ¿Un producto tiene historial de problemas de clasificación? ¿Funcionarios aplican un criterio
> distinto al de la ley en ese puerto? Vesta Compliance te avisa **antes de declarar**, para que evites
> multas por errores de interpretación y revalorización.

### Waitlist Form
- **Campos:** Nombre completo, Razón Social, Breve descripción de la necesidad
- **Botón:** "Solicitar Acceso Anticipado"

### CTA final
> "No te arriesgues a multas. Únete a la lista de espera."

---

## Ilustraciones (unDraw)

| Sección | Ilustración |
|---|---|
| Hero | `ai-generated-document` |
| Problem | `searching` / `files-missing` |
| Solution | `document-analysis` |
| Features | `data-at-work`, `instant-analysis`, `charts` |
| How it works | `setup-wizard` / `steps` |
| Memory Puerto | `alert` / `warning` |
| Waitlist | `newsletter` / `sign-up` |

Todas disponibles en https://undraw.co/illustrations, licencia MIT, sin atribución requerida.
Se descargan en SVG y se colocan en `public/illustrations/`.

---

## Shadcn components necesarios

| Componente | Para |
|---|---|
| `button` | ✅ ya instalado |
| `card` | features, how-it-works, memory-puerto |
| `badge` | etiquetas en features |
| `input` | formulario waitlist |
| `textarea` | formulario waitlist |
| `separator` | separadores entre secciones |
| `sheet` | menú mobile responsive |

---

## Lo que NO se hace en esta fase

- i18n (solo español)
- Pricing / medios de pago
- Blog / documentación
- Autenticación
- Backend del formulario (solo frontend por ahora)
- Tests (se agregan en siguiente iteración)
