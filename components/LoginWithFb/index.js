import FacebookLogin from 'react-facebook-login'

export default function Login() {

  const responseFacebook = res => {
    console.log(res);
  }

  const componentClicked = res => {
    console.log(res);
  }
  const fail = (e) => {
    console.log(e);
  }
  return <>
    <FacebookLogin
      appId="459036055340708"
      autoLoad={true}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
      size='small'
      scope='public_profile,email,user_birthday'
      returnScopes={true}
      onFailure={fail}
    />

  </>
}