import { v4 as uuid} from "uuid";

let users = [];

export const getUsers =  (req,res) => {
    res.send(users);
};

export const createUsers = (req,res) => {
    const user = req.body;

    users.push({...user,id: uuid()});
    res.send("User Added successfully");
}



