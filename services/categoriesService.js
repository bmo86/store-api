const faker = require("faker");

class CategoriesService{

  constructor(){
    this.categories = [];
    this.generate();
  }

  async generate(){

    const size = 5;

    for (let i = 0; i < size; i++) {
      this.categories.push({
        id      : faker.datatype.uuid(),
        id_user : faker.datatype.uuid(),
        name    : faker.commerce.productName(),

      });
    }
  }

  async created(data){
    const category = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categories.push(category)

    return category

  }

  async find(){
    return this.categories;
  }

  async findOne(id){
    return this.categories.find(c => c.id === id);
  }

  async delete(id){
    const index = this.categories.findIndex(item => item.id === id)
    if (index === -1){
      throw new Error("Categories Not Found")
    }

    this.categories.splice(index, 1)

    return { id }
  }

  async Update(id, change){
    const index = this.categories.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error("Categorie Not Found")
    }

    const categorie = this.categories[index]
    this.categories[index] = {
      ...categorie,
      ...change
    }

    return this.categories[index]
  }

}

module.exports = CategoriesService;

