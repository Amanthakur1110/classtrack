const API_URL = '/api-counter/v2/aman-thakurs-team-2381/first-counter-2381';
const OFFSET = 53; // Base offset for display
const HEADERS = {
    'Authorization': 'Bearer ut_YL2mFJEhIzl1bVoaVvuRO6VHrUoRuSlh7CM1fVLo'
};

export const getDownloadCount = async (): Promise<number> => {
    try {
        const response = await fetch(API_URL, { headers: HEADERS });
        const result = await response.json();
        return (result.data?.up_count || 0) + OFFSET;
    } catch (error) {
        console.error('Error fetching download count:', error);
        return OFFSET;
    }
};

export const incrementDownloadCount = async (): Promise<number> => {
    try {
        const response = await fetch(`${API_URL}/up`, { headers: HEADERS });
        const result = await response.json();
        return (result.data?.up_count || 0) + OFFSET;
    } catch (error) {
        console.error('Error incrementing download count:', error);
        return OFFSET;
    }
};
