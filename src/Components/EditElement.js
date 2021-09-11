import React,{useState , useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Link, useParams, useHistory} from 'react-router-dom';
import './UserInputTable.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));



function EditElement(props) {
const history = useHistory();
const [rowValue , setRowValue] = useState({});
const [newName , setnewName] = useState();
const [newUsername , setnewUsername] = useState();
const [newEmail , setnewEmail] = useState();
const [newPhone , setnewPhone] = useState();
const [newWebsite , setnewWebsite] = useState();
const classes = useStyles();
const {id} = useParams();

    useEffect(() => { fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((response) => response.json())
  .then((json) => {setRowValue(json)});},[id]);
  
  useEffect(() => {
      setnewName(rowValue['name']);
      setnewUsername(rowValue['username']);
      setnewEmail(rowValue['email']);
      setnewPhone(rowValue['phone']);
      setnewWebsite(rowValue['website']);
  },[rowValue]);
  
  

    return (
        <div>
            <form className={`form-container ${classes.root}`} noValidate autoComplete="off" 
            onSubmit={(e) => {
                e.preventDefault();
                props.handleUpdate(id,newName,newUsername,newEmail,newPhone,newWebsite)
                history.push("/");
            }} >
                <div className="field_box">     
                <label className='labeled_value'> Enter Name: </label>
                <TextField id="outlined-basic"  variant="outlined" value={newName} onChange={(e)=> setnewName(e.target.value)} /> 
                </div>
                <div className="field_box">
                <label className='labeled_value'> Enter User: </label>
                    <TextField id="outlined-basic"  variant="outlined" value={newUsername} onChange={(e)=> setnewUsername(e.target.value)} /> 
                </div>
                <div className="field_box">
                <label className='labeled_value'> Enter Email : </label>
                    <TextField id="outlined-basic"  variant="outlined" value={newEmail} onChange={(e)=> setnewEmail(e.target.value )} /> 
                
                </div>
                <div className="field_box">
                <label className='labeled_value'> Enter Phone : </label>
                    <TextField id="outlined-basic"  variant="outlined" value={newPhone} onChange={(e)=> setnewPhone(e.target.value)}/> 
                </div>
                <div className="field_box">
                <label  className='labeled_value'> Enter Website:  </label>
                    <TextField id="outlined-basic"  variant="outlined" value={newWebsite} onChange={(e)=> setnewWebsite(e.target.value)} /> 
                </div>
                <input className="btn1_btn"  type="submit" value="Submit" />
            
            <Link to='/'>
            <button className="btn1_btn"> Back</button>
            </Link>
            </form>
        </div>
         
    )
}

export default EditElement;
