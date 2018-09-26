/* eslint-disable func-names */
const keystone = require('keystone');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const { Types } = keystone.Field;

const { COUNTRIES, SERVICES, COMPANY_SIZES } = require('../../constants');

/**
 * Organization Model
 * ==========
 */
const Organization = new keystone.List('Organization', {
  track: {
    createdAt: true,
    updatedAt: true,
  },
});

Organization.add({
  name: { type: Types.Text, index: true },
  email: {
    type: Types.Email, initial: true, required: true, unique: true, index: true,
  },
  country: {
    type: Types.Select, options: COUNTRIES, required: true, initial: true,
  },
  staffSize: {
    type: Types.Select, options: COMPANY_SIZES, required: true, initial: true,
  },
  services: {
    type: Types.Select, options: SERVICES, required: true, initial: true,
  },
  message: {
    type: Types.Textarea, initial: true, required: true, index: true,
  },
});

// Plugins
Organization.schema.plugin(beautifyUnique);

/**
 * Relationships
 */
Organization.relationship({ ref: 'Job', path: 'Jobs', refPath: 'OrganizationId' });
Organization.relationship({ ref: 'OrganizationCaseFile', path: 'Case Files', refPath: 'OrganizationId' });

/**
 * Registration
 */
Organization.defaultColumns = 'name, email, country, staffSize, services';
Organization.register();
