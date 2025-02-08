import { authenticate } from "@/http/controllers/authenticate";
import { profile } from "@/http/controllers/profile";
import type { FastifyInstance } from "fastify";
import { register } from "./controllers/register";

export async function appRoutes(app: FastifyInstance) {
	app.post("/users", register);
	app.post("/sessions", authenticate);

	/** Authenticated */
	app.get("/me", profile);
}
