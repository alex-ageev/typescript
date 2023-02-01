class Product {
  protected name: string;
  protected price: number;
  protected description: string;
  protected quantity: number;

  constructor(
    name: string,
    price: number,
    description: string,
    quantity: number
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.quantity = quantity;
  }
  // getters
  public getName(): string {
    return this.name;
  }

  // setters
  public setName(name) {
    this.name = name;
  }

  static sum(a: number, b: number) {
    return a+b;
  }
}

class ProductBeauty extends Product {
  private beauty;
  constructor(name: string, price: number, description:string, quantity: number, beauty: string) {
    super(name, price, description, quantity);
    this.beauty = beauty;
  }
}
const p = new Product("nome", 123, "asd", 123);
const pb = new ProductBeauty("nome", 123, "asd", 123, "beauty");



console.log(Product.sum(3, 3));

