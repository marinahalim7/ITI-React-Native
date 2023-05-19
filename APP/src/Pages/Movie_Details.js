import axios from "axios";
import { React, useEffect, useState } from "react";
import { Text, ScrollView } from "react-native";
import { Card, Button, Icon } from "@rneui/themed";

export default function MovieDetails({ navigation, route }) {
    const id = route.params.id;
    
    const [movie, setMovie] = useState({});
    useEffect(() => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0`
        )
        .then((res) => setMovie(res.data))
        .catch((err) => alert(err));
    }, []);
    //setMoviee(res.data.results)
    return (
      <ScrollView>
        <Card >
          <Card.Title>{movie.title}</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
          />
          <Text style={{ marginBottom: 10 }}>{movie.overview}</Text>
        
        </Card>
      </ScrollView>
    );

}
