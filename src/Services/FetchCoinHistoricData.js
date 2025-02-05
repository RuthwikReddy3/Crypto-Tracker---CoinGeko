import axiosInstance from "../Helpers/AxiosInstance";

export async function FetchCoinHistoricData(id, interval = "daily", days = 7, currency = "usd") {
    try {
        // Validate if ID is provided
        if (!id) {
            throw new Error("Invalid Coin ID: Cannot fetch data without a valid coin identifier.");
        }

        // Correct API URL format
        const response = await axiosInstance.get(
            `/coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`
        );

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("FetchCoinHistoricData Error:", error);
        return null;
    }
}
