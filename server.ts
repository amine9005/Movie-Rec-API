import createServer from "./app";
import { config } from "./config/config";

const app = createServer();
const PORT = config.server.port;

app.listen(PORT, (): void => {
  console.log(`Server Running  at 👉 http://localhost:${PORT}`);
});
