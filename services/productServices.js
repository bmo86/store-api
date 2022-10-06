const faker = require("faker");
const boom = require("@hapi/boom");

class ProductService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate() {

  const size = 100;

    for (let i = 0; i < size; i++) {
      this.products.push({
        id      : faker.datatype.uuid(),
        name    : faker.commerce.productName(),
        price   : parseInt(faker.commerce.price(), 10),
        image   : faker.image.imageUrl(),
        isBlock : faker.datatype.boolean(),
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
    const product =  this.products.find(item => item.id === id)
    if(!product){
      throw boom.notFound("Product Not Found")
    }

    if(product.isBlock){
      throw boom.conflict("Product is block")
    }

    return product
  }

  async update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1){
      throw boom.notFound("product Not Found");
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
      throw boom.notFound("Product not Found")
    }

    this.products.splice(i, 1);
    return { id }
  }

}

module.exports = ProductService;
