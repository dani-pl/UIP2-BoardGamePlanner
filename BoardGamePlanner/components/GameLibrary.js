import { View, Text, StyleSheet, Image, SafeAreaView, Button, Pressable, FlatList} from 'react-native'
import React , {useEffect, useState}from 'react'
import { globalStyles } from '../styles'
import { FontAwesome } from '@expo/vector-icons';
import { getBGGLibrary } from '../database/Model/GameModel';
import { GAMES } from '../database/games'
import axios from 'axios';

const gameListItem = (game, index) => {
    return (
      <SafeAreaView>
          <View style={cardStyles.mainCardView}>
              <View style={cardStyles.subCardView}>
                  
                  <Image 
                      source={{uri: game.image}}
                      style={{
                          width: 50,
                          height: 50,
                          borderRadius:10}}
                      resizeMode="cover"
                  />
                  <Text 
                      style={[globalStyles.h6, cardStyles.textStyle]} 
                      numberOfLines={2}
                      ellipsizeMode="tail"
                  >{game.name}</Text>
              </View>
              <Pressable style={globalStyles.btnIconSecondary} onPress={()=>console.log("pressed remove")}>
                  <FontAwesome name="remove" />
              </Pressable>
          </View>
      </SafeAreaView>
    )
  };
  
  const cardStyles = StyleSheet.create({
      mainCardView: {
          height: 85,
          width: "90%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 16,
          backgroundColor: '#ffffff',
          shadowColor: "#869392",
          shadowOffset: {width: 0, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 5,
          paddingTop: 5,
          paddingBottom: 5,
          paddingRight: 15,
          paddingLeft: 15,
          marginTop: 6,
          marginBottom: 6,
          marginLeft: 16,
          marginRight: 16,
      },
      subCardView: {
          display: "flex",
          flexDirection: "row",
          justifyContent:'flex-start',
          alignItems: "center",
          
      },
      textStyle: {
          marginLeft: 20,
          width:'57%',
          flexShrink: 1,
      }
  
  })

const GameLibrary = (props) => {

    const DATA = [
        {
            "gameId": 262543,
            "name": "Wavelength",
            "image": "https://cf.geekdo-images.com/z4fbPdmJg_5yphJEvql4ZA__original/img/bP1gM8RC-o5iz20_WazBaBNDHnU=/0x0/filters:format(png)/pic4552862.png",
            "thumbnail": "https://cf.geekdo-images.com/z4fbPdmJg_5yphJEvql4ZA__thumb/img/bxLuHVLF-Y06jWRSKA-tuQ3YYcE=/fit-in/200x150/filters:strip_icc()/pic4552862.png",
          },
          {
            "gameId": 359871,
            "name": "Arcs",
            "image": "https://cf.geekdo-images.com/8dI3TsJIfUqAzIxISBUxrw__original/img/jdZGxQsME2urxQGQ1jPR_F_uydM=/0x0/filters:format(jpeg)/pic6798362.jpg",
            "thumbnail": "https://cf.geekdo-images.com/8dI3TsJIfUqAzIxISBUxrw__thumb/img/wozqWvr1xpdo9n_9ueJ45NWqI4s=/fit-in/200x150/filters:strip_icc()/pic6798362.jpg",
          },
          {
            "gameId": 359438,
            "name": "Skymines",
            "image": "https://cf.geekdo-images.com/loa-OQHFaTlKV2eU_WKVFw__original/img/x7qsiqjs4OLfVfrcvlMDIvyCuDA=/0x0/filters:format(jpeg)/pic6800089.jpg",
            "thumbnail": "https://cf.geekdo-images.com/loa-OQHFaTlKV2eU_WKVFw__thumb/img/Jsvw38z4mMfKZzKCDjiQRe7mJ9k=/fit-in/200x150/filters:strip_icc()/pic6800089.jpg",
          },
          {
            "gameId": 342942,
            "name": "Ark Nova",
            "image": "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__original/img/g4S18szTdrXCdIwVKzMKrZrYAcM=/0x0/filters:format(jpeg)/pic6293412.jpg",
            "thumbnail": "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__thumb/img/4KuHNTWSMPf8vTNDKSRMMI3oOv8=/fit-in/200x150/filters:strip_icc()/pic6293412.jpg",
          },
          {
            "gameId": 84876,
            "name": "The Castles of Burgundy",
            "image": "https://cf.geekdo-images.com/5CFwjd8zTcGYVUnkXh04hw__original/img/N8btACZrnEYK1amBNk26VBdcGwc=/0x0/filters:format(jpeg)/pic1176894.jpg",
            "thumbnail": "https://cf.geekdo-images.com/5CFwjd8zTcGYVUnkXh04hw__thumb/img/0AG_6zsfYQjqlUHG0-_8lcjp8rc=/fit-in/200x150/filters:strip_icc()/pic1176894.jpg",
          },
          {
            "gameId": 258779,
            "name": "Planet Unknown",
            "image": "https://cf.geekdo-images.com/3HkjDovk8Yr2wMumcSUGog__original/img/hl_WEzG4mKaEW_7qrZf-sPxXMpI=/0x0/filters:format(jpeg)/pic4843622.jpg",
            "thumbnail": "https://cf.geekdo-images.com/3HkjDovk8Yr2wMumcSUGog__thumb/img/4pF1oDpvn1VR3rbvW88xLK86xmA=/fit-in/200x150/filters:strip_icc()/pic4843622.jpg",
          },
          {
            "gameId": 348450,
            "name": "Lacrimosa",
            "image": "https://cf.geekdo-images.com/0aS85HPSKKGHGVvWQEEZew__original/img/Ww2bs-arDFMqVhte3VOtmGlq_SQ=/0x0/filters:format(jpeg)/pic6795274.jpg",
            "thumbnail": "https://cf.geekdo-images.com/0aS85HPSKKGHGVvWQEEZew__thumb/img/Vxx4SHednYKXpDMP6eHTK9DqmSc=/fit-in/200x150/filters:strip_icc()/pic6795274.jpg",
          },
          {
            "gameId": 347703,
            "name": "First Rat",
            "image": "https://cf.geekdo-images.com/TAmP5w8gDSXe7APvp8tMVw__original/img/sxlrsxj497dHDrWywWCKOL_senY=/0x0/filters:format(jpeg)/pic6502612.jpg",
            "thumbnail": "https://cf.geekdo-images.com/TAmP5w8gDSXe7APvp8tMVw__thumb/img/Mqb7UZI42-Xyz9yMFu1b-enn0F0=/fit-in/200x150/filters:strip_icc()/pic6502612.jpg",
          },
          {
            "gameId": 295947,
            "name": "Cascadia",
            "image": "https://cf.geekdo-images.com/MjeJZfulbsM1DSV3DrGJYA__original/img/B374C04Eip7fmQBGJzgiOTp-jyQ=/0x0/filters:format(jpeg)/pic5100691.jpg",
            "thumbnail": "https://cf.geekdo-images.com/MjeJZfulbsM1DSV3DrGJYA__thumb/img/tVSFjSxYEcw7sKj3unIIQV8kxoc=/fit-in/200x150/filters:strip_icc()/pic5100691.jpg",
          },
          {
            "gameId": 237182,
            "name": "Root",
            "image": "https://cf.geekdo-images.com/JUAUWaVUzeBgzirhZNmHHw__original/img/E0s2LvtFA1L5YKk-_44D4u2VD2s=/0x0/filters:format(jpeg)/pic4254509.jpg",
            "thumbnail": "https://cf.geekdo-images.com/JUAUWaVUzeBgzirhZNmHHw__thumb/img/ACovMZzGGIsBRyEQXFnsT8282NM=/fit-in/200x150/filters:strip_icc()/pic4254509.jpg",
          },
          {
            "gameId": 312484,
            "name": "Lost Ruins of Arnak",
            "image": "https://cf.geekdo-images.com/6GqH14TJJhza86BX5HCLEQ__original/img/CXqwimJPonWy1oyXEMgPN_ZVmUI=/0x0/filters:format(jpeg)/pic5674958.jpg",
            "thumbnail": "https://cf.geekdo-images.com/6GqH14TJJhza86BX5HCLEQ__thumb/img/J8SVmGOJXZGxNjkT3xYNQU7Haxg=/fit-in/200x150/filters:strip_icc()/pic5674958.jpg",
          },
          {
            "gameId": 266192,
            "name": "Wingspan",
            "image": "https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__original/img/cI782Zis9cT66j2MjSHKJGnFPNw=/0x0/filters:format(jpeg)/pic4458123.jpg",
            "thumbnail": "https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__thumb/img/VNToqgS2-pOGU6MuvIkMPKn_y-s=/fit-in/200x150/filters:strip_icc()/pic4458123.jpg",
          },
          {
            "gameId": 256997,
            "name": "Perseverance: Castaway Chronicles – Episodes 1 & 2",
            "image": "https://cf.geekdo-images.com/CH7U514WgN1EMGFYN63KsQ__original/img/avH1CKrpAYOIO7Kcu0C5Kk_dgVE=/0x0/filters:format(jpeg)/pic5440227.jpg",
            "thumbnail": "https://cf.geekdo-images.com/CH7U514WgN1EMGFYN63KsQ__thumb/img/dozFHWuJhtY-cK5mmMHMwJLth7w=/fit-in/200x150/filters:strip_icc()/pic5440227.jpg",
          },
          {
            "gameId": 230802,
            "name": "Azul",
            "image": "https://cf.geekdo-images.com/tz19PfklMdAdjxV9WArraA__original/img/eFRt3o7W6YltnrkqpiSOKr2rKCw=/0x0/filters:format(jpeg)/pic3718275.jpg",
            "thumbnail": "https://cf.geekdo-images.com/tz19PfklMdAdjxV9WArraA__thumb/img/debo694HgBaIBeNGyxu1ELUbQGA=/fit-in/200x150/filters:strip_icc()/pic3718275.jpg",
          },
          {
            "gameId": 233078,
            "name": "Twilight Imperium: Fourth Edition",
            "image": "https://cf.geekdo-images.com/_Ppn5lssO5OaildSE-FgFA__original/img/kVpZ0Maa_LeQGWxOqsYKP3N4KUY=/0x0/filters:format(jpeg)/pic3727516.jpg",
            "thumbnail": "https://cf.geekdo-images.com/_Ppn5lssO5OaildSE-FgFA__thumb/img/lfEukJE0JsoZZObaF9K9YnFp62E=/fit-in/200x150/filters:strip_icc()/pic3727516.jpg",
          },
          {
            "gameId": 326494,
            "name": "The Adventures of Robin Hood",
            "image": "https://cf.geekdo-images.com/QOCGlQyx_HU0nG1oRpeGVg__original/img/a40j-7veyRu5TOG3cr-BjF9Y9aA=/0x0/filters:format(jpeg)/pic6220819.jpg",
            "thumbnail": "https://cf.geekdo-images.com/QOCGlQyx_HU0nG1oRpeGVg__thumb/img/EQ1AGM0CcltWvTHR6Qcy-H7qGNo=/fit-in/200x150/filters:strip_icc()/pic6220819.jpg",
          },
          {
            "gameId": 246900,
            "name": "Eclipse: Second Dawn for the Galaxy",
            "image": "https://cf.geekdo-images.com/Oh3kHw6lweg6ru71Q16h2Q__original/img/yW7d4RNfU1ndISCaPlfGYUyxnRU=/0x0/filters:format(jpeg)/pic5235277.jpg",
            "thumbnail": "https://cf.geekdo-images.com/Oh3kHw6lweg6ru71Q16h2Q__thumb/img/e9XZdQe1ZcPpaq4Gy31OoWBB_V0=/fit-in/200x150/filters:strip_icc()/pic5235277.jpg",
          },
          {
            "gameId": 193738,
            "name": "Great Western Trail",
            "image": "https://cf.geekdo-images.com/u1l0gH7sb_vnvDvoO_QHqA__original/img/2zv_XMQoPFWk9Dn0oS4JY1IeFzw=/0x0/filters:format(jpeg)/pic4887376.jpg",
            "thumbnail": "https://cf.geekdo-images.com/u1l0gH7sb_vnvDvoO_QHqA__thumb/img/9lxFidyDb8j6D1vobx4e3UwZ-FI=/fit-in/200x150/filters:strip_icc()/pic4887376.jpg",
          },
          {
            "gameId": 359999,
            "name": "Agricola 15",
            "image": "https://cf.geekdo-images.com/h1dXXGGcCjaGdCip6Q_oGQ__original/img/i1YgkDzscW9y8S0MBpqIWmCmFMc=/0x0/filters:format(jpeg)/pic6786604.jpg",
            "thumbnail": "https://cf.geekdo-images.com/h1dXXGGcCjaGdCip6Q_oGQ__thumb/img/Tcfd0f9j-ntqr-5JHlpSPsgpkI4=/fit-in/200x150/filters:strip_icc()/pic6786604.jpg",
          },
          {
            "gameId": 300217,
            "name": "Merchants of the Dark Road",
            "image": "https://cf.geekdo-images.com/m0097WIpBdC7tdA-mVi5Fw__original/img/bd3RYiimI4iWs2w1u27_2w4ImOI=/0x0/filters:format(png)/pic5252479.png",
            "thumbnail": "https://cf.geekdo-images.com/m0097WIpBdC7tdA-mVi5Fw__thumb/img/vGQx16-veWt64dxdrQA8w2VlsHA=/fit-in/200x150/filters:strip_icc()/pic5252479.png",
          },
          {
            "gameId": 183394,
            "name": "Viticulture Essential Edition",
            "image": "https://cf.geekdo-images.com/l_PRU2lVlX9seScRFcvFlA__original/img/gDL7OZFlzoOFgU0VYlREs8P5hCQ=/0x0/filters:format(jpeg)/pic6500949.jpg",
            "thumbnail": "https://cf.geekdo-images.com/l_PRU2lVlX9seScRFcvFlA__thumb/img/pULDtVd75QZgGfvSMhr6Rs07vK8=/fit-in/200x150/filters:strip_icc()/pic6500949.jpg",
          },
          {
            "gameId": 359402,
            "name": "Ahoy",
            "image": "https://cf.geekdo-images.com/Koj_Ff-smQdf2RXn6TtkEQ__original/img/CG4opKoAQ872OV5Y4am-HipqeEw=/0x0/filters:format(jpeg)/pic6765636.jpg",
            "thumbnail": "https://cf.geekdo-images.com/Koj_Ff-smQdf2RXn6TtkEQ__thumb/img/J-BbEX5uHr4BWXerFHnuPc7HQUQ=/fit-in/200x150/filters:strip_icc()/pic6765636.jpg",
          },
          {
            "gameId": 256960,
            "name": "Pax Pamir: Second Edition",
            "image": "https://cf.geekdo-images.com/oSM_AuKYfGIwOtKbVEsoVg__original/img/7DlaMCmuoJzm9AzelmStYIDgutI=/0x0/filters:format(png)/pic4503733.png",
            "thumbnail": "https://cf.geekdo-images.com/oSM_AuKYfGIwOtKbVEsoVg__thumb/img/NyoufH5YBFCh1rKy4uy76bR4ITk=/fit-in/200x150/filters:strip_icc()/pic4503733.png",
          },
          {
            "gameId": 295374,
            "name": "Long Shot: The Dice Game",
            "image": "https://cf.geekdo-images.com/j9RO81ihYw0_oPj6iqV_bA__original/img/-jPNsFg5d9uA7D4WGDIP3TNLHX4=/0x0/filters:format(jpeg)/pic6682376.jpg",
            "thumbnail": "https://cf.geekdo-images.com/j9RO81ihYw0_oPj6iqV_bA__thumb/img/iRomFjZ0oELmm1pBVtJrNwyl4nc=/fit-in/200x150/filters:strip_icc()/pic6682376.jpg",
          },
          {
            "gameId": 328871,
            "name": "Terraforming Mars: Ares Expedition",
            "image": "https://cf.geekdo-images.com/eT_Atcy_vRJvuUMgYakNrQ__original/img/upZwrb6k8zZMNTwB8VfpI372yuo=/0x0/filters:format(jpeg)/pic6260098.jpg",
            "thumbnail": "https://cf.geekdo-images.com/eT_Atcy_vRJvuUMgYakNrQ__thumb/img/YxoNRQg9owsoi68POaMY0Ix31ZI=/fit-in/200x150/filters:strip_icc()/pic6260098.jpg",
          },
          {
            "gameId": 354768,
            "name": "The Dark Quarter",
            "image": "https://cf.geekdo-images.com/NylXvHV5B2iOeYQQkzD8Dg__original/img/RhqkK6egwkWwL2OgWdRSf7QZq0M=/0x0/filters:format(png)/pic6625010.png",
            "thumbnail": "https://cf.geekdo-images.com/NylXvHV5B2iOeYQQkzD8Dg__thumb/img/5nw2TWltGsY6o_TKdaM8AL9niOs=/fit-in/200x150/filters:strip_icc()/pic6625010.png",
          },
          {
            "gameId": 13,
            "name": "Catan",
            "image": "https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__original/img/xV7oisd3RQ8R-k18cdWAYthHXsA=/0x0/filters:format(jpeg)/pic2419375.jpg",
            "thumbnail": "https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__thumb/img/8a9HeqFydO7Uun_le9bXWPnidcA=/fit-in/200x150/filters:strip_icc()/pic2419375.jpg",
          },
          {
            "gameId": 822,
            "name": "Carcassonne",
            "image": "https://cf.geekdo-images.com/okM0dq_bEXnbyQTOvHfwRA__original/img/aVZEXAI-cUtuunNfPhjeHlS4fwQ=/0x0/filters:format(png)/pic6544250.png",
            "thumbnail": "https://cf.geekdo-images.com/okM0dq_bEXnbyQTOvHfwRA__thumb/img/88274KiOg94wziybVHyW8AeOiXg=/fit-in/200x150/filters:strip_icc()/pic6544250.png",
          },
          {
            "gameId": 223,
            "name": "Expedition",
            "image": "https://cf.geekdo-images.com/gd2nfepLFiR5VXQzNu6Gig__original/img/7x6ZzpKXdRuEr0YQqV1r0n8Kp0k=/0x0/filters:format(jpeg)/pic97042.jpg",
            "thumbnail": "https://cf.geekdo-images.com/gd2nfepLFiR5VXQzNu6Gig__thumb/img/IReL59eUQ09OgWZgvYFA83QU8DI=/fit-in/200x150/filters:strip_icc()/pic97042.jpg",
          },
    ]

    var [bggData, setBggData] = useState([]);

    // // all skills
    // var [skills,setSkills] = useState([]);
    const BGGid = "trisroyal";
    // console.log(skills, props);
// axios setup
    const source = axios.CancelToken.source();
    const BGGURL = `https://bgg-json.azurewebsites.net/collection/${BGGid}?grouped=true`;
    
    useEffect(()=>{
        try {
            axios.get(BGGURL).then((res) => {
            // if the status is OK
            if( res.status === 200) {
                // get the response data and for each game object push the id to the the 'gameLibrary' array
                // const BGG_Library = res.data;
                setBggData(res.data)
                // console.log(BGG_Library)
                // for (let index = 0; index < BGG_Library.length; index++) {
                //     const game = BGG_Library[index];
                //     console.log(game.name)
                //     setBggData({
                //         "gameId": game.gameId,
                //         "name": game.name,
                //         "image": game.image,
                //         "thumbnail":game.thumbnails
                //     })
                // }
                console.log(bggData)
                }
                else {
                    // in all other cases throw an error
                    throw new Error("Failed to fetch games from BGG: ");
                }
            }).catch((error) => {
                console.log(error)
            });
            
        } catch (error) { 
            if(axios.isCancel(error)){
                console.log('data fetching was cancelled');
            } else {
                console.log(error)
            }
        }
    },[])

    // const BGGDATA = ;

    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={globalStyles.h1}>BGG Library {BGGid} </Text>
            <Text style={globalStyles.subtitle1}>{bggData.length} Games </Text>
            <FlatList 
                data={bggData}
                keyExtractor={(game, index) => index}
                renderItem={({item, index}) => 
                    gameListItem(item,index)}
            />
        </SafeAreaView>
    );
}

export {GameLibrary}