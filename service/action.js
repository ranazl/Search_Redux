import {RED,BLUE,YELLOW,PINK, LASTNAME, FIRSTNAME}from './type'




export const setBLUE=()=>
{
    return{
        type:BLUE
    }
}

export const setRED=()=>
{
    return{
        type:RED
    }
}

export const setYELLOW=()=>
{
    return{
        type:YELLOW
    }
}

export const setPINK=()=>
{
    return{
        type:PINK
    }
}
    export const setLASTNAME=(inputl)=>
{
 
    return{
        type:LASTNAME,
        changel :{
            Lastname : inputl
        }

    }
}
export const setFIRSTNAME=(inputF)=>
{
 
    return{
        type:FIRSTNAME,
        changeF :{
            Firstname : inputF
        }

    }
}


