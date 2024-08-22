'use client' // This is a client component 👈🏽

import CustomList from '../../@common/faq-common/CustomList'

interface ListFaq {
	id: number
	title: string
	content: string
}

const listOne: ListFaq[] = [
	{
		id: 1,
		title: 'Why should I invest in the Connoisseurs Club IGT’s ',
		content: 'Investors in the Connoisseur brand aged Irish Whiskey are, first and foremost investors seeking to profit from the increasing value of aging Irish Whiskey represented by StarIGTs and who see the great opportunity to make money by trading, buying and selling Connoisseur brand aged Irish Whiskey in a marketplace at their finger-tips. As Connoisseur Irish Whiskey matures, it appreciates in value at a projected average of 12% to 15% annually, making it an excellent medium to long-term investment.',
	},
	{
		id: 2,
		title: 'What is the Connoisseurs Club?',
		content: 'The Connoisseurs Club is an exclusive member’s club, where investors automatically become members when they purchase bottles and casks of Connoisseur brand aged Irish Whiskey StarIGT’s (Income Generated Tokens).  Owning StarIGTs, which are attached to the aged Irish Whiskey, gives members the ability to enjoy passive income from owning the tokenized aged Irish Whiskey and from the income generated from Connoisseurs Club operations. ',
	},
	{
		id: 3,
		title: 'How much does it cost to become a Connoisseur Club Member? ',
		content: 'There is no membership fee to join the Connoisseur Club, as your membership is included when you purchase Connoisseur branded products, which initially are aged bottles and casks of Irish Whiskey.',
	},
]

const listTwo: ListFaq[] = [
	{
		id: 1,
		title: 'What is Connoisseur brand Aged Irish Whiskey?',
		content: 'Connoisseur brand Aged Irish Whiskey is Oak Cask aged Single Pot Still Irish Whiskey. Initially, casks are purchased from premier Distilleries and soon will additionally distilled at Connoisseurs Club distilleries. We have eight products to choose from when investing; 12 year Irish Whiskey bottles and casks, 18 year Irish Whiskey bottles and casks, 25 year Irish Whiskey bottles and casks and 50 year Irish Whiskey bottles and casks.',
	},
	{
		id: 2,
		title: 'How are the sprites kept?',
		content: '<p>The Connoisseurs Club is building its own purpose-built bonded warehouse maturation facilities. Insurance and storage for the entire maturation period are fully covered in the purchase of the StarIGT Irish Whiskey tokens.</p>' + '<br/>' +
			'<p> People who invest in contracts or tokens representing tangible assets are often worried about operations and maintenance during the holding period, and rightly so! We offer storage in a government-bonded, fully insured warehouse, meaning that the casks are safe against fire, floods, theft or accidental damage. Investors can leave their investment to grow with perfect peace of mind.\n</p>',
	},
	{
		id: 3,
		title: 'Can I request samples of my cask whiskey?',
		content: 'Yes! You can request samples of your whiskey cask. You can also request a re-gauge to give an update on your cask’s maturation.',
	},
]

const listThree: ListFaq[] = [
	{
		id: 1,
		title: 'What are StarIGT’s?',
		content: 'IGT stands for Income Generating Tokens and these tokens represent ownership in Connoisseur branded aged Irish Whiskey products. ',
	},
	{
		id: 2,
		title: 'How does StarIGT work?',
		content: 'IGTs are digital tokens are RWA (representing real-world business assets) that can be bought from or sold to other members via the StarIGT notice board. Investors who purchase StarIGT tokens enjoy a stream of passive income simply by investing in StarIGT’s and becoming a member of the Connoisseurs Club.',
	},
	{
		id: 3,
		title: 'How do I buy StarIGTs?',
		content: 'StarIGTs can be purchased with StarXP tokens, which can be purchased in your StarWALLET, or with StarX tokens, which can also be purchased from within your StarWALLET on market at Latoken or the Coinstore exchange. You will need to register and complete the KYC process. You can store StarXP, StarX and StarIGT’s in your StarWALLET.',
	},
]

export default function ListFaqs(): JSX.Element {
	return (
		<div className={'text-black'}>
			<div className={'mx-[2em] lg:mx-[10em] py-[5em]'}>
				<div className={'grid grid-cols-1 lg:grid-cols-3'} style={{gap: '5em'}}>
					<div className={'flex flex-col gap-[1em]'}>
						<h5 className={'text-[1.5em] font-[600]'}>
							The Connoisseurs Club
						</h5>
						<div className={'flex flex-col'}>
							{listOne.map((item: ListFaq, index: number) => {
								return (
									<div key={index} className={'flex flex-col py-5'}>
										<div className={''}>
											<CustomList key={item.id} title={item.title} content={item.content}/>
										</div>
									</div>
								)
							})}
						</div>

					</div>
					<div className={'flex flex-col gap-[1em]'}>
						<div className={''}>
							<h5 className={'text-[1.5em] font-[600]'}>
								Connoisseur brand Aged Irish Whiskey
							</h5>
						</div>
						<div className={'flex flex-col'}>
							{listTwo.map((item: ListFaq, index: number) => {
								return (
									<div key={index} className={'flex flex-col py-5'}>
										<div className={''}>
											<CustomList key={item.id} title={item.title} content={item.content}/>
										</div>
									</div>
								)
							})}
						</div>

					</div>
					<div className={'flex flex-col gap-[1em]'}>
						<div className={''}>
							<h5 className={'text-[1.5em] font-[600]'}>
								Connoisseur brand Aged Irish Whiskey
							</h5>
						</div>
						<div className={'flex flex-col'}>
							{listThree.map((item: ListFaq, index: number) => {
								return (
									<div key={index} className={'flex flex-col py-5'}>
										<div className={''}>
											<CustomList key={item.id} title={item.title} content={item.content}/>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
