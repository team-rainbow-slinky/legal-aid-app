import { config } from 'dotenv';
import { connect } from './utils/connect';
import app from './routes/app';

config();
connect();

const PORT = process.env.PORT || 7890

app.listen(PORT, () => {
  console.log('Server listening on', PORT);
});
