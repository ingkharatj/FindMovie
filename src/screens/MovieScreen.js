import React ,{ useState }from 'react';
import {View, Text,TextInput, StyleSheet,ScrollView,Image,Modal,TouchableHighlight} from 'react-native';
import firebase from 'firebase';
import axios from 'axios';
// import { TouchableHighlight } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';

const MovieScreen = () => {
    const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=335bb18e"
    const [state, setState] = useState({
        s: "",
        results:[],
        selected:{}
    });

    const search = () => {
        axios(apiurl+ "&s="+ state.s).then(({data}) =>{
            let results = data.Search
             setState(prevState => {
                return {
                    ...prevState, results:results
                }
            }) 
        })
    }

    const openPopup = id =>{
        axios(apiurl + "&i" + id).then(({ data }) =>{
            let result = data;
            // console.log(result);
            setState(prevState => {
                return {
                    ...prevState, selected: result
                }
            });
        });

    }

    return(
        <View style={styles.backgroundStyle} >

            {/* <View style={{ marginTop : 60, backgroundColor: '#D78686'}}>

            </View> */}
            <Text style ={{fontSize : 35, alignSelf : "center",marginBottom:20,marginTop:20,color:'pink'}}>Let Find Your Movie</Text>

            <TextInput

            style = {styles.search}
            placeholder = "Search movie name"

            onChangeText={text=>setState(prevState =>{
                return{...prevState, s:text}
            })}
            onSubmitEditing={search}
            value = {state.s}

            />
            <Button
            title = 'Search'
            buttonStyle={{
                backgroundColor: "#DA9898",
                marginBottom : 20
                
             }}
            onPress={search}

            />
            <ScrollView style = {styles.results}>
                {state.results.map(result=>(
                    <TouchableHighlight
                    key={result.imdbID}
                    onPress = {()=> openPopup(result.imdbID)}
                    >

                    <View style={styles.result}>
                        <Image
                        source = {{uri : result.Poster}}
                        style= {{
                            width : '100%',
                            height: 250
                        }}
                        resizeMode ="cover"
                         
                        />
                        <Text style={styles.heading}>{result.Title}</Text>
                    </View>
                    </TouchableHighlight>
                    
                ))}

            </ScrollView>
            <Modal
            animationType = "fade" 
            transparent={false} 
            visible={(typeof state.selected.Title !="undefined") ? true:false}

            >
                <View style={styles.popup }>
                    <Text style={styles.poptitle }>{state.selected.Title}</Text>
                    <Text style={{marginBottom:20}}>Rating: {state.selected.imdbRating}</Text>
                    <Text>{state.selected.Plot}</Text>
                </View>
                <TouchableHighlight
                onPress={()=> setState(prevState => {
                    return{...prevState,selected:{}}
                })}>
                    <Text style={styles.closeBtn}>Close</Text>


                </TouchableHighlight>

            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    backgroundStyle : {
        backgroundColor: '#2E2B2A',
        flex: 1,
        justifyContent : 'flex-start',
        alignItems : 'center',
        paddingTop:70,
        paddingHorizontal:20


        
    },
    search : {
        fontWeight : '300',
        fontSize : 20,
        padding : 15,
        width : '80%',
        backgroundColor : 'white',
        borderRadius: 8,
        marginBottom : 40
    },
    results : {
        flex : 1
    },
    result : {
        flex : 1 ,
        width : '85%',
        marginBottom: 40
    },
    heading :{
        color : 'white',
        fontSize : 18 ,
        fontWeight :'700',
        padding : 20,
        backgroundColor : '#C28FB0'
    },
    popup:{

        padding:20,
        backgroundColor : '#908888',
        flex : 1
    },
    poptitle:{
        fontSize:24,
        fontWeight:'700',
        marginBottom:5  ,
        marginTop :50   ,

    },
    closeBtn :{
        padding:20,
        fontSize : 20 ,
        fontWeight:'700',
        backgroundColor:'pink'

    }
    
});

export default MovieScreen;


