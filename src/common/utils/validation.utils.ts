import Joi from 'joi';

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const signupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const offerSchema = Joi.object({
  advertiser_name:  Joi.string().required(),
  url: Joi.string().uri().required(),
  description: Joi.string().max(500).required(),
  starts_at: Joi.date().required(),
  ends_at: Joi.date().allow(null),
  premium: Joi.boolean().allow(null),
});