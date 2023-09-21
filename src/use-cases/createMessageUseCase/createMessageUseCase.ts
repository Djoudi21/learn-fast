import {MessageRepository} from '../../repositories/interfaces/MessageRepository';
import {CreateMessageReqBody} from './types';

export class CreateMessageUseCase {
  messageRepository: MessageRepository;
  constructor(messageRepository: MessageRepository) {
    this.messageRepository = messageRepository;
  }
  execute(data: CreateMessageReqBody) {
    return this.messageRepository.createMessage(data);
  }
}
