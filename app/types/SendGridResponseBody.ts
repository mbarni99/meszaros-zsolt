import { SendGridError } from './SendGridError';

export interface SendGridResponseBody {
    errors: Array<SendGridError>;
}
