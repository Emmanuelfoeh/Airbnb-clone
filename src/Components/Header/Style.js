import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    header:{
        width:'100%', 
        position:'sticky',
        top:'0',
        height:'15vh',
    },
    header_container:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    },
   
    image:{
        objectFit: 'contain',
        height: '100px',
    },

    header_search:{
        display:'flex',
        flex:'1',
        maxWidth:'fit-content',
        border: '1px solid lightgray',
        alignItems:'center',
        height: '40px',
        padding:'10px',
        borderRadius: '999px',
    },

    inputInput:{
        border: 'none',
  padding: '10px',
  outlineWidth: '0',
    },

    header_right:{
        display:'flex',
        alignItems:'center',
    }

}))