import { handler } from './handler';
import { config } from 'dotenv';

config();

async function testLocal() {
    const event = {
        body: JSON.stringify({ question: 'What is the meaning of life?' }),
    };

    try {
        const result = await handler(event as any); // Only pass the event
        console.log('Response:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

testLocal();
