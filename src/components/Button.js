import React from 'react';
import './button.css';

function Button({ onclick, title, variation, style }) {
	return (
		<>
			<button
				onClick={onclick}
				style={style}
				className={`${variation}-btn btn-style`}>
				{title}
			</button>
		</>
	);
}

export default Button;
