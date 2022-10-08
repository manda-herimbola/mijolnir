import {useNavigate} from "react-router-dom";
import {useRecoilValue, useSetRecoilState} from "recoil";
import useInitAuthState from "../../state/users/useInitAuthState";
import UseUrlUsers from "../../state/users/useUrlUsers";
import ErrorValidation from "../../state/users/ErrorValidation";

const usePostUsers = () => {

    const navigate: any = useNavigate()
    const setAuth: any = useSetRecoilState(useInitAuthState)
    const url: string = useRecoilValue(UseUrlUsers)
    const setErrValidate: any = useSetRecoilState(ErrorValidation)

    const PostUsers: any = async ( users: UserType ) => {

        try {
            const response = await fetch(`http://localhost:5000/users/${ url } `, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(users)
            })

            if ( url === 'login' ){
                const { token } = await response.json()

                if ( response.status === 200 ){
                    localStorage.setItem('token', token)
                    setAuth(true)
                    navigate('/')
                } else {
                    console.error('No authorized')
                    setErrValidate( [ true, true ] )
                }

            }else if ( url === 'create' ){

                console.log(await response.json())

            }else await response;
        } catch (err) { console.log(err) }

    }

    return PostUsers;

};

export type UserType = {
    email?: string,
    username?: string
    password?: string | number,
}

export default usePostUsers;