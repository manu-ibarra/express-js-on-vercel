import express from 'express';
import path from 'path';

const app = express();

// Sirve todos los archivos estáticos de la carpeta public
app.use(express.static(path.join(process.cwd(), 'public')));

// Envía tu index.html para cualquier ruta que visiten
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

export default app;
