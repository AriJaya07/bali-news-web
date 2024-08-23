"use client"; // This is a client component 👈🏽

import Link from "next/link";
import { ChangeEvent, FormEvent, useReducer, useState } from "react";

// import Swal from 'sweetalert2'
import { ADDR } from "@/@utils/env";

class ElementData {
  public email: string | undefined;
}

export default function Footer(): JSX.Element {
  const [, forceUpdate] = useReducer((x: number) => x + 1, 0);
  const [d] = useState(new ElementData());
  console.log(d, forceUpdate);
  const [email, setEmail] = useState("");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    // if (!email) {
    // 	void Swal.fire({
    // 		icon: 'error',
    // 		html: 'Please enter your email first!',
    // 		footer: '',
    // 	})
    // 	return
    // }

    // try {
    // 	const response: Response = await fetch(ADDR.CMS + '/database-users', {
    // 		method: 'POST',
    // 		body: JSON.stringify({email}),
    // 		headers: {
    // 			'Content-Type': 'application/json'
    // 		}
    // 	})
    // 	if (response.status === 200) {
    // 		await Swal.fire({
    // 			icon: 'success',
    // 			title: 'Success!',
    // 			html: 'Thank you for subscribing to our newsletter',
    // 			footer: ''
    // 		})
    // 		setEmail('')
    // 	} else if (response.status === 400) {
    // 		void Swal.fire({
    // 			icon: 'error',
    // 			title: 'Oppss!!',
    // 			html: 'This email is already registered!',
    // 			footer: ''
    // 		})
    // 	} else {
    // 		throw new Error('Failed to subscribe.')
    // 	}
    // } catch (error) {
    // 	console.log(error)
    // }
  };

  return (
    <div
      className={
        "text-[#B58765] bg-black relative z-[10] flex flex-col justify-center lg:px-[5em] px-[2em] py-[5em]"
      }
    >
      <div className={"flex flex-wrap lg:gap-[8em] gap-[4em]"}>
        <div
          className={
            "flex lg:flex-row flex-col items-center gap-[2em] mt-[-0.5em]"
          }
        >
          <div className={"w-[5em]"}>
            <img
              src={"images/logo/profile.jpg"}
              alt={"footer-logo"}
              className={"w-[5em] h-[5em] rounded-full"}
            />
          </div>
          <div className={"flex flex-col leading-loose flex-1"}>
            <h5
              className={"md:text-[2.5em] text-[1.5em] font-[700]"}
              style={{ fontFamily: "Montserrat" }}
            >
              Bali News
            </h5>
            <span className={"text-[1em]"} style={{ fontFamily: "Inter" }}>
              <p className={"font-[400]"}>Bali, Indonesia</p>
            </span>
            <span className={"text-[1em]"}>
              <p className={"font-[600]"}>Contact Us</p>
              <p className={"font-[400]"}>arijaya130@gmail.com</p>
            </span>
          </div>
        </div>
        <div className={"flex flex-col leading-loose poppins"}>
          <h5 className={"font-[600] text-[1.5em]"}>Connoisseur Club</h5>
          <Link href={"/homepage"} target={"_self"} className={""}>
            <p className={"font-[400] text-[1em]"}>Home</p>
          </Link>
          <Link
            href={"https://ari-portfolio.web.app/"}
            target={"/self"}
            className={""}
          >
            <p className={"font-[400] text-[1em]"}>About Us</p>
          </Link>
          <Link href={"/news-app"} target={"_self"} className={""}>
            <p className={"font-[400] text-[1em]"}>News App</p>
          </Link>
        </div>
        <div className={"flex flex-col leading-loose poppins"}>
          <h5 className={"font-[600] text-[1.5em]"}>Learn</h5>
          <Link href={"/faqs-app"} target={"_self"} className={""}>
            <p className={"font-[400] text-[1em]"}>FAQs</p>
          </Link>
          <Link href={"/"} target={"_self"} className={""}>
            <p className={"font-[400] text-[1em]"}>Police Terms</p>
          </Link>
        </div>
        <div className={"flex flex-col leading-loose poppins"}>
          <div className={""}>
            <p className={"font-[600] text-[1.5em]"}>Get our updates</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={"flex flex-row gap-[1em]"}>
              <input
                onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                  setEmail(e.target.value)
                }
                type={"email"}
                className={
                  "bg-[#FFFFFF1C] bg-opacity-10 border-0 px-6 py-2 rounded-2xl focus:outline-none w-full"
                }
                placeholder={"Enter your email..."}
                value={email}
              />
              <button type={"submit"} className={"cursor-pointer"}>
                <img
                  src={"images/homepage/navigation.svg"}
                  alt={"navigation"}
                  className={"w-[4em]"}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={"mt-[5em]"}>
        <p className={"text-center font-[400] text-[0.85em] poppins"}>
          © 2024 Connoisseurs Club Ltd. All right reserved.
        </p>
      </div>
    </div>
  );
}
