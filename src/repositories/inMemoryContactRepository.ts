import {ContactRepository} from './interfaces/ContactRepository';

export class inMemoryContactRepository implements ContactRepository {
  contacts = [];
  createContact(contact: Contact): Promise<CreatedContactResponse> {
    const response = {
      id: (this.contacts.length += 1),
      ...contact,
    };
    return Promise.resolve(response);
  }
}
