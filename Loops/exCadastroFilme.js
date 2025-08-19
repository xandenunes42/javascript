let movies = [];

let finish = false;

while(!finish)
{
    let title = prompt("Informe o nome do filme: ");
    let imdb = prompt("Informe a classificacao: ");

    if(title == null || imdb == null)
    {
        finish = true;
    } else 
    {
        movies.push({
            name : title,
            rating : imdb
        })
    }
}

/*for(let i = 0; i <= movies.length; i++)
{
    console.log(`nome: ${movies.name}\nclassificacao: ${movies.rating}`);
}
*/

for(key of movies)
{
    console.log(`nome: ${key.name}\nclassificacao: ${key.rating}`);
}