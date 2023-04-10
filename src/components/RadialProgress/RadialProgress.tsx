import React, { useEffect, useState } from 'react';
import './RadialProgress.scss';
import { FC } from 'react';

type RadialProgressProps = {
	progress: number,
	label: string,
	customStyles?: string,
	postFix: string
}

const RadialProgress: FC<RadialProgressProps> = ({ progress, label, customStyles, postFix }) => {
	const [leftSidePercentage, setLeftSidePercentage] = useState(0);
	const [rightSidePercentage, setRightSidePercentage] = useState(0);

	useEffect(() => {
		setLeftSidePercentage(progress >= 50 ? 180 : progress * 3.6);
		setRightSidePercentage(progress >= 50 ? ((progress - 50) * 3.6) + 180 : 0);
	}, [progress]);

	const leftSideStyle = {
		transform: `rotate(${leftSidePercentage}deg)`,
	};

	const rightSideStyle = {
		transform: `rotate(${rightSidePercentage}deg)`,
	};

	const pieClipStyle = {
		clip: `${progress <= 50 ? 'rect(0, 130px, 130px, 65px)' : 'rect(auto, auto, auto, auto)'}`,
	};

	return (
		<div className='progress--radial'>
			<div className='label'>
				{label && `${label}:`}
				<span>{progress.toFixed(0)}{postFix && postFix}</span>
			</div>
			<div className='pie' style={pieClipStyle}>
				<div className='left-side half-circle' style={leftSideStyle}></div>
				<div className='right-side half-circle' style={rightSideStyle}></div>
			</div>
			<div className='shadow'></div>
		</div>
	);
};

export default RadialProgress;