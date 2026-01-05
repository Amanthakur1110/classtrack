const API_URL = '/api-counter/v2/aman-thakurs-team-2381/first-counter-2381';
const OFFSET = 53; // Base offset for display

export const getDownloadCount = async (): Promise<number> => {
    try {
        const response = await fetch(API_URL);
        const result = await response.json();
        return (result.data?.up_count || 0) + OFFSET;
    } catch (error) {
        console.error('Error fetching download count:', error);
        return OFFSET;
    }
};

export const incrementDownloadCount = async (): Promise<number> => {
    try {
        const response = await fetch(`${API_URL}/up`);
        const result = await response.json();
        return (result.data?.up_count || 0) + OFFSET;
    } catch (error) {
        console.error('Error incrementing download count:', error);
        return OFFSET;
    }
};
