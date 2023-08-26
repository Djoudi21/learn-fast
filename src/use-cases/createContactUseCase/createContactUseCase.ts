import {ContactRepository} from '../../repositories/interfaces/ContactRepository';

export class CreateContactUseCase {
  private contactRepository: ContactRepository;

  constructor(contactRepository: ContactRepository) {
    this.contactRepository = contactRepository;
  }
  execute(contact: Contact) {
    return this.contactRepository.createContact(contact);
  }
}
