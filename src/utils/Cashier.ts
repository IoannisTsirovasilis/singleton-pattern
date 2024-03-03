// Cashier is Singleton
export class Cashier {
  private static instance: Cashier;
  private readonly name: string;

  private constructor() {
    this.name = 'Jim Halpert';
  }

  public static getInstance(): Cashier {
    if (!Cashier.instance) {
      Cashier.instance = new Cashier();
    }
    return Cashier.instance;
  }

  public greetCustomer(): string {
    return `Hello sir, my name is <strong>${this.name}</strong>, how can I help you?`;
  }

  public getName(): string {
    return this.name;
  }
}
