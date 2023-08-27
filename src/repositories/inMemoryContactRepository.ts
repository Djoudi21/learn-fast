import {ContactRepository} from './interfaces/ContactRepository';
import {
  Contact,
  CreatedContactResponse,
} from '../use-cases/createContactUseCase/type';

export class inMemoryContactRepository implements ContactRepository {
  contacts: CreatedContactResponse[] = [];
  createContact(contact: Contact): Promise<CreatedContactResponse> {
    const newContact: CreatedContactResponse = {
      id: 1,
      ...contact,
    };

    this.contacts.push(newContact);
    return Promise.resolve(newContact);
  }
}
