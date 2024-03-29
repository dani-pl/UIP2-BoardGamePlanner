import axios from 'axios';

/**
 * This function gets all the information of a game by id
 * @param {int} gameId 
 * @returns {object} game
 */
export const getGameById = (gameId) => {
    var game;
    GAMES.forEach(g => {
        if(g.gameId == gameId ){
            game = g;
        }
    });
    return game;
}

/**
 * This function returns all the games 
 * @returns {list} games
 */
export const getAllGames = () => {
    return GAMES;
}

/**
 * This function searches a game by the name of the game
 * @param {string} gameName 
 * @returns {object} game
 */
export const getGameByName = (gameName) => {
    var game;
    GAMES.forEach(g => {
        if(g.name == gameName){
            game = g
        }
    })
    return game;
}

/**
 * This function gets the image URL of a game using the game id
 * @param {int} gameId 
 * @returns {string} imageURL
 */
export const getGameImageById = (gameId) => {
    var game = getGameById(gameId);
    var imageURL = game.image;
    return imageURL;
}


/**
 * This function loads the games that a user has in Board Game Geek using their BGG user name
 * @param {string} BGGid 
 * @returns {list} gameLibrary
 */
export const getBGGLibrary = (BGGid) => {
    var gameLibrary = [];
    // axios setup
    const source = axios.CancelToken.source();
    const BGGURL = `https://bgg-json.azurewebsites.net/collection/${BGGid}?grouped=true`;
    
    /**
     * this function calls BGG API and fetches the users library
     * @returns 
     */
    const fetchGames = async () => {
        try {
            const response = await axios.get(BGGURL, {cancelToken: source.token});
            // if the status is OK
            if( response.status === 200) {
                // get the response data and for each game object push the id to the the 'gameLibrary' array
                const BGG_Library = response.data;
                for (let index = 0; index < BGG_Library.length; index++) {
                    const game = BGG_Library[index];
                    gameLibrary.push(game.gameId)
                }
                return;
            } else {
                // in all other cases throw an error
                throw new Error("Failed to fetch games from BGG: ");
            }
        } catch (error) {
            if(axios.isCancel(error)){
                console.log('data fetching was cancelled');
            } else {
                console.log(error)
            }
        }
    }

    // fetch the game library from Board Game Geek
    fetchGames();

    return gameLibrary;
}