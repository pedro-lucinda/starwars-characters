import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:root{
		--red: #734652;
		--dark-grey: #151515;
		--mid-grey: #282727;
		--light-grey: #C4C4C4;

		font-family: "Archivo Narrow", "Roboto", "Helvetica Neue",Helvetica,Arial,sans-serif;
		font-size: 10px;
		color: var(--light-grey);

		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeLegibility;

	}

		@keyframes up {
			from {
				opacity: 0;
				transform: translateY(16px)
			}
			to {
				opacity: 1;
				transform: translateY(0)
			}
		}
		.animateUp {
			animation-name: up;
			animation-duration: 1000ms;
			animation-fill-mode: backwards;
		}




`;
