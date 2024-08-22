import { useRef, useState } from 'react'

export default function CustomList(props: {key: number, title: string, content: string}): JSX.Element {
	const [isOpen, setIsOpen] = useState(false)
	const contentRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null)

	const toggleContent = (): void => {
		setIsOpen(!isOpen)
	}

	const getContentHeight = (): number => {
		return isOpen ? contentRef?.current?.scrollHeight || 0 : 0;
	}
	return (
		<div>
			<div className={'flex flex-row items-center justify-between gap-[1em] pb-[0.5em] cursor-pointer'} onClick={toggleContent}>
				<p className={'flex-1 font-[500] text-[1em]'}>
					{props.title}
				</p>
				<div className={'w-[1em]'} style={{ transform: isOpen ? 'rotate(45deg)' : '', transition: 'transform 1s ease'}}>
					<img src={'images/faq/plus.svg'} alt={'plus'} className={'w-[1em]'}/>
				</div>
			</div>
			<div className={'overflow-hidden transition-height duration-300 font-[400] text-[0.85em]'} style={{ maxHeight: isOpen ? `${getContentHeight()}px` : '0'}}>
				{/* Render the content as HTML */}
				<div ref={contentRef} dangerouslySetInnerHTML={{__html: props.content}}/>
			</div>
			<div className={'py-[0.5em]'}>
				<hr className={'w-full'}/>
			</div>
		</div>
	)
}
