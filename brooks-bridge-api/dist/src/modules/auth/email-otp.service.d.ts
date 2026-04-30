export declare class EmailOtpService {
    private transporter;
    constructor();
    sendOtp(email: string, otp: string, name: string): Promise<void>;
}
