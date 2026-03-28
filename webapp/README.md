# Odisea Argentina 🇦🇷💼

Un simulador interactivo estilo "GBA" diseñado para visibilizar el **"Costo Argentino"** y las barreras fiscales que enfrentan los *founders* y *startups* a la hora de levantar capital de Venture Capital y realizar un "Exit" corporativo.

![Odisea Argentina](public/favicon.svg)

## 🎮 El Simulador

A través de decisiones de diseño de producto y game-design clásico, el jugador experimenta de primera mano la diferencia fiscal entre tres jurisdicciones clave para el ecosistema startup regional:

1. **S.A. en Argentina (AR)**: Simulando el peso de Ingresos Brutos, Doble Imposición, Bienes Personales sobre el *paper money* y riesgo cambiario.
2. **C-Corp en Delaware (EE.UU. - DE)**: La jurisdicción elegida por YCombinator. Neutralidad en SAFEs, Section 174 para I+D, y Section 1202 (QSBS) para Exits libres de impuestos federales (con condiciones).
3. **Holding en Islas Caimán (KY)**: La estructura de *Sandwich* y neutralidad tributaria total utilizada en esquemas avanzados ("Tax Neutral").

Al tomar decisiones de "Serie A" y "Eventos de Liquidez (Exit)", el modelo matemático calcula dinámicamente cómo se distribuyen las ganancias entre el State y el Founder.

## 📊 Dashboard Institucional

Al finalizar la historia corta interactiva, se revela un Data Dashboard moderno con diseño *glassmorphism* que contrasta visualmente los KPIs críticos:

- **Liquidación Disponible (Neto)** vs **Fuga por Fricción Fiscal** (% Tasa Efectiva).
- Animaciones de KPIs (Conteo Dinámico).
- Comparativa lado a lado (AR vs DE) de regulaciones sobre VC y Retenciones de Dividendos.
- Deep Dive sobre la inseguridad jurídica de formas legales como la S.A.S.

## 🛠️ Stack Tecnológico

- **React 18** + **Vite**
- **Vanilla CSS** con variables HSL personalizadas y animaciones `@keyframes`.
- **Generador de Audio Retro Sintético**: Sistema nativo en JavaScript (`AudioContext`) que crea efectos *chiptune* on-the-fly sin dependencias estáticas de MP3s.
- **Vercel** (`vercel.json` configurado para rewrites SPA seguros).

## 🚀 Despliegue Local

```bash
# Instalar dependencias
npm install

# Correr en modo desarrollo
npm run dev

# Generar build para producción
npm run build
```

## 📝 Análisis Fiscal / Descargo

Este simulador tiene fines estrictamente **educativos y de concientización institucional**. Los porcentajes usados (e.g. 35% Ganancias + 7% Dividendos) sirven para graficar dinámicas estructurales de la doble imposición; la realidad de cada startup requiere de un abogado tributarista especializado.

---
*Diseñado por Laboratorio Colossus.*
