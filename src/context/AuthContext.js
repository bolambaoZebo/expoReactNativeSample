import createDataContext from './createDataContext';
import trakerApi from '../api/tracker'
import AsyncStorage from "@react-native-community/async-storage";
import { navigate } from '../navigation/navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signout':
      return { errorMessage: '', token: null};
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: ''};
    default:
      return state;
  }
};

const signup = dispatch => async ({ email, password }) => {
  console.log("sign up")
    // make api request to  sign up wiht the email and password
      try {
        const response = await trakerApi.post('/signup', { email, password});
        await AsyncStorage.setItem('token', response.data.token);
         dispatch({ type: 'signin', payload: response.data.token });
        // navigate to mainflow
         navigate('mainFlow')
         console.log(response.data)
      }catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'});
      }
   
};

const signin = dispatch => async ({ email, password }) => {
    console.log(`sign in${email} ${password}`)
    // make api request to  sign in wiht the email and password
    try {
      const response = await trakerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("TrackList");
       console.log(response.data)
    }catch (err) {
      console.log(`@@@@${err}`)
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'});
    }    
};

const signout = dispatch => async () => {
   console.log('logout')
   await AsyncStorage.removeItem('token');
   dispatch({ type: 'signout' });
   navigate('loginFlow');
  };

const tyrLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if(token) {
    dispatch({ type: 'singin', payload: token });
    navigate('TrackList');
  }else {
    navigate('loginFlow');
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tyrLocalSignin },
  { token: null, errorMessage: '' }
);