export interface ContactRepository {
  contacts: Contact[];
  createContact(contact: Contact): Promise<CreatedContactResponse>;
}
