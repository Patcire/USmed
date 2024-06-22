//const url = 'https://api.fda.gov/drug/label.json?limit=X&skip=Y'
const url = 'https://api.fda.gov/drug/label.json?limit=20'
export  const callAPI = async (itemsToSkip, keyword) => {
    return (await fetch(url+`&skip=${itemsToSkip}&search=${keyword}&sort=effective_time:desc`)).json()
}