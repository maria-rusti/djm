const API_URL = String(process.env.REACT_APP_API_URL);
const API_GUESTS_URL = String(process.env.REACT_APP_API_GUESTS_URL);
const CRYPTO_KEY = String(process.env.REACT_APP_CRYPTO_JS_SK);

const config = {
	api: {
		url: API_URL,
		urlGuests: API_GUESTS_URL,
	},
	crypto: {
		crypto_key: CRYPTO_KEY,
	},
};

export default config;
