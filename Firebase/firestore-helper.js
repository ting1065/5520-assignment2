import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase-setup";

export async function addToDB(entry) {
  try {
    await addDoc(collection(db, "entries"), entry);
  } catch (e) {
    console.log("Error when adding entry: ", e);
  }
}
