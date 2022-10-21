import express, { Application } from 'express';
import route from './routes';

const app: Application = express();
const port = 3000;

app.use('/', route);
app.listen(port, (): void => {
    console.log(`listening on ${port}`);
});

export default app;
