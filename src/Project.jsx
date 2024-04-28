import Tilt from 'react-parallax-tilt'
import {useEffect, useRef } from "react";

export default function Project ( props ) {

	const langBubble = useRef ();

	useEffect(() => {
		const bubbleWindow = langBubble.current;

		switch ( props.lang ) {
			case 'C':
				bubbleWindow.classList.add( 'bg-C/C++' )
				break;
			case 'Java':
				bubbleWindow.classList.add( 'bg-Java' )
				break;
			case 'Swift':
				bubbleWindow.classList.add( 'bg-Swift' )
				break;
			case 'Node JS':
				bubbleWindow.classList.add( 'bg-NodeJS' )
				break;
		}
	}, []);


	return (
		<Tilt
			tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.05} glarePosition="all"
		>
			<div
				className={'bg-lighter-bg w-[310px] md:w-[400px] h-full shadow-lg rounded-lg p-3 flex flex-col gap-2'}
			>
				<div
					className={'flex justify-between'}
				>
					<h3 className={'font-light text-md'}>{props.title}</h3>
					<div
						ref={ langBubble }
						className={`w-[80px] text-center text-black font-semibold rounded-xl`}
					>
						{ props.lang }
					</div>
				</div>
				<p className={'text-sm'}>{props.descr}</p>
				<a href={`${props.a}`} className={'underline underline-offset-2 w-fit'} target={'_blank'}>View Code</a>
			</div>
		</Tilt>
	)
}