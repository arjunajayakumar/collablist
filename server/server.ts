import http, { Server, ServerResponse, IncomingMessage } from 'http';
import next from 'next';
import { parse } from 'url';
import { NextServer } from 'next/dist/server/next';
import { initializeSocket } from './socket';

const dev: boolean = process.env.NODE_ENV !== 'production';
const hostname: string = process.env.HOST || 'localhost';

const port: number = Number(process.env.PORT || 3000);

const app: NextServer = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server: Server = http.createServer(
    async (req: IncomingMessage, res: ServerResponse) => {
      try {
        const parsedUrl = parse(req.url!, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error('Error occurred handling', req.url, err);
        res.statusCode = 500;
        res.end('internal server error');
      }
    },
  );

  initializeSocket(server);

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
