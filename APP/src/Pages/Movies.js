import axios from "axios";
import {React, useEffect, useState } from "react";
import { Text, ScrollView, View } from "react-native";
import {  Card, Button } from "@rneui/themed";



export default function Movies({navigation}) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1"
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => alert(err));
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      
        {movies.map((movie, index) => {
          return (
            <Card key={index}>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Divider />
              <Card.Image
                style={{ padding: 0 }}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }}
              />
              <Text style={{ marginBottom: 10 }}>{movie.overview}</Text>
              <Button
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}
                title="Details"
                onPress={() =>
                  navigation.navigate("Movie_Details", { id: movie.id })
                }
              />
            </Card>
          );
        })}
     
    </ScrollView>
  );
}



 