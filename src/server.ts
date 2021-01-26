import { app } from "./app";
import logger from "./utils/logger";

app.listen(3333).on('listening', () => {
  logger.info("Server iniciado na porta: 3000", "SERVER");
})