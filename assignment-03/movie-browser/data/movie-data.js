export function getAllMovies(){
    return MOVIEDATA;
}

export function getMovieById(id){

    return MOVIEDATA.find(item => item.id === id);    
}

export const MOVIEDATA = [
    {
        id: '001',
        title: 'Inception',
        description: 'A skilled thief enters people’s dreams to steal secrets, but is offered a chance at redemption.',
        director: 'Christopher Nolan',
        imageUrl: 'https://media.themoviedb.org/t/p/w188_and_h282_bestv2/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg'
    },
    {
        id: '002',
        title: 'The Matrix',
        description: 'A hacker discovers reality is a simulation and joins a rebellion against the machines.',
        director: 'The Wachowskis',
        imageUrl: 'https://media.themoviedb.org/t/p/w188_and_h282_bestv2/p96dm7sCMn4VYAStA6siNz30G1r.jpg'
    },
    {
        id: '003',
        title: 'Interstellar',
        description: 'A team travels through a wormhole to find a new home for humanity.',
        director: 'Christopher Nolan',
        imageUrl: 'https://media.themoviedb.org/t/p/w188_and_h282_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
    },
    {
        id: '004',
        title: 'The Godfather',
        description: 'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.',
        director: 'Francis Ford Coppola',
        imageUrl: 'https://media.themoviedb.org/t/p/w188_and_h282_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg'
    },
    {
        id: '005',
        title: 'Pulp Fiction',
        description: 'Interwoven stories of crime, redemption, and chaos in Los Angeles.',
        director: 'Quentin Tarantino',
        imageUrl: 'https://media.themoviedb.org/t/p/w188_and_h282_bestv2/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg'
    },
    {
        id: '006',
        title: 'The Dark Knight',
        description: 'Batman faces the Joker, a criminal mastermind who pushes Gotham into chaos.',
        director: 'Christopher Nolan',
        imageUrl: 'https://media.themoviedb.org/t/p/w188_and_h282_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
    },
    {
        id: '007',
        title: 'Parasite',
        description: 'A poor family infiltrates a wealthy household, leading to unexpected consequences.',
        director: 'Bong Joon-ho',
        imageUrl: 'https://media.themoviedb.org/t/p/w188_and_h282_bestv2/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'
    },
    {
        id: '008',
        title: 'Blade Runner 2049',
        description: 'A young blade runner uncovers a secret that could shake what’s left of society.',
        director: 'Denis Villeneuve',
        imageUrl: 'https://media.themoviedb.org/t/p/w188_and_h282_bestv2/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg'
    },
    {
        id: '009',
        title: 'Whiplash',
        description: 'A young drummer pushes himself to the limit under a brutal instructor.',
        director: 'Damien Chazelle',
        imageUrl: 'https://media.themoviedb.org/t/p/w188_and_h282_bestv2/7fn624j5lj3xTme2SgiLCeuedmO.jpg'
    },
    {
        id: '010',
        title: 'Mad Max: Fury Road',
        description: 'In a post-apocalyptic wasteland, a drifter teams up with a rebel to escape a tyrant.',
        director: 'George Miller',
        imageUrl: 'https://media.themoviedb.org/t/p/w188_and_h282_bestv2/hA2ple9q4qnwxp3hKVNhroipsir.jpg'
    }
];
