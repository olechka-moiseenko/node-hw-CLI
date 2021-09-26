const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");
const contacts = require("./db/contacts.json");

const contactsPath = path.join(__dirname, "contacts.json");

const updateContacts = async(newContacts) => {
    await fs.writeFile(contactsPath, JSON.stringify(newContacts))
}

const listContacts = async() => contacts;

const getContactById = async(id) => {
    const contacts = await listContacts();
    const contact = contacts.find(item => item.id === id);
     if(!contact) {
        return null;
    }
    return contact;
}   

const addContact = async(data) => {
    const contacts = await listContacts();
    const newContact = {...data, id: v4()};
    contacts.push(newContact);
    // console.log(contactsPath);
    await fs.writeFile("./contacts.json", JSON.stringify(contacts));
    return newContact;
}

const removeContact = async(id) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === id);
    if(idx === -1) {
        return null;
    }
    contacts.splice(idx, 1);
    await updateContacts(contacts);
    return "Success remove";
}

// const updateContacts = async(id, data) => {
//       const contacts = await listContacts();
//       const idx = contacts.findIndex(item = item.id === id);
//       if(idx === -1){
//           return null;
//       }
//       const updateContacts = {...contacts[idx], ...data};
//       contacts[idx] = updateContacts; 
// }







module.exports = {listContacts, getContactById, addContact, removeContact};