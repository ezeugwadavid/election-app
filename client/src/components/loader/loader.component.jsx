import React from 'react';
import { LoaderContainer } from './loader.styles';
import LoaderImage from '../../assets/slickmedialoader.gif';

const Loader = () => (
	<LoaderContainer>
		<img src={LoaderImage} alt=""/>
	</LoaderContainer>
);

export default Loader;
