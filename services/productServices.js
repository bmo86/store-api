const faker = require("faker");

class ProductService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate() {

  const size = 100;

    for (let i = 0; i < size; i++) {
      this.products.push({
        id    : faker.datatype.uuid(),
        name  : faker.commerce.productName(),
        price : parseInt(faker.commerce.price(), 10),
        image : faker.image.imageUrl(),
      });
    }
  }


  async create(data) {
    const p = {
      id: faker.datatype.uuid(),
      ...data
    }

    this.products.push(p);

    return p;
  }

  async find(){
    return new Promise((resolve /* , reject */) => {
      setTimeout(() => {
        resolve(this.products)
      }, 5000)
    })
  }

  async findOne(id){
    return this.products.find(item => item.id === id)
  }

  async update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1){
      throw new Error("product Not Found");
    }

    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index];

  }

  async delete(id){
    const i = this.products.findIndex(item => item.id === id)
    if (i === -1){
      throw new Error("Product Not Found");
    }

    this.products.splice(i, 1);
    return { id }
  }

}

module.exports = ProductService;
