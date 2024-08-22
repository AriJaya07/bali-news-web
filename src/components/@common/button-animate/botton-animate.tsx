'use client'

import styles from './botton-animate-style.module.css'

export default function BottonAnimate({text}: { text: { default: string, hovered: string } }): JSX.Element {
	return (
		<div>
			<button className={`${styles.button}`}>
				<span className={styles.text}>{text.default}</span>
				<span className={styles.hoverText}>{text.hovered}</span>
			</button>
		</div>
	)
}
