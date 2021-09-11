import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link , useHistory } from 'react-router-dom';
import './UserInputTable.css';


// import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
function UserInputTable(props) {
    // const [row1 , setRow1] = useState([])
    const [name  , setName] = useState('');
    const [username  , setUserName] = useState('');
    const [email  , setEmail] = useState('');
    const [phone  , setPhone] = useState('');
    const [website  , setWebsite] = useState('');
    const history = useHistory();
    const classes = useStyles();

    return (
        <div >
            <form className={`form-container ${classes.root}`} noValidate autoComplete="off" onSubmit={(e)=>{
                e.preventDefault();
                props.addElements(name,username,email,phone,website)
                setName("");
                setUserName("");
                setEmail("");
                setPhone("");
                setWebsite("");
                history.push("/");

                }}>
                 <div className="field_box">   
                <label className='labeled_value'> Enter Name:</label>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" value={name} onChange={(e)=> setName(e.target.value)} /> 
                </div>
                <div className="field_box"> 
                <label  className='labeled_value'> Enter User: </label>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" value={username} onChange={(e)=> setUserName(e.target.value)} /> 
                </div>
                <div className="field_box"> 
                <label  className='labeled_value'> Enter Email : </label>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" value={email} onChange={(e)=> setEmail(e.target.value)} /> 
                </div>
                <div className="field_box"> 
                <label className='labeled_value'> Enter Phone : </label>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" value={phone} onChange={(e)=>setPhone(e.target.value)} /> 
                </div>
                <div className="field_box"> 
                <label className='labeled_value'> Enter Website: </label>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" value={website} onChange={(e)=>setWebsite(e.target.value)} /> 
                </div> 
                <input className="btn1_btn"  type="submit" value="Submit" />
                <Link to='/'>
                    <button className="btn1_btn">  Back</button>
                </Link>
            </form>
            
        </div>
    )
}

export default UserInputTable
