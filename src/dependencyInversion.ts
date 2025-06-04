interface UsersRepository {
  findAll(): string;
  findById(): string;
}

class UsersController {
  constructor(private readonly usersRepo: UsersRepository) {}

  findById() {
    return this.usersRepo.findById();
  }
}

class PrismaRepo implements UsersRepository {
  findById(): string {
    return "prisma";
  }

  findAll(): string {
    return "hello world";
  }
}

class DynamoRepo implements UsersRepository {
  findById(): string {
    return "dynamo";
  }
  findAll(): string {
    return "hello world";
  }
}

const UsersControllerPrisma = new UsersController(new DynamoRepo());
const UsersControllerDynamo = new UsersController(new DynamoRepo());

console.log(UsersControllerPrisma.findById());
console.log(UsersControllerDynamo.findById());
