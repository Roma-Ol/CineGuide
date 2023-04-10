import React, { useEffect, useState } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';

const withParticlesBackground = (WrappedComponent) => {
	return (props) => {
		const [particlesOptions, setParticlesOptions] = useState(null);

		useEffect(() => {
			import('./particlesjs-config.json').then((config) => {
				setParticlesOptions(config);
				console.log(config);
			});
		}, []);

		const particlesInit = async (main) => {
			console.log(main);
			await loadFull(main);
		};

		return (
			<>
				{particlesOptions && (
					<Particles id='tsparticles' init={particlesInit} options={particlesOptions.default} />
				)}
				<WrappedComponent {...props} />
			</>
		);
	};
};

export default withParticlesBackground;
