import type { Prisma, User } from "@prisma/client";
import type { UsersRepository } from "../users-repository";

export class InMemoryUsersRepository implements UsersRepository {
	public users: User[] = [];

	async create(data: Prisma.UserCreateInput): Promise<User> {
		const user = {
			...data,
			id: String(this.users.length + 1),
			created_at: new Date(),
		};
		this.users.push(user);
		return user;
	}

	async findByEmail(email: string): Promise<User | null> {
		return this.users.find((user) => user.email === email) || null;
	}
}
