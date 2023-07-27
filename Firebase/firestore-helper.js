import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase-setup";

export async function addToDB(entry) {
  try {
    await addDoc(collection(db, "entries"), entry);
  } catch (e) {
    console.log("Error when adding entry: ", e);
  }
}

export async function deleteFromDB(id) {
  try {
    await deleteDoc(doc(db, "entries", id));
  } catch (e) {
    console.log("Error when deleting entry: ", e);
  }
}

export async function markReviewedFromDB(id) {
  try {
    await updateDoc(doc(db, "entries", id), {
      isReviewed: true,
    });
  } catch (e) {
    console.log("Error when marking entry as reviewed: ", e);
  }
}
