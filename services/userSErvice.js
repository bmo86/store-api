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

    create(){}

    find(){
      return this.user;
    }

    fincOne(id){
      return this.user.find(u => u.id === id)
    }

    delete(){}

    update(){}

  }


  module.exports = UserService;


