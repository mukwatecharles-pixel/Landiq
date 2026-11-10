// frontend/lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function verifyTitleRegistry(titleNumber: string) {
    try {
        const response = await fetch(`${API_BASE_URL}/verify-title/${encodeURIComponent(titleNumber)}`);
        if (!response.ok) throw new Error('Failed to fetch title verification');
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        return null;
    }
}

export async function initiateMpesaEscrow(phoneNumber: string, amount: number, parcelId: string) {
    try {
        const response = await fetch(`${API_BASE_URL}/mpesa/stkpush`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phoneNumber, amount, parcelId, paymentType: 'Escrow Deposit' })
        });
        return await response.json();
    } catch (error) {
        console.error('M-Pesa API Error:', error);
        return { success: false, error: 'Network error connecting to M-Pesa gateway' };
    }
}