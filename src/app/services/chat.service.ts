export interface UserChat {
        id: string;
        user: string;
}

export class ChatsService {
        getPrivate(user): UserChat | undefined {
                // return;
                let currentUserChat;
                const privateChats = JSON.parse(localStorage.getItem('private'));
                if (privateChats) {
                        currentUserChat = privateChats.filter(item => item.user === user)[0];
                }
                return currentUserChat;
        }

        addPrivateChat(User: string): UserChat {
                const chatId = crypto.getRandomValues(new Uint32Array(1));
                const currentChat = {
                        id: `${ chatId[0] }`,
                        user: User,
                };
                let privateChats = JSON.parse(localStorage.getItem('private'));
                if (privateChats) {
                        const isBlank = privateChats.filter(item => item.id === `${ chatId[0] }`);
                        if (isBlank.length > 0) {
                                this.addPrivateChat(User);
                        }
                } else { privateChats = []; }
                privateChats.push(currentChat);
                localStorage.setItem('private', JSON.stringify(privateChats));
                return currentChat;
        }
}
