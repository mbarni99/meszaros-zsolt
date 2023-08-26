import type { SendGridResponseBody } from './SendGridResponseBody';
import type { SendGridResponseHeaders } from './SendGridResponseHeaders';

export interface SendGridResponse {
    body: SendGridResponseBody;
    headers: SendGridResponseHeaders;
}
