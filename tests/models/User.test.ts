import { User, UserAttributes } from "../../src/models/User";

describe("User Model", () => {
  const userData: UserAttributes = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
  };

  it("should create a user with correct properties", () => {
    const user = new User(userData);

    expect(user.getId()).toBeDefined();
    expect(user.getFullName()).toBe("John Doe");
    expect(user.getEmail()).toBe("john.doe@example.com");
  });

  it("should update user properties", () => {
    const user = new User(userData);

    user.setFirstName("Jane");
    expect(user.getFullName()).toBe("Jane Doe");

    user.setLastName("Smith");
    expect(user.getFullName()).toBe("Jane Smith");

    user.setEmail("jane.smith@example.com");
    expect(user.getEmail()).toBe("jane.smith@example.com");
  });

  it("should convert user to JSON", () => {
    const user = new User(userData);
    const json = user.toJSON();

    expect(json.firstName).toBe("John");
    expect(json.lastName).toBe("Doe");
    expect(json.email).toBe("john.doe@example.com");
    expect(json.id).toBeDefined();
    expect(json.createdAt).toBeInstanceOf(Date);
    expect(json.updatedAt).toBeInstanceOf(Date);
  });

  it("should create user using factory method", () => {
    const user = User.create(userData);

    expect(user).toBeInstanceOf(User);
    expect(user.getFullName()).toBe("John Doe");
  });
});
