import { db } from "../../constants/firebaseConfig"
import { ref, update } from "firebase/database";
import { v4 as uuid } from "uuid";

export const addUserDataToDB = async (userData) => {
    console.log("Mtanq add");
    const id = uuid();

    const userInfo = {
        id,
        ...userData,
    };

    const dbRef = ref(db, `users/${id}`);

    try {
        await update(dbRef, userInfo);
        return true;
    } catch(err) {
      console.error(err);
      return false
    }
};