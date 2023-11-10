"use client";
import { getAuth } from "firebase/auth";
import Image from "next/image";
import style from "./profile.module.css";
import Link from "next/link";

export default function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;

  // Declaring displayname and email here so that if firbase do not loads the default value will be none and app will run normal
    let displayName,email;

  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    // const email = user.email;
    // const photoURL = user.photoURL;
    // const emailVerified = user.emailVerified;
    // const uid = user.uid;
    displayName = user.displayName;
    email = user.email;

  }
  return (
    <>
      <div className={style.container}>
        <div className={style.profilebox}>
          <div className={style.info}>
            <div className={style.name}>{displayName}</div>
            <div className={style.class}>{email}</div>
          </div>

          <div className={style.features}>
            <div className={style.box}>
              <Link href="/feestatus">Fee Status</Link>
              <div
                style={{ backgroundColor: "#94f18b" }}
                className={style.label}
              ></div>
            </div>
            <div className={style.box}>
              Attendence
              <div
                style={{ backgroundColor: "#FF3659" }}
                className={style.label}
              ></div>
            </div>
            <div className={style.box}>
              Notice
              <div
                style={{ backgroundColor: "#171717" }}
                className={style.label}
              ></div>
            </div>
            <div className={style.box}>
              Performance
              <div
                style={{ backgroundColor: "#613659" }}
                className={style.label}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
