import createHttpError from 'http-errors';
import { getAllContacts, getContactById } from '../services/contacts.js';

export const getContactsController = async (req, res, next) => {
  const contacts = await getAllContacts();

  res.send({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;

  const contact = await getContactById(contactId);

  if (!contact) {
    //   throw createHttpError(404, 'Contact not found');
    return next(createHttpError.NotFound('Contact not found'));
  }

  res.send({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};