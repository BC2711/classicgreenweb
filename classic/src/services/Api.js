const BASE_URL = "http://api.classicgreencard.com";

export const getData = async () => {
    try {
        const response = await fetch(`${BASE_URL}/classigreenwebregistration?action=all`);

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
        // Encode the category for safe transmission in the URL
        const encodedCategory = encodeURIComponent(category);

        // Define the request payload
        const requestBody = {
            data: data,  // Send the data in the body
        };

        // Perform the POST request
        const response = await fetch(`${BASE_URL}/classigreenwebregistration?action=${encodedCategory}`, {
            method: 'POST',  // Use POST method
            headers: {
                'Content-Type': 'application/json',  // Set content type to JSON
            },
            body: JSON.stringify(requestBody),  // Send data as JSON in the body
        });

        // Check if response is successful
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        // Parse and return the JSON response
        const responseData = await response.json();
        return responseData.results;
    } catch (error) {
        // Log the error for debugging purposes
        console.error(`Failed to post data "${JSON.stringify(data)}" with category "${category}":`, error);
        return [];  // Return an empty array in case of an error
    }
};

