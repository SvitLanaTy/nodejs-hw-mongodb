import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should be at least {#limit}',
    'string.max': 'Name should be at most {#limit}',
    'any.required': 'Name is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'PhoneNumber should be a string',
    'string.min': 'PhoneNumber should be at least {#limit}',
    'string.max': 'PhoneNumber should be at most {#limit}',
    'any.required': 'PhoneNumber is required',
  }),
  email: Joi.string().min(3).max(20).email().messages({
    'string.email': 'Email is not valid',
  }),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string()
    .min(3)
    .max(20)
    .valid('home', 'personal', 'work')
    .default('personal')
    .required()
    .messages({
      'any.required': 'ContactType is required',
    }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should be at least {#limit}',
    'string.max': 'Name should be at most {#limit}',
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'PhoneNumber should be a string',
    'string.min': 'PhoneNumber should be at least {#limit}',
    'string.max': 'PhoneNumber should be at most {#limit}',
  }),
  email: Joi.string().min(3).max(20).email().messages({
    'string.email': 'Email is not valid',
  }),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string()
    .min(3)
    .max(20)
    .valid('home', 'personal', 'work')
    .default('personal'),
});
