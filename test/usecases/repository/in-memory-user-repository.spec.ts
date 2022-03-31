import { InMemoryUserRepository } from "../../../src/usecases/repository/in-memory-user-repository";
import { UserData } from "../../../src/usecases/user-data";

describe("In memory User repository", () => {
  test("should return null if user is not found", async () => {
    const users: UserData[] = [];
    const userRepository = new InMemoryUserRepository(users);
    const user = await userRepository.findUserByEmail("any@mail.com");

    expect(user).toBeNull();
  });
});
