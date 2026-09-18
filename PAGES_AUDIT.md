# Auditoría final · Hair Factory PWA

**Revisión:** 18/09/2026  
**Proyecto:** ttttooonni

## Resultado
**Lista para publicación como PWA estática**, con los datos disponibles configurados y sin depender de servicios de compilación.

## Verificaciones
- Estructura HTML y etiquetas semánticas revisadas.
- `lang="es"`, viewport y metadatos SEO presentes.
- JSON-LD de `BarberShop` incluido.
- Logo original usado como identidad principal.
- CSS responsive para móvil, tablet y escritorio.
- Navegación inferior móvil y menú lateral con `<dialog>`.
- JavaScript sin dependencias externas.
- Rutas relativas para GitHub Pages.
- Manifest con `start_url`, `scope`, iconos y shortcuts.
- Service Worker con caché local y actualización de versión.
- `404.html` y `robots.txt` incluidos.
- Teléfono y WhatsApp configurados.
- Google Maps configurado mediante URL de búsqueda por dirección.
- No se han inventado horarios, precios, Instagram ni un sistema de reservas externo.
- No hay API keys, contraseñas ni secretos en el repositorio.

## Pruebas automáticas realizadas antes de entregar
1. Comprobación de sintaxis de `app.js` con Node.
2. Comprobación de JSON de `manifest.webmanifest`.
3. Comprobación de JSON-LD embebido.
4. Comprobación de que los recursos locales referenciados existen.
5. Comprobación de que el ZIP abre y contiene todos los archivos.

## Pendiente para producción real
- Confirmar horarios con el negocio.
- Confirmar precios y servicios definitivos.
- Añadir Instagram si el negocio lo proporciona.
- Sustituir las ilustraciones de estilos por fotografías autorizadas si se desea.
- Confirmar ficha exacta de Google Business Profile y enlace directo de reseñas.
- Publicar en HTTPS y ejecutar Lighthouse en la URL final.
