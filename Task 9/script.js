/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */

class Movie{
    constructor({title, director, budget}){
        this.title = title;
        this.director = director;
        this.budget = budget;
        return this.render();
    }

}
    render(){
    this.divMovie = document.createElement('div');
    this.divMovie.classList.add('movie');

    this.title = document.createElement('h1');
    this.titleText = document.createTextNode(this.title);
    this.title.appendChild(this.titleText);

    this.director = document.createElement('h1');
    this.tdirectorText = document.createTextNode(this.director);
    this.director.appendChild(this.directorText);
    
    this.budget = document.createElement('h1');
    this.budgetText = document.createTextNode(this.budget);
    this.budget.appendChild(this.budgetText);
    
    return this.divMovie;
}