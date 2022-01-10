import firebase from "./firebase";
import { useState,useEffect } from "react";
import { getDatabase,ref,push,set, onValue,query, remove, child, update } from "firebase/database"
import { successNote } from "./customTostify";

export const addInfo=(info)=>{
    const db=getDatabase();
    const userRef=ref(db,"contact")
    const newUserRef=push(userRef)
    set(newUserRef,{
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender
    })
    successNote("Added successfully")
}
export const useFetch=()=>{
    const [contactList, setContactList] = useState();
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{
      setIsLoading(true)
      const db = getDatabase();
      const userRef = ref(db, 'contact');
      onValue(query(userRef), snapshot => {
        const contacts=snapshot.val()
        // send an array of the valuers in database
        // console.log(snapshot.val())
        const contactArray = [];
        for (let id in contacts) {
          contactArray.push({ id, ...contacts[id] });
        }
        setContactList(contactArray);
        setIsLoading(false)
      })
    },[]);
    return {isLoading,contactList};
}

//!-----------------------------------
//* -----------DELETE DATA ------------
//!-----------------------------------
export const deleteInfo = id => {
  // console.log(id);
  const db = getDatabase();
  remove(ref(db, 'contact/' + id));
  successNote('Successfully deleted!');
};
//!--------------------------------
//*---------UPDATE DATA -----------
//!--------------------------------
export const updateInfo = (id, username, phoneNumber, gender) => {
  const db = getDatabase();
  const infoData = {
    username: username,
    phoneNumber: phoneNumber,
    gender: gender
  };
  const updates = {};
  updates['contact/' + id] = infoData;
  update(ref(db), updates);
  successNote('Updated');
};

// export const deleteInfo=(id)=>{
//     const db = getDatabase();
//       //const userRef = ref(db, 'contact');
//       remove(ref(db, "contact/"+ id))
// }

// export const updateInfo = (info)=>{
//   const db = getDatabase()
//   const newUserKey=push(child(ref(db), "contact/")).key;
//   const updates = {};
//   updates["contact/"+newUserKey]=info;
//   return update(ref(db), updates)
// }
