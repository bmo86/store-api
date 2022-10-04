const faker = require("faker");

  class UserService{

    constructor(){
      this.user = [];
      this.generate();
    }

    generate(){
      const size = 10;

      for (let i = 0; i < size; i++) {
        this.user.push({
          id    : faker.datatype.uuid(),
          name  : faker.commerce.productName(),
          image : faker.image.imageUrl(),
        });
      }
    }

    async create(data){
      const usr = {
        id  : faker.datatype.uuid(),
        ...data
      }

      this.user.push(usr)
    }

    async find(){
      return this.user;
    }

    async fincOne(id){
      return this.user.find(u => u.id === id)
    }

    async delete(id){
      const index = this.user.findIndex(item => item.id === id)

      if (index === -1) {
        throw new Error("User Not Found")
      }

      this.user.splice(index, 1)

      return { id }

    }

    update(id,  changeData){
      const index = this.user.findIndex(item => item.id === id)

      if (index === -1){
        throw new Error("User Not Found")
      }
      const usr = this.user[index]
      this.user[index] = {
        ...usr,
        ...changeData
      }

      return this.user[index]
    }
  }


  module.exports = UserService;


