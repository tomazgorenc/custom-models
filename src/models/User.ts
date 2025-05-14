// Basic user model example
export interface UserAttributes {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class User {
  private id: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(attributes: UserAttributes) {
    this.id = attributes.id || crypto.randomUUID();
    this.firstName = attributes.firstName;
    this.lastName = attributes.lastName;
    this.email = attributes.email;
    this.createdAt = attributes.createdAt || new Date();
    this.updatedAt = attributes.updatedAt || new Date();
  }

  // Getters
  public getId(): string {
    return this.id;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public getEmail(): string {
    return this.email;
  }

  // Setters
  public setFirstName(firstName: string): void {
    this.firstName = firstName;
    this.updatedAt = new Date();
  }

  public setLastName(lastName: string): void {
    this.lastName = lastName;
    this.updatedAt = new Date();
  }

  public setEmail(email: string): void {
    this.email = email;
    this.updatedAt = new Date();
  }

  // Helpers
  public toJSON(): UserAttributes {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  // Factory method
  public static create(attributes: UserAttributes): User {
    return new User(attributes);
  }
}
