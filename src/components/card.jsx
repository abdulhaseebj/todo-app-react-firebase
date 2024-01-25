import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useRef } from 'react';
import { TextField } from '@mui/material';



const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard({ title, deleteTodo, editTodo, index }) {
    // useState
    const [showTodo, setShowTodo] = useState(true)
    // useRef
    const editedValue = useRef()

    function edited(e) {
        e.preventDefault()
        // console.log(editedValue.current.value);
        editTodo(index, editedValue.current.value)
        setShowTodo(true)

    }
    return (
        <Card sx={{ minWidth: 275 }} className='mt-2'>
            {showTodo ?
                <div>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => deleteTodo(index)}>Delete</Button>
                        <Button size="small" onClick={() => setShowTodo(false)} >Edit</Button>
                    </CardActions>
                </div> : <div>
                    <form onSubmit={edited}>
                        <CardContent>
                            <TextField type='text' label="Edit Todo" variant="standard" inputRef={editedValue} required />
                        </CardContent>
                        <CardActions>
                            <Button size="small" type='submit'>save</Button>
                        </CardActions>
                    </form>
                </div>
            }

        </Card>
    );
}