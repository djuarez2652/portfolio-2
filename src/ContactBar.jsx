import { useState } from 'react';

import GithubLogo from "/github-logo.png"
import GmailLogo from '/gmail-logo.webp'
import LinkedInLogo from '/linkedin-logo.webp'
import X from '/x-button.png'


export default function ContactBar () {

	const [ copySuccess, setCopySuccess ] = useState( null );
	const [ showCopy, setShowCopy ] = useState( false );

	async function copyToClipBoard ( ) {
		try {
			await navigator.clipboard.writeText( "dj2652@columbia.edu" );
			setCopySuccess( true );
			setShowCopy( true )

		}
		catch ( err ) {
			setCopySuccess( false );
			setShowCopy( true )
		}
	}

	function handleClose() {
		setShowCopy( false );
		setCopySuccess( null );
	}

	return (
		<>
			<div
				className={'h-[40px] w-[110px] p-1 md:h-[70px] md:w-[160px] flex md:p-4 justify-between relative'}
			>
				<a href={'https://github.com/djuarez2652/'} target={'_blank'}>
					<img src={GithubLogo} className={'h-full'}/>
				</a>
				<a onClick={ copyToClipBoard } target={'_blank'}>
					<img src={GmailLogo} className={'h-full'}/>
				</a>
				<a href={'https://www.linkedin.com/in/david-juarez-429603261/'} target={'_blank'}>
					<img src={LinkedInLogo} className={'h-full'}/>
				</a>
				{
					showCopy ?
						<div
							className={'absolute rounded-md w-[130%] top-[100%] left-[-20%] p-1 md:w-full md:top-[90%] h-fit md:p-3 md:left-[0%] text-sm text-center bg-slate-600'}
						>
							<p>
								{!copySuccess ? 'Copied Successfully!' : <span>Copy Failed</span>}<br/>
								{!copySuccess ? '' : <span className={'select-all text-xs'}>dj2652@columbia.edu</span>}
							</p>
							<img src={X} className={'h-[15px] w-[15px] md:h-[20px] md:w-[20px] absolute left-[83%] top-[10%] md:left-[85%] md:top-[10%]'} onClick={ handleClose }/>
						</div> :
						null
				}
			</div>
		</>

	)
}