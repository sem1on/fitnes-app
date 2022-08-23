export const exerciseOption = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9df0eacfdamshf9bd72a5cd638cap164ed5jsna83716bd5115',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': '9df0eacfdamshf9bd72a5cd638cap164ed5jsna83716bd5115',
    },
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
}