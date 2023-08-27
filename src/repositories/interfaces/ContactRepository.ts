import {
  Contact,
  CreatedContactResponse,
} from '../../use-cases/createContactUseCase/type';

export interface ContactRepository {
  contacts: Contact[];
  createContact(contact: Contact): Promise<CreatedContactResponse>;
}
