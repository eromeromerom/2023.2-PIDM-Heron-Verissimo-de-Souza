import { useEffect, useState } from "react"
import { View, Text, FlatList } from "react-native"
import estilos from "./14Estilos"



const MyNetworking = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [movies, setMovies] = useState([])

    // dessa forma o useEffect é acionado apenas quando o componente carrega

    useEffect(
        ()=>{
            getMovies()
        },
        []
    )

    const getMovies = () => {
        fetch('https://reactnative.dev/movies.json')
            .then(response => response.json())
            .then(
                // opção 1

                (dadosJason) => {
                    setDescription(dadosJason.description)
                    setTitle(dadosJason.title)
                    setMovies(dadosJason.movies)
                }
                
                // opção 2
                
                // ({title}) => setTitle(title)
                
                
            )
            .catch(error => console.log(error))
    }

    return (
        <View style={estilos.container}>
            <Text >
            Networking 
            </Text>
            Networking

            <Text style={estilos.header}>
                Título: {title}
            </Text>

            <Text style={estilos.description}>
                Descrição: {description}
            </Text>

            <View style = {{flexDirection:"row", backgroundColor:"#089f8f", width: 300, height:500, padding: 10}}>
                <FlatList
                    style={{backgroundColor:"#5600BD"}}
                    data = {movies}
                    renderItem = {
                        ({item}) => {
                            return (
                                <View style={{flex: 1, flexDirection: "row", alignItems: "center", borderRadius: 1, borderWidth: 1, borderColor:"black", justifyContent: "space-between"}}>
                                    <View style={{backgroundColor: "#FF7B00", flex: 1, alignItems:"center", height: "100%", justifyContent:"center"}}>
                                        <Text>
                                            {item.id}
                                        </Text>
                                    </View>
                                    <View style={{backgroundColor: "#00FF2E", flex: 4, paddingLeft:5}}>
                                        <Text>
                                            {item.title}
                                        </Text>
                                        <Text>
                                            {item.releaseYear}
                                        </Text>
                                        
                                    </View>
                                </View>
                            )

                        }
                    }
                
                />


            </View>

        </View>

    )



}

export default MyNetworking