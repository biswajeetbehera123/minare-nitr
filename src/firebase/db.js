import { getDatabase, ref, push, onValue,  } from "firebase/database";
import { firebaseApp } from "../firebase/config";

export const db = getDatabase(firebaseApp);

export const accomodationRegistration = async (data) => {
  // console.log(db, data)
  try {
    const userDataRef = ref(db, "AccomodationRegistration");
    await push(userDataRef, data).then((snapshot) => {
      // console.log("Accom User data saved with ID: ", snapshot.key);
    });
    // console.log("accomodation registration successful!");
  } catch (error) {
    console.error("Error registering accomodation:", error);
  }
};

export const normalRegistration = async (data) => {
  // console.log(db, data)
  try {
    const userDataRef = ref(db, "NormalRegistration");
    await push(userDataRef, data).then((snapshot) => {
      // console.log("MormalUser data saved with ID: ", snapshot.key);
    });
    // console.log("accomodation registration successful!");
  } catch (error) {
    console.error("Error registering normal:", error);
  }
};

export const getAccomodationData = async (callback) => {
  const userDataRef = ref(db, "AccomodationRegistration");
  onValue(userDataRef, (snapshot) => {
    // console.log(snapshot.val())
    const data = snapshot.val();
    if (typeof callback === 'function') {
      callback(data);
    }
    // convert the data to array
    // console.log("data in array", Object.values(data));
    return Object.values(data);
  }, {
    onlyOnce: true // Read data only once
  });
  
};

export const getNormalData = async (callback) => {
  const userDataRef = ref(db, "NormalRegistration");
  onValue(userDataRef, (snapshot) => {
    const data = snapshot.val();
    if (typeof callback === 'function') {
      callback(data);
    }
  }, {
    onlyOnce: true // Read data only once
  });
};
