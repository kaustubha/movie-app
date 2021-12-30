export default async function GetMovieData(url){
        const response = await fetch(url);
        const responseJSON = await response.json();
        return responseJSON;
}