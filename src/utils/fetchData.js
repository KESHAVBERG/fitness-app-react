export const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a78f1cb2a2mshecfacb7bdc54f79p14ffa1jsn4153a67ab11d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  


export const fetchData= async (url, option)=>{
    const response = await fetch(url, option);
    const data = await response.json();

    return data;
}