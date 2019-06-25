export interface UserChat {
        id: string,
        user: string,
}

export class ChatsService {
        getPrivate(user): UserChat | undefined {
                // return;
                let currentUserChat = undefined;
                const privateChats = JSON.parse(localStorage.getItem('private'));
                if (privateChats) {
                        currentUserChat = privateChats.filter(item => item.user === user)[0];
                }
                return currentUserChat;
        }
        
        addPrivateChat(user: string): UserChat {
                const chatId = crypto.getRandomValues(new Uint32Array(1));
                const currentChat = {
                        id: `${ chatId[0] }`,
                        user: user,
                }
                let privateChats = JSON.parse(localStorage.getItem('private'));
                if (privateChats) {
                        const isBlank = privateChats.filter(item => item.id === `${ chatId[0] }`);
                        if (isBlank.length > 0) {
                                this.addPrivateChat(user);
                        }  
                } else { privateChats = [] }
                privateChats.push(currentChat);
                localStorage.setItem('private', JSON.stringify(privateChats));
                return currentChat;
        }
}