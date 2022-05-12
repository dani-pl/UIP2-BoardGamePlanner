export default class EventModel {

    constructor(props) {
      super(props)
    
      this.state = { 
          eventId: null,
          title: null,
          startDate: null,
          endDate: null,
          duration: null,
          games: [],
          privacy: null,
          hostId: null,
          coHostId: null,
          attendees: [],
          InvetedPeople: [],
          location: null,
          playerLimit: null,
          joined: null,
          comments: [],
      }
  
      this.getEventById = this.getEventById.bind(this);
      this.getTitle = this.getTitle.bind(this);
      this.updateTitle = this.updateTitle.bind(this);
      this.getStartDate = this.updateStartDate.bind(this);
      this.getRepeatSchedule = this.updateRepeatSchedule.bind(this);
      this.updateRepeatSchedule = this.updateRepeatSchedule.bind(this);
      this.getEndDate = this.getEndDate.bind(this);
      this.updateEndDate = this.updateEndDate.bind(this);
      this.getDuration = this.getDuration.bind(this);
      this.updateDuration = this.updateDuration.bind(this);
      this.getGamesOfEvent = this.getGamesOfEvent.bind(this);
      this.updateGamesOfEvent = this.updateGamesOfEvent.bind(this);
      this.getPrivacy = this.getPrivacy.bind(this);
      this.updatePrivacy = this.updatePrivacy.bind(this);
      this.getHostId = this.getHostId.bind(this);
      this.updateHostId = this.updateHostId.bind(this);
      this.getCoHostId = this.getCoHostId.bind(this);
      this.updateCoHostId = this.updateCoHostId.bind(this);
      this.getListOfAttendees = this.getListOfAttendees.bind(this);
      this.updateListOfAteendees = this.updateListOfAteendees.bind(this);
      this.getListOfInvetedPeople = this.getListOfInvetedPeople.bind(this);
      this.updateListOfInvetedPeople = this.updateListOfInvetedPeople.bind(this);
      this.getLocation = this.getLocation.bind(this);
      this.updateLocation = this.updateLocation.bind(this);
      this.getPlayerLimit = this.getPlayerLimit.bind(this);
      this.updatePlayerLimit = this.updatePlayerLimit.bind(this);
      this.getJoined = this.getJoined.bind(this);
      this.updateJoined = this.updateJoined.bind(this);
      this.getComments = this.getComments.bind(this);
      this.updateComments = this.updateComments.bind(this);
    }

    /**
     * This function gets all the information of a event by id
     * @param {int} eventId 
     * @returns {object} event
     */

    getEventById = (eventId) => {
    var event;
    EVENTS.forEach(e => {
        if(e.eventId == eventId){
            event = e;
        }
    });
    return event;
    }

    /**
     * This function returns the title from an Event
     * @returns {str} title
     */
    getTitle(){
        return this.state.title;
    }

    /**
     * This function updates the title from an Event
     * @param {str} newTitle
     */
     updateTitle(newTitle){
        this.setTitle({
            title: newTitle
        });
    }

    /**
     * This function returns the startDate from an Event
     * @returns {str} startDate
     */
     getStartDate(){
        return this.state.startDate;
    }

    /**
     * This function updates the startDate from an Event
     * @param {int} newTitle 
     */
     updateStartDate(newStartDate){
        this.setStartDate({
            startDate: newStartDate
        });
    }


    /**
     * This function returns the repeatSchedule from an Event
     * @returns {str} repeatSchedule
     */
     getRepeatSchedule(){
        return this.state.repeatSchedule;
    }

    /**
     * This function updates the repeatSchedule from an Event
     * @param {int} newRepeatSchedule 
     */
     updateRepeatSchedule(newRepeatSchedule){
        this.setRepeatSchedule({
            repeatSchedule: newRepeatSchedule
        });
    }

    /**
     * This function returns the endDate from an Event
     * @returns {str} endDate
     */
     getEndDate(){
        return this.state.endDate;
    }

    /**
     * This function updates the endDate from an Event
     * @param {int} newEndDate 
     */
     updateEndDate(newEndDate){
        this.setEndDate({
            endDate: newEndDate
        });
    }

    /**
     * This function returns the duration from an Event
     * @returns {str} duration
     */
     getDuration(){
        return this.state.duration;
    }

    /**
     * This function updates the duration from an Event
     * @param {str} newDuration 
     */
     updateDuration(newDuration){
        this.setDuration({
            duration: newDuration
        });
    }


    /**
     * This function returns the games from an Event
     * @returns {list<Game>} games
     */
     getGamesOfEvent(){
        return this.state.games;
    }

    /**
     * This function updates the games from an Event
     * @param {list<Game>} newGames 
     */
     updateGames(newGames){
        this.setDuration({
            games: newGames
        });
    }

    /**
     * This function returns the privacy from an Event
     * @returns {boolean} privacy
     */
     getPrivacy(){
        return this.state.privacy;
    }

    /**
     * This function updates the privacy from an Event
     * @param {boolean} newPrivacy 
     */
     updatePrivacy(newPrivacy){
        this.setPrivacy({
            privacy: newPrivacy
        });
    }

    /**
     * This function returns the hostId from an Event
     * @returns {int} hostId
     */
     getHostId(){
        return this.state.hostId;
    }

    /**
     * This function updates the hostId from an Event
     * @param {int} newHostId
     */
     updateHostId(newHostId){
        this.setHostId({
            hostId: newHostId
        });
    }


    /**
     * This function returns the coHostId from an Event
     * @returns {int} coHostId
     */
     getCoHostId(){
        return this.state.coHostId;
    }

    /**
     * This function updates the coHostId from an Event
     * @param {int} newCoHostId
     */
     updateCoHostId(newCoHostId){
        this.setCoHostId({
            coHostId: newCoHostId
        });
    }

    /**
     * This function returns the coHostId from an Event
     * @returns {int} coHostId
     */
     getCoHostId(){
        return this.state.coHostId;
    }

    /**
     * This function updates the coHostId from an Event
     * @param {int} newCoHostId
     */
     updateCoHostId(newCoHostId){
        this.setCoHostId({
            coHostId: newCoHostId
        });
    }



    /**
     * This function returns the listOfAtendees from an Event
     * @returns {list} listOfAtendees
     */
     getListOfAttendees(){
        return this.state.listOfAtendees;
    }

    /**
     * This function updates the listOfAtendees from an Event
     * @param {list} listOfAtendees
     */
     updateListOfAteendees(newListOfAtendees){
        this.setListOfAtendees({
            listOfAtendees: newListOfAtendees
        });
    }


    /**
     * This function returns the listOfInvetedPeople from an Event
     * @returns {list} listOfInvetedPeople
     */
     getListOfInvetedPeople(){
        return this.state.listOfInvetedPeople;
    }

    /**
     * This function updates the listOfInvetedPeople from an Event
     * @param {list} listOfInvetedPeople
     */
     updateListOfInvetedPeople(newListOfInvetedPeople){
        this.setListOfInvetedPeople({
            listOfInvetedPeople: newListOfInvetedPeople
        });
    }


    /**
     * This function returns the location from an Event
     * @returns {object} location
     */
     getLocation(){
        return this.state.location;
    }

    /**
     * this function updates the Event location
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
     * This function returns the playerLimit from an Event
     * @returns {int}
     */
     getPlayerLimit(){
        return this.state.playerLimit;
    }

    /**
     * this function updates the Event location
     * @param {int} newPlayerLimit 
     */
     updatePlayerLimit(newPlayerLimit) {
        this.setPlayerLimit({
            playerLimit: newPlayerLimit
        });
    }

    /**
     * This function returns the Joined status from an Event
     * @returns {boolean} joined
     */
     getJoined(){
        return this.state.joined;
    }

    /**
     * this function updates the Joined status
     * @param {boolean} newJoined 
     */
     updateJoined(newJoined) {
        this.setJoined({
            joined: newJoined
        });
    }

    /**
     * This function returns the Comments from an Event
     * @returns {object} comments
     */
     getComments(){
        return this.state.comments;
    }

    /**
     * this function updates the Comments
     * @param {object} newComments 
     */
     updateComments(newComments) {
        this.setComments({
            comments: newComments
        });
    }
    

}
