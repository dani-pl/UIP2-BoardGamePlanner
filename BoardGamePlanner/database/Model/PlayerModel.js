import { Text, View } from 'react-native'
import React, { Component } from 'react'
import {PLAYERS} from "../players";
export default class PlayerModel {

  constructor(props) {
    super(props)
  
    this.state = {
        playerId: null,
        name: null,
        email: null,
        password: null,
        username: null,
        image: null,
        library: [], // array of GameId <int>
        following: [], // array of PlayerId <int>
        followers: [],// array of PlayerId <int>
        language: null,
        location: null,
        description: null,
        bggUsername: null,
        events: {},
    }

 

    this.getPlayerById = this.getPlayerById.bind(this);
    this.getLanguage = this.getLanguage.bind(this);
    this.updateLanguage = this.updateLanguage.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.removeLocation = this.removeLocation.bind(this);
    this.updateBGGname = this.updateBGGname.bind(this);
    this.removeBGGname = this.removeBGGname.bind(this)
    this.updateFollowers = this.updateFollowers.bind(this)
    this.updateFollowing = this.updateFollowing.bind(this)
    this.addGame2Library = this.addGame2Library.bind(this)
    this.removeGameFromLibary = this.removeGameFromLibary.bind(this)
    this.updateProfileImage = this.updateProfileImage.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

    
    /**
     * this function gets the player by its id
     */
    getPlayerById(playerId){
        var player;
        PLAYERS.foreach(p => {
            if(p.playerId == playerId){
                player = p;
            }
        })
        return player;
    }


    /**
     * this function returns the language setting of the user
     * @returns {string} language
     */
    getLanguage(){
        return this.state.language;
    }

    /**
     * this function changes the language setting of the user profile
     * @param {string} lang 
     */
    updateLanguage(lang){
        this.setState({
            language: lang
        });
    }


    /**
     * this function returns the location set by the user
     * @returns {object} location
     */
    getLocation() {
        return this.state.location;
    }

    /**
     * this function updates the user location in their profile
     * @param {string} general 
     * @param {number} lat 
     * @param {number} lng 
     */
    updateLocation(general, lat, lng) {
        this.setState({
            location: {
                "general": general,
                "latitude": lat,
                "longitude": lng
              },
        })
    }

    /**
     * this function removes the location from the user profile
     */
    removeLocation() {
        this.setState({
            location: null
        })
    }

    /**
     * this function sets the Board Game Geek username to the player's account
     * @param {string} username 
     */
    updateBGGname(username) {
        this.setState({
            bggUsername: username
        })
    }

    /**
     * this function removes the Board Game Geek  username from the account
     */
    removeBGGname() {
        this.setState({
            bggUsername: null
        })
    }

    /**
     * this function adds a new follower to the user's followers list
     * @param {number} props 
     */
    updateFollowers(props){
        this.setState((state, props) => {
            followers: [...state.followers, props.playerId]
        }) 
    }


    /**
     * this function adds a new follower to the user's following list
     * @param {number} props 
     */
    updateFollowing(props){
        this.setState((state, props) => {
            following: [...state.following, props.playerId]
        })
    }
    
    /**
     * this function adds a new game to the user's game library
     * @param {number} props 
     */
    addGame2Library(props){
        this.setState((state, props) => {
            library: [...state.library, props.game]
        })
    }

    /**
     * This function removes a game from the player's profile using the game id 
     * @param {number} game id 
     */
    removeGameFromLibary(gameId){
        this.setState({library: this.state.library.filter(function(game) { 
            // return each game that doesn't equal the provided game id 
            return game !== gameId
        })});
    }

    /**
     * this function updates the image on the profile
     * @param {string} imageURL 
     */
    updateProfileImage(imageURL){
        this.setState({
            image: imageURL
        })
    }


    updatePassword(pw){
        //TODO
    }

    login(){
        // TODO
    }

    logout(){
        //TODO
    }

}