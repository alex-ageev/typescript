var Product = /** @class */ (function () {
    function Product(name, price, description, quantity) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }
    // getters
    Product.prototype.getName = function () {
        return this.name;
    };
    // setters
    Product.prototype.setName = function (name) {
        this.name = name;
    };
    Product.sum = function (a, b) {
        return a + b;
    };
    return Product;
}());
console.log(Product.sum(3, 3));
