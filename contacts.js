const { v4 } = require("uuid");
const fs = require("fs/promises");


const contacts = require("./db/contacts.json");


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
    await fs.writeFile("./contacts.json", JSON.stringify(contacts));
    return newContact;
}







module.exports = {listContacts, getContactById, addContact};