import { InMemoryUserRepository } from "../../../src/usecases/repository/in-memory-user-repository";
import { UserData } from "../../../src/usecases/user-data";

describe("In memory User repository", () => {
  test("should return null if user is not found", async () => {
    const users: UserData[] = [];

    const sut = new InMemoryUserRepository(users);
    const user = await sut.findUserByEmail("any@mail.com");

    expect(user).toBeNull();
  });

  test("should return user if it is found in the repository", async () => {
    const users: UserData[] = [];

    const name = "any_name";
    const email = "any@mail.com";

    const sut = new InMemoryUserRepository(users);
    await sut.add({ name, email });

    const user = await sut.findUserByEmail("any@mail.com");

    expect(user.name).toBe("any_name");
  });

  test("should return all users in the repository", async () => {
    const users: UserData[] = [
      { name: "any_name", email: "any@mail.com" },
      { name: "any_name2", email: "any2@mail.com" },
    ];

    const sut = new InMemoryUserRepository(users);

    const allUsers = await sut.findAllUsers();

    expect(allUsers.length).toBe(2);
  });
});
