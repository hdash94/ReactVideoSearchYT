import axios from 'axios';

const KEY = 'AIzaSyDNOHOsaAjBSlnH6wzwkeoOIRfX2gbc_bA';

export default axios.create({
	
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		type: 'video' ,
		key: KEY
	}
})