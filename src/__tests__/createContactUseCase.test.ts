import {ContactRepository} from '../repositories/interfaces/ContactRepository';
import {CreateContactUseCase} from '../use-cases/createContactUseCase/createContactUseCase';
import {inMemoryContactRepository} from '../repositories/inMemoryContactRepository';

describe('create contact use case', () => {
  let contactRepository: ContactRepository;
  let createContactUseCase: CreateContactUseCase;
  beforeEach(() => {
    contactRepository = new inMemoryContactRepository();
    createContactUseCase = new CreateContactUseCase(contactRepository);
    contactRepository.contacts = [];
  });
  it('should create contact', async () => {
    const newContact = {
      name: 'new contact',
    };
    const createdContact = await createContactUseCase.execute(newContact);
    expect(contactRepository.contacts).toHaveLength(1);
    expect(createdContact).toHaveProperty('id');
    expect(contactRepository.contacts[0]).toHaveProperty('id');
  });
});
