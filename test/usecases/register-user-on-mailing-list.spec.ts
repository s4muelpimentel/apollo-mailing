import { UserData } from "../../src/usecases/user-data";

describe("Register user on mailing list use case", () => {
  test("should add user with complete data to mailing list", async () => {
    const users: UserData[] = [];

    const repository: UserRepository = new InMemoryUserRepository(users);
    const useCase: RegisterUserOnMailingList = new RegisterUserOnMailingList(
      repository
    );

    const name = "any_name";
    const email = "any@mail.com";

    await useCase.registerUserOnMailingList({ name, email });

    const user = repository.findUserByEmail("any@mail.com");

    expect((await user).name).toBe("any_name");
  });
});
