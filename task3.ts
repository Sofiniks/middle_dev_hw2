type IResponseData = {
    id: string
    email: string
}

const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments';

const getData = (url: string) : Promise<Response> => {
    return fetch(url)
}

getData(COMMENTS_URL)
  .then((data: Response) => data.json())
  .then((data: Array<IResponseData>) => data.forEach(({id, email}) => console.log(`ID: ${id}, Email: ${email}`)) )