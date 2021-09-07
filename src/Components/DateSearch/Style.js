import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    Datesearch:{
        position: 'absolute',
        top: '35px',
        left: '25%',
        width: '100vw',
        "& h2":{
            display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '559px',
    padding: '10px',
    backgroundColor: 'white',
    position: 'absolute',
    left: '0',
    top: '380px',
        },

        "& input":{
            width: '539px',
            padding: '20px',
            position: 'absolute',
            left: '0',
            height: '30px',
            top: '420px',
            border: 'none',

            "&:focus":{
                outlineWidth: '0',
            }
        },

    }
    ,
    btn:{
        position: 'absolute',
        left: '0',
        top: '480px',
        backgroundColor: '#ff7779',
        color: 'white',
        width: '579px',

        "&:hover":{
            backgroundColor: 'white',
            color: '#ff7779',
        }
    }
}))