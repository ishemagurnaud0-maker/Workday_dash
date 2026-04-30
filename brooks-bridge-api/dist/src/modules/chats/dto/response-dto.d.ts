export declare class ChannelResponseDto {
    id: string;
    name: string;
    companyId: string;
    createdAt: string;
    updatedAt: string;
}
export declare class ChannelsListResponseDto {
    channels: ChannelResponseDto[];
    total: number;
}
export declare class MessageResponseDto {
    id: string;
    content: string;
    senderId: string;
    channelId: string;
    sender?: {
        id: string;
        name: string;
        email: string;
    };
    createdAt: string;
}
export declare class MessagesListResponseDto {
    messages: MessageResponseDto[];
    total: number;
    channelId: string;
}
