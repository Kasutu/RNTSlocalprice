export class ChatUser {
  public id: string;
  public name: string;
  public avatar: string;
  public lastMessage: string;
  public lastMessageTime: string;

  constructor(
    id: string,
    name: string,
    avatar: string,
    lastMessage: string,
    lastMessageTime: string
  ) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.lastMessage = lastMessage;
    this.lastMessageTime = lastMessageTime;
  }
}
