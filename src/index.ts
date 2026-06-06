import express from 'express';
import healthRouter from './routes/health';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1/health', healthRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
