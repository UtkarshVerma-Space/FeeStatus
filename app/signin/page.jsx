
import style from "./account.module.css"


export default function Account(props) {

  return (
    <>
      <div className={style.container}>
        <div className={style.box}>
            <h1> Students Panel </h1>
            <p> Your Credentials are safe</p>
            <div className={style.input}>
              <p>Admin Id : Auto Detect</p>
              <p>Password: Auto Detect</p>

              <button onClick={props.action} type="submit">
                Get Access
              </button>
            </div>
          
        </div>
      </div>
     
    </>
  );
}
