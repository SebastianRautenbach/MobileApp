import { Entity, Schema } from "redis-om";


class User extends Entity {}


const adminSchema = new Schema(Admin, {
  name: { type: "string" },
  email: { type: "string" },
  password: {type: "string"},
  createdAt: { type: "date" }
});



const userRepository = client.fetchRepository(adminSchema);

await userRepository.createIndex();
