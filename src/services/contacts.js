import { SORT_ORDER } from '../constants/index.js';
import { Contact } from '../db/models/contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({
  page,
  perPage,
  sortBy = 'name',
  sortOrder = SORT_ORDER.ASC,
  filter = {},
  userId,
}) => {
  const limit = perPage;
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const contactQuery = Contact.find();

  if (typeof filter.isFavourite === 'boolean') {
    contactQuery.where('isFavourite').equals(filter.isFavourite);
  }

  if (filter.contactType) {
    contactQuery.where('contactType').equals(filter.contactType);
  }

  contactQuery.where('userId').equals(userId);

  const contactsCount = await Contact.find()
    .merge(contactQuery)
    .countDocuments();

  const contacts = await contactQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactById = async ({ contactId, userId }) => {
  const contact = await Contact.findOne({ _id: contactId, userId });
  return contact;
};

export const createContact = async (payload) => {
  const contact = await Contact.create(payload);
  return contact;
};

export const deleteContact = async ({ contactId, userId }) => {
  const contact = await Contact.findOneAndDelete({
    _id: contactId,
    userId,
  });

  return contact;
};

export const updateContact = async (
  contactId,
  payload,
  userId,
  options = {},
) => {
  const updatedContact = await Contact.findOneAndUpdate(
    { _id: contactId, userId },
    payload,
    {
      new: true,
      runValidators: true,
      omitUndefined: true,
      ...options,
    },
  );

  if (!updatedContact) return null;

  return updatedContact;
};
