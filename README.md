# Odisea Argentina - Simulador y Análisis Fiscal 🇦🇷💼

Un proyecto integral de **Laboratorio Colossus** diseñado para documentar, visibilizar y simular el **"Costo Argentino"** y las barreras fiscales que enfrentan los *founders* y *startups* al momento de levantar capital de Venture Capital, estructurar sus empresas y buscar inversión extranjera.

El repositorio se divide en dos componentes principales: la investigación documental y el simulador interactivo.

## 🗂 Estructura del Proyecto

### 1. Documentación e Investigación
En la raíz del proyecto se encuentra la investigación legal, impositiva y de negocios sobre la problemática actual que fuerza a las empresas tecnológicas de Argentina a incorporarse en el exterior (Delaware/Islas Caimán).

- `Trabas para Empresas Argentinas en el Exterior.md`: Documento detallado (y su versión en `OnePager_v22.docx`) que hace un análisis comparado de impuestos (Ganancias, IVA, Ingresos Brutos), el tratamiento de las notas convertibles (SAFE), y factores de riesgo jurídico.
- `read_docx.py`: Un script minimalista en Python que permite extraer el texto crudo desde archivos `.docx` (utilizado para generar `output.txt`).
  ```bash
  python read_docx.py OnePager_v22.docx
  ```

### 2. Simulador Interactivo (`/webapp`)
Una aplicación web interactiva (estilo RPG "HD-2D" / GBA clásico) que funciona como un *Serious Game*. A través de decisiones de diseño de producto y eventos simulados de inversión, el jugador puede experimentar el impacto de elegir entre:

1. **S.A. en Argentina (AR)**
2. **C-Corp en Delaware (DE)**
3. **Holding en Islas Caimán (KY)**

Al finalizar la experiencia, la aplicación despliega un moderno *Data Dashboard* que compara de forma visual la retención neta frente a la asfixia fiscal.

**Stack Web:**
- React 18 + Vite
- Diseño Glassmorphism + animaciones CSS nativas.
- Audio sintético retro a través de la Web Audio API.

## 🚀 Cómo correr el Simulador

Para inicializar y probar de forma local el simulador web interactivo:

```bash
cd webapp

# 1. Instalar las dependencias
npm install

# 2. Correr el servidor de desarrollo
npm run dev

# 3. Empaquetar para producción
npm run build
```

## ⚖️ Aviso Legal y Disclaimer

Tanto el contenido documental (`Trabas para Empresas Argentinas en el Exterior.md`) como los números mostrados en el **Simulador Interactivo** tienen fines estrictamente **educativos y de divulgación**. Los esquemas presentados (e.g. 35% de Ganancias + 7% por Dividendos) ilustran dinámicas estructurales de doble imposición; la realidad específica de cada emprendimiento requiere siempre de un abogado o asesor contable-tributarista certificado.

---
*Diseñado por Laboratorio Colossus.*
