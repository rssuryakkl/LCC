
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const app = express();

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Private-Network', 'true');
  next();
});
app.use(express.json());

// Swagger UI Configuration (Full Screen, Clean & Simple)

const swaggerOptions = {
  customSiteTitle: "Sign Up API - Swagger",
  customCss: `
    .swagger-ui .topbar { display: none !important; }
    .swagger-ui section.models { display: none !important; }
    .swagger-ui .scheme-container { display: none !important; }
    html, body { margin: 0; padding: 0; width: 100%; height: 100%; background: #ffffff; }
    .swagger-ui { width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 20px 40px !important; box-sizing: border-box; }
    .swagger-ui .wrapper { width: 100% !important; max-width: 100% !important; padding: 0 !important; }
    .swagger-ui .info { margin: 10px 0 25px 0; }
    .swagger-ui .info .title { font-size: 28px; color: #0f172a; font-weight: 700; }
  `,
  swaggerOptions: {
    docExpansion: "full",
    defaultModelsExpandDepth: -1
  }
};

// Swagger UI Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

// Authentication Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Product Routes (Add Product, Restock, Move to LCC, Edit)
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Report Routes (All line-by-line transaction logs & inventory history)
const reportRoutes = require('./routes/reportRoutes');
app.use('/api/reports', reportRoutes);

// Dashboard Routes (Aggregated metrics, low stock alerts, weekly movement & recent activity)
const dashboardRoutes = require('./routes/dashboardRoutes');
app.use('/api/dashboard', dashboardRoutes);

// [FUTURE FLAG]: Member / Staff directory backend can be enabled here when needed in the future:
// const memberRoutes = require('./routes/memberRoutes');
// app.use('/api/members', memberRoutes);

// Default route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'LCC-SCH Backend API is running'
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'LCC Warehouse API is healthy'
  });
});

module.exports = app;
