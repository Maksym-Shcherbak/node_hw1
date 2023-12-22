const { v4: uuidv4 } = require("uuid");
const fs = require("fs/promises");
const path = require("path");
const contactPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
  const contacts = await fs.readFile(contactPath);
  return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const findedContact = contacts.find((contact) => contact.id === contactId);
  return findedContact || null;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
  return result;
};

const addContact = async (name, email, phone) => {
  const id = uuidv4();
  editedId = id.split("-").join("");
  const newContact = {
    editedId,
    name,
    email,
    phone,
  };
  const contacts = await listContacts();
  contacts.push(newContact);
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
  return newContact || null;
};

module.exports = { listContacts, getContactById, removeContact, addContact };
