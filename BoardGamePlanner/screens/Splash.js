import React, { Component } from 'react';
import { View, Text, SafeAreaView, Animated} from 'react-native';
import SpriteSheet from 'rn-sprite-sheet';
import { backgroundColor, globalStyles, } from '../styles';
import Images from '../assets/Images';
import { withTranslation } from 'react-i18next';

class Splash extends Component {
    

    constructor(){
        super()
        
        this.state = {
            loop: false,
            resetAfterFinish: false,
            fps: 10,
            animation: new Animated.Value(0),
            textIdx:-1
        }
    }
    

    componentDidMount = () => {
        // start the text animation 
        this.animateText()

        // start the rolling dice animation
        this.roll('roll4to3')

        // after 5.1 sec stop the rolling dice animation
        // setTimeout(()=>{
        //     this.stop()
        // },5100)
    }

    componentWillUnmount() {
        // make sure to clear and reset the interval when moving to the Event screen
        clearInterval(this.timeout);
        this.stop()
    }

    /**
     * This function animates the text. 
     * changes the current text after set interval
     * fades in and out the loading text
     */
    animateText = () => {
        // set interval for each time the text needs to change
        
        this.timeout = setInterval(() => {
            let current = this.state.textIdx;
            // fade text in
            this.fadeIn()
            // change the current text index
            this.setState({ textIdx: current + 1 });
            // fade out the text after 1s
            setTimeout(()=>{
                this.fadeOut()
            },1000)
          },1500);
    }

    /**
     * This function defines the fade in animation used for the loading text on the splash screen
     */
    fadeIn = () => {
        // here we define our animation for fading in the text
        // we use the animated value that was set before 
        Animated.timing(this.state.animation, {
            // we set the value to 1 meaning no transparency
            toValue: 1,
            // it should take 0.3 seconds
            duration: 300,
            // we use the native driver 
            useNativeDriver: true
        }).start();
    }

    /**
     * This function defines the fade out animation used for the loading text on the splash screen
     */
    fadeOut = () => {
        // here we define our animation for fading out the text
        // we use the animated value that was set before 
        Animated.timing(this.state.animation, {
            // we set the value to o meaning full transparency
            toValue: 0,
            // it should take 0.3 seconds
            duration: 300,
            // use native driver
            useNativeDriver: true
        }).start();
    }
    
    /**
     * This function starts the rolling dice animation used on the splash screen
     */
    roll = (type) => {
        // take the preset animation settings
        const { loop, resetAfterFinish, fps } = this.state;

        // start the dice animation
        this.dice.play({
            type,
            fps: fps,
            loop: loop,
            resetAfterFinish: resetAfterFinish,
            onFinish: () => console.log('animation started')
        })
    }
    
    /**
     * This function stops the rolling dice animation on the splash screen
     */
    stop = () => {
        this.dice.stop(() => console.log("animation stopped"))
    }

    render(){
        // initialize the translation 
        const { t } = this.props;

        // get the current textArray based on the user's locale
        // since we start with -1 we +1 for the first text 
        let changingText = t(`common:loadingText.${(this.state.textIdx < 0 ? this.state.textIdx + 1 : this.state.textIdx) % 3}.text`)
        
        // let changingText = this.state.loadingText[(this.state.textIdx < 0 ? this.state.textIdx + 1 : this.state.textIdx) % this.state.loadingText.length]
        return (
            <SafeAreaView style={{backgroundColor: backgroundColor,flex:1}}>
                <View style={[globalStyles.container,{justifyContent:'center',alignItems:'center'}]}>
                    {/* here we define our spritesheet */}
                    <SpriteSheet 
                        ref={ref => (this.dice = ref)}
                        source={Images.splashSprite}
                        columns={16}
                        rows={9}
                        width={75}
                        imageStyle={{ marginTop: -1 }}
                        animations={{ // define animation based on index on spritesheet
                            roll4to3: Array.from({length: 111}, (v, i) => i + 18), // to roll from 4 to 3 we take all the images starting from the 18th index
                        }}
                    />
                    <Animated.Text style={[globalStyles.subtitle1,{ opacity:this.state.animation, marginTop:20}]}>
                        {changingText}
                    </Animated.Text>
                </View>
            </SafeAreaView>
        )
    }
}
// since we deal with class component we need to export it with translation in order to get the loading text in the language of the user's locale
export default withTranslation('common')(Splash);