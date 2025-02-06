import { authenticate } from "@/http/controllers/authenticate";
import type { FastifyInstance } from "fastify";
import { register } from "./controllers/register";

export async function appRoutes(app: FastifyInstance) {
	app.post("/users", register);

	app.post("/sessions", authenticate);
}
