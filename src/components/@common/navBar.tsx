'use client'
import { useState } from "react";
import {
	Bars3Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Navbar(): JSX.Element {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className={'app fixed w-full z-[99] bg-black'}>
			<nav>
				<div className="mx-auto">
					<div className="flex mx-auto justify-between w-5/6 ">
						<div className="flex items-center gap-16 my-3 w-full justify-between">
							<Link href={'/homepage'} target={'_self'} className={''}>
								<div className={''}>
									<img src={'images/logo/profile.jpg'} alt={'header-image'} className={'w-[3em] h-[3em] rounded-full'}/>
								</div>
							</Link>
							<div className="hidden lg:flex gap-8 ">
								<Link href={'https://ari-portfolio.web.app'} target={'_blank'} className="text-[#E3D2C2]">
									About Us
								</Link>
								<Link href={'/news-app'} target={'_self'} className="text-[#E3D2C2]">News App</Link>
								<Link href={'/favorites-app'} target={'_self'} className="text-[#E3D2C2]">Favorites</Link>
								<Link href={'/faqs-app'} target={'_self'} className="text-[#E3D2C2]">FAQs</Link>
							</div>
						</div>
						<div className="flex gap-6">
							<div className="lg:hidden flex items-center">
								<button onClick={(): void => setToggleMenu(!toggleMenu)}>
									<Bars3Icon className="h-10" />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					className={`fixed z-40 w-full bg-black overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
						!toggleMenu ? "h-0" : "h-full"
					}`}
				>
					<div className="px-8">
						<div className="flex flex-col gap-8 font-bold tracking-wider mt-4">
							<Link href={'/aboutUs'} target={'_self'} className="text-[#E3D2C2]">
								About Us
							</Link>
							<Link href={'/product'} target={'_self'} className="text-[#E3D2C2]">Product</Link>
							<Link href={'/marketplace'} target={'_self'} className="text-[#E3D2C2]">Marketplace</Link>
							<Link href={'/faq'} target={'_self'} className="text-[#E3D2C2]">FAQs</Link>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
