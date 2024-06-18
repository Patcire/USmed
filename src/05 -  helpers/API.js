//const url = 'https://api.fda.gov/drug/label.json?limit=X&skip=Y'
const url = 'https://api.fda.gov/drug/label.json?limit=10'
export  const callAPI = async (itemsToSkip, keyword) => {
    return (await fetch(url+`&skip=${itemsToSkip}&search=${keyword}`)).json()
}