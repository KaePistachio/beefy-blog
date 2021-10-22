const AuthorGenerator = () => {
    const adjectives = ['Laughing', 
                        'Psycho', 
                        'Lazy', 
                        'Nimble', 
                        'Crying', 
                        'Stoic', 
                        'Morose', 
                        'Benevolent',
                        'Mistrusting',
                        'Stealthy',
                        'Livid',
                        'Tactile',
                        'Gnarly'];
    const animals =    ['Octopus', 
                        'Mantis', 
                        'Wolf', 
                        'Raven', 
                        'Squirrel', 
                        'Tiger', 
                        'Lion', 
                        'Meerkat', 
                        'Rhino', 
                        'Otter', 
                        'Sloth', 
                        'Hawk', 
                        'Badger',
                        'Goat'];
    const min = 0;
    const adjMax = adjectives.length - 1;
    const aniMax = animals.length - 1;

    const animalSelect = (min, max) => {
        const index = [Math.floor(Math.random() * (max - min + 1) + min)];
        return animals[index];
        }
    const adjectiveSelect = (min, max) => {
        const index = [Math.floor(Math.random() * (max - min + 1) + min)];
        return adjectives[index];
        }
    
    const author = `${adjectiveSelect(min, adjMax)} ${animalSelect(min, aniMax)}`;
    //console.log(author);
    return author;
}

 
export default AuthorGenerator;