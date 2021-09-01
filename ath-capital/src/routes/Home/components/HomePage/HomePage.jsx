import React from 'react';

import Navbar from './../Navbar';
import Main from './../Main';
import Body from './../Body';
import Footer from './../Footer';

function Home() {
	const style = {
		zIndex: -1,
		opacity: 0.1,
		top: '71px',
		position: 'absolute',
		left: 0,
		right: 0,
		pointerEvents: 'none',
	}
	const styleZ = {
		position: 'relative',
		zIndex: 0,
	}
	return (
		<div className='root' style={styleZ}>
			<div style={style}>
			<div className='main-video'>
				<video
					video__selfhosted
					className='video__selfhosted'
					autoPlay
					muted
					playsInline
					loop
					webkitallowfullscreen
					mozallowfullscreen
					allowFullScreen
					width='100%'
				>
					<source src='assets/video.mp4' type='video/mp4'/>
					Your browser does not support the video tag
				</video>
			</div>
		</div>
			<div id='main_background' />
			<div className='container'>
				<Navbar />
				<Main />
				<Body />
				<Footer />
			</div>
		</div>
	);
}

export default Home;
