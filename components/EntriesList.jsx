import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import EntryInList from "./EntryInList";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../Firebase/firebase-setup";

export default function EntriesList({ isOverLimitOnly }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const q = isOverLimitOnly
      ? query(
          collection(db, "entries"),
          where("isOverLimit", "==", true),
          where("isReviewed", "==", false)
        )
      : query(collection(db, "entries"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (!querySnapshot.empty) {
        const entriesFromDB = querySnapshot.docs.map((entry) => {
          return { ...entry.data(), id: entry.id };
        });
        setEntries(entriesFromDB);
      } else {
        setEntries([]);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <FlatList
      data={entries}
      renderItem={({ item }) => <EntryInList entry={item} />}
    />
  );
}