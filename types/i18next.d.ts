import 'i18next';
import common from '../locales/en/common.json';
import auth from '../locales/en/auth.json';
import listings from '../locales/en/listings.json';
import contact from '../locales/en/contact.json';
import about from '../locales/en/about.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      auth: typeof auth;
      listings: typeof listings;
      contact: typeof contact;
      about: typeof about;
    };
  }
}
