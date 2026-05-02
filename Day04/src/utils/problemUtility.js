 const axios = require('axios');



const getLanguageById=(lang)=>{
    const language={
        "c++": 54,
        "java": 62,
        "javascript":63
    }
    return language[lang.toLowerCase()];
}

const submitbatch= async (submissions)=>{

const options = {
  method: 'POST',
  url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
  params: {
    base64_encoded: 'true'
  },
  headers: {
    'x-rapidapi-key': '3a679ab993mshbc32b5f99bb6d5cp12016djsn16e1e7888ce0',
    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    submissions
  }
};

async function fetchData() {
	try {
		const response = await axios.request(options);
		return response.data ;
	} catch (error) {
		console.error(error);
	}
}

return await fetchData();
}

module.exports=(getLanguageById,submitbatch) ;