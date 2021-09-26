const contactsOperations = require("./contacts");
const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
  try {
    switch (action) {
      case "list":
        const contacts = await contactsOperations.listContacts();
        console.table(contacts);
        break;
         
      case "get":
        const contactById = await contactsOperations.getContactById(id);
        console.log(contactById);
        break;

      case "add":
        const addContacts = await contactsOperations.addContact({ name, email, phone });
        console.log(addContacts);
        break;
      
      case "remove":
        await contactsOperations.removeContact(id);
        console.log("Success remove");
        break;
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    throw error;
  }
}

invokeAction(argv);

// const workWithContacts = async(type = 'listContacts', id, name, email, phone) => {
//   try {
//     switch(type){
//      case "listContacts":
//        return await contactsOperations.listContacts();
    
//      case "getContactById":
//        return await contactsOperations.getContactById(id);

//       case "addContact":
//         return await contactsOperations.addContact(name, email, phone);
    
//       case "removeContact":
//         return await contactsOperations.removeContact(id);  
//     }
//   }
//    catch(error){
//      throw  error;
//     }
// };

// workWithContacts('listContacts')
//    .then(data => console.table(data))
//    .catch(error => console.table(console.log(error))
// )


// workWithContacts('getContactById', 4)
//    .then(data => console.log(data))
//    .catch(error => console.log(error)
// )

// const newData = {
//   name: "Elizabeth",
//   email: "lizzy.gmail.com",
//   phone: 8050456769
// }

// workWithContacts("addContact", "", newData)
//    .then(data => console.table(data))
//    .catch(error => console.table(error)
// )
//  workWithContacts("removeContact", 4)
//  .then(data => console.table(data))
//  .catch(error => console.table(error))


// TODO: рефакторить;

  