import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import { port } from '../../config';

const app = new Koa();

app.use(bodyParser());

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

export default app;