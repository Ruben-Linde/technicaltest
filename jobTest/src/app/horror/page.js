"use client";
import { Carrousel } from "@/components/Carrousel";
import { useEffect, useState } from "react";


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWU5ODlkNmFhNWE3ZDg5NmY3OGU0ODg4ZmJlZDFkMSIsIm5iZiI6MTcyMDExNTU1MC4yMDAyNjUsInN1YiI6IjY2ODZlMDY5ODUzOGYwZTViNjVkMmU1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y4HW9N0G94-DQSggIgFUNsDvTI4A7Ge0ijC_bxYM-OY'
    }
};

export default function Home() {
    const [items, setItems] = useState([])

    const getItems = async () => {
        let items = []
        for (let i = 1; i <= 10; i++) {
            const apiUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${i}&sort_by=popularity.desc&with_genres=27`
            try {
                const response = await fetch(apiUrl, options);
                const item = await response.json();
                items.push(item)
            } catch (error) {
                console.log(error);
            }
        }
        console.log(items)
        setItems(items)
    };

    useEffect(() => {
        getItems()
    }, [])

    return (<>
        {items.map((item) => {
            return <Carrousel key={item.page} items={item} />
        })}
    </>);
}

