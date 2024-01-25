import React, { useEffect, useRef, useState } from 'react'
import { TextField, Button, Box, CircularProgress, Typography } from '@mui/material'
import BasicCard from '../../components/card'
import { collection, addDoc, updateDoc, getDocs } from "firebase/firestore";
import { db } from '../../config/firebaseconfig/Firebaseconfig';
import { doc, deleteDoc } from "firebase/firestore";



function Home() {
  // useref
  const todo = useRef()
  // usestate
  const [data, setData] = useState([])
  // useEffect
  useEffect(() => {
    async function getDataFromFirestore() {
      const querySnapshot = await getDocs(collection(db, "todo"));
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        const obj = {
          docId: doc.id,
          ...doc.data()
        }
        // console.log(obj);
        data.push(obj)
        setData([...data])
      });

    }
    getDataFromFirestore()
  }, [])

  async function addTodo(e) {
    e.preventDefault()
    setData([...data, {
      todo: todo.current.value
    }]);
    try {
      const docRef = await addDoc(collection(db, "todo"), {
        todo: todo.current.value
      });
      console.log("Document written with ID: ", docRef.id);
      todo.current.value = '';
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const deleteTodo = async (index) => {
    console.log('delete', index);
    // await deleteDoc(doc(db, "todo", data[index].docId));
    data.splice(index, 1)
    setData([...data])

  }

  const editTodo = async (index, value) => {
    // console.log(`todo insex${index} and value is${value}`);
    // const updatedTodo = doc(db, "todo", data[index].docId);
    // updateDoc(updatedTodo, {
    //   todo: value
    // }).then(() => {
    //   data.splice(index, 1, {
    //     todo: value
    //   })
    //   setData([...data]);
    // })
    
    data.splice(index, 1, {
      todo: value
    })
    setData([...data]);
  }


  return (



    <Box sx={{ height: '80vh' }} className='d-flex justify-content-center align-item-center'>
      <form onSubmit={addTodo} className='d-flex justify-content-center flex-column w-25 gap-5'>
        <TextField type='text' label="Todo" inputRef={todo} variant="standard" required />
        <Button type='submit' variant="contained">Add Todo</Button>
      </form>
      <Box>
        {data.length > 0 ? data.map((item, index) => {
          return <BasicCard key={index} title={item.todo} deleteTodo={deleteTodo} editTodo={editTodo} index={index} />
        }) : <Typography variant="h5" color="initial">No item found</Typography>}
      </Box>
    </Box>


  )
}

export default Home