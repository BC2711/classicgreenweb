const BASE_URL = "http://api.classicgreencard.com";


export const getData = async () => {
    try {
        const response = await fetch(`${BASE_URL}/classigreenwebregistration?action=All`);

        // Check for response status
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }

        // Parse JSON
        const data = await response.json();

        // Validate and return
        if (data && Array.isArray(data.results)) {
            return data.results;
        } else if (data) {
            console.warn("Unexpected data format, returning full response:", data);
            return data;
        }

        return [];
    } catch (error) {
        console.error("Failed to fetch classic green data:", error);
        return [];
    }
};

export const postData = async (data, category) => {
    try {
        if (!data || Object.keys(data).length === 0) {
            throw new Error('Data cannot be empty');
        }

        const encodedCategory = encodeURIComponent(category);
        const requestBody = { data: data };

        const requestUrl = `${BASE_URL}/classigreenwebregistration?action=${encodedCategory}`;
        console.log('Requesting URL:', requestUrl); // Debugging log

        const response = await fetch(requestUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.result) {
            const errorText = await response.text(); // Get more details
            console.error(`Error response from ${requestUrl}:`, errorText);
            throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
        }

        const responseData = await response.json();
        return responseData.results;
    } catch (error) {
        console.error(`Failed to post data "${JSON.stringify(data)}" with category "${category}":`, error);
        return []; // Return empty array for error handling
    }
};


