import {defineStore} from 'pinia'
import{useFirebaseAuth} from 'vuefire'
import {signInWithEmailAndPassword} from 'firebase/auth'

export const useAuthStore  = defiineStore('Auth', () =>{

    const auth = useFirebaseAuth()

    const errorCodes ={
        'auth/user-not-found' :'Usuario no encontrado',
        'auth/wrong-password' : 'El password es incorrecto'
    }
    const login = (email, password) =>{
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{

        })
        .catch(error=>{
            console.log(errorCodes[error.code])
        })
    }
    return{
        login
    }
})